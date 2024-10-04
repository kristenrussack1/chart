
require("dotenv").config();
const { Client } = require("@notionhq/client");

// Initialize Notion client with API key
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// Retrieve Notion database IDs from environment variables
const projectDatabaseId = process.env.NOTION_API_PROJECT_DATABASE;
const tasksDatabaseId = process.env.NOTION_API_TASKS_DATABASE;

projectName="";

async function fetchBizDev(){
    return fetchProjects("Business Development");
}

async function fetchRobotArm(){
    return fetchProjects("Robotic Arm Development");
}

async function fetchDemo(){
  return fetchProjects("Cleaning Process Improvements");
}


// Function to fetch projects and their hierarchical children
async function fetchProjects(projectName) {
  try {
  
    const projectResponse = await notion.databases.query({
      database_id: projectDatabaseId,
    });

    // Find the project by name
    const theProject = projectResponse.results.find(
      (page) =>
        page.properties["Project name"]?.title[0]?.text?.content === projectName
    );

    if (!theProject) {
      throw new Error("Project not found");
    }

    const theProjectId = theProject.id;
    console.log("Project Project ID:", theProjectId);

    // Function to recursively fetch hierarchical sub-items for a task
    async function getSubItems(parentId) {
      try {
        const response = await notion.databases.query({
          database_id: tasksDatabaseId,
          filter: {
            and: [
              {
                property: "Parent-task", // Assuming "Parent-task" is the relation property linking sub-items to tasks
                relation: {
                  contains: parentId
                }
              },
              {
                property: "Project",
                relation: {
                  contains: theProjectId
                }
              },
              {
                property: "Task Status",
                status: {
                  does_not_equal: "Archived"
                }
              }
            ]
          },
          sorts: [
            {
              property: "Start Date", // Sort sub-items by Start Date
              direction: "ascending"
            }
          ]
        });

        return await Promise.all(response.results.map(async (subItem) => ({
          id: subItem.id,
          name: subItem.properties["Task name"]?.title[0]?.text?.content || "Sub-item Name Not Available",
          actualStart: subItem.properties["Start Date"]?.date?.start || "Start Date Not Available",
          actualEnd: subItem.properties["End Date"]?.date?.start || "End Date Not Available",
          children: await getSubItems(subItem.id), // Recursively fetch sub-items
          progressValue: subItem.properties["Progress"]?.number || 0,
        })));
      } catch (error) {
        console.error("Error fetching sub-items:", error);
        return [];
      }
    }

    // Step 2: Fetch all tasks and their sub-items
    const tasksResponse = await notion.databases.query({
      database_id: tasksDatabaseId,
      filter: {
        and: [
          {
            property: "Project", // Assuming "Project" is the relation property linking tasks to projects
            relation: {
              contains: theProjectId,
            },
          },
          {
            property: "Parent-task", // Assuming "Parent item" is the relation property linking tasks to parent items
            relation: {
              is_empty: true // Filter tasks with no parent item
            }
          },
          
        ]
      },
    });

    const allTasks = await Promise.all(tasksResponse.results.map(async (task) => ({
      id: task.id,
      name: task.properties["Task name"]?.title[0]?.text?.content || "Task Name Not Available",
      actualStart: task.properties["Start Date"]?.date?.start || new Date('2024-06-01').toISOString(),
      actualEnd: task.properties["End Date"]?.date?.start || new Date('2024-06-01').toISOString(),
      parentId: task.properties["Parent item"]?.relation[0]?.id || null, // Corrected this line
      children: await getSubItems(task.id), // Fetch sub-items for each task
      progressValue: task.properties["Progress"]?.number || 0,
    })));

    console.log("Tasks with Sub-items:", JSON.stringify(allTasks, null, 2));
    
    allTasks.sort((a, b) => new Date(a.actualStart) - new Date(b.actualStart));

    // Exclude items with "Project Name Not Available"
    const filteredItems = allTasks.filter(item => item.name !== "Project Name Not Available");

    // Organize items into parent-children structure
    const itemsMap = {};
    filteredItems.forEach(item => {
        itemsMap[item.id] = item;
    });

    filteredItems.forEach(item => {
        if (item.parentId) {
            const parent = itemsMap[item.parentId];
            if (parent) {
                parent.children.push(item);
            }
        }
    });

    const topLevelItems = filteredItems.filter(item => !item.parentId);
    console.log("Top Level Items:", JSON.stringify(topLevelItems, null, 2));

// Calculate progress for parent tasks
function calculateProgress(tasks) {
  tasks.forEach(task => {
    if (task.children.length > 0) {
      calculateProgress(task.children);
      const totalProgress = task.children.reduce((sum, child) => sum + child.progressValue, 0);
      task.progressValue = totalProgress / task.children.length;
    }
  });
}

calculateProgress(topLevelItems);

// Adjusting progress values by dividing by 100 for top-level items
topLevelItems.forEach(task => {
  task.progressValue /= 100; // Adjust for the top-level items
  adjustChildProgress(task.children); // Adjust child tasks
});

// Function to adjust progress values for child tasks
function adjustChildProgress(children) {
  children.forEach(child => {
    child.progressValue /= 100;
    if (child.children.length > 0) {
      adjustChildProgress(child.children); // Recursively adjust child tasks
    }
  });
}

return topLevelItems; // Return the top level items


  } catch (error) {
    console.error("Error fetching projects and tasks:", error);
    throw error;
  }
}

// Main function to demonstrate usage
const main = async () => {
  try {
    // const projects = await fetchProjects(projectName);
    const projects = await fetchBizDev();
    console.log("Fetched Projects:", JSON.stringify(projects, null, 2));
  } catch (error) {
    console.error("An error occurred:", error);
  }
  try {
    // const projects = await fetchProjects(projectName);
    const projects2 = await fetchRobotArm();
    console.log("Fetched Projects:", JSON.stringify(projects2, null, 2));
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

main();


exports.fetchRobotArm = fetchRobotArm;
exports.fetchBizDev = fetchBizDev;
exports.fetchDemo = fetchDemo;
