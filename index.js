// // this works 

// require("dotenv").config();
// const { Client } = require("@notionhq/client");

// // Initialize Notion client with API key
// const notion = new Client({ auth: process.env.NOTION_API_KEY });

// // Retrieve Notion database ID from environment variables
// const databaseId = process.env.NOTION_API_DATABASE;

// // Function to fetch sub-item details
// const getSubItemNames = async (subItemIds) => {
//   try {
//     const subItemNames = await Promise.all(subItemIds.map(async (subItemId) => {
//       const response = await notion.pages.retrieve({ page_id: subItemId });
//       const subItemName = response.properties["Project Name"] && response.properties["Project Name"].title.length > 0
//         ? response.properties["Project Name"].title[0].text.content
//         : "Sub-item Name Not Available";
//       return subItemName;
//     }));
//     return subItemNames;
//   } catch (error) {
//     console.error("Error fetching sub-items:", error);
//     return ["Sub-item Names Not Available"];
//   }
// };


// // Function to fetch parent item name
// const getParentItemName = async (parentId) => {
//   try {
//     const response = await notion.pages.retrieve({ page_id: parentId });
//     const parentItemName = response.properties["Project Name"] && response.properties["Project Name"].title.length > 0
//       ? response.properties["Project Name"].title[0].text.content
//       : "Parent item Name Not Available";
//     return parentItemName;
//   } catch (error) {
//     console.error("Error fetching parent item:", error);
//     return "Parent item Name Not Available";
//   }
// };

// const getProgressFromNotion = async (projectId) => {
//   try {
//     // Assuming you have a Notion API client initialized as 'notion'
//     const response = await notion.pages.retrieve({ page_id: projectId });
//     const progress = response.properties["Progress"] && response.properties["Progress"].number;
//     return progress || 0; // Default to 0 if progress is undefined or null
//   } catch (error) {
//     console.error("Error fetching progress from Notion:", error);
//     return 0; // Default to 0 if there's an error fetching data
//   }
// };

// // Usage example:
// const projectId = subItemIds; // Replace with the actual project ID
// const progress = await getProgressFromNotion(projectId);
// console.log(progress); 

// // Function to fetch project details for all pages in the database
// const getDatabase = async () => {
//   try {
//     // Query the Notion database
//     const response = await notion.databases.query({ database_id: databaseId });
//     console.log("Raw response from Notion:", JSON.stringify(response, null, 2));

//     // Extract relevant properties for each page
//     const pageObjects = await Promise.all(response.results.map(async (page) => {
//       console.log("Page properties:", JSON.stringify(page.properties, null, 2));

//       const projectName = page.properties["Project Name"] && page.properties["Project Name"].title.length > 0
//         ? page.properties["Project Name"].title[0].text.content
//         : "Project Name Not Available";

//       const startDate = page.properties["Start Date"] && page.properties["Start Date"].date
//         ? page.properties["Start Date"].date.start || new Date('2024-06-01')
//         : new Date('2024-06-01');

//       const endDate = page.properties["End Date"] && page.properties["End Date"].date
//         ? page.properties["End Date"].date.start || new Date('2024-06-01')
//         : new Date('2024-06-01'); // Assign June 1st, 2024 as the default end date

//       // const parentItem = page.properties["Parent item"] && page.properties["Parent item"].relation[0]?.id
//       //   ? page.properties["Parent item"].relation[0].id
//       //   : "Parent item Not Available";


//       const parentItemId = page.properties["Parent item"] && page.properties["Parent item"].relation[0]?.id
//         ? page.properties["Parent item"].relation[0].id
//         : null;

//       const parentItem = parentItemId ? await getParentItemName(parentItemId) : "Parent item Not Available";

//       const subItemIds = page.properties["Sub-item"] && page.properties["Sub-item"].relation.length > 0
//         ? page.properties["Sub-item"].relation.map(relation => relation.id)
//         : [];

//       const subItemNames = subItemIds.length > 0 ? await getSubItemNames(subItemIds) : ["Sub-item Names Not Available"];


//       const progress = page.properties["Progress"] && page.properties["Progress"].number ? page.properties["Progress"].number : 0;

//       // const rollupProgress = subItemIds.length > 0 ? subItemIds.reduce((acc, id) => {
//       //   const subItemProgress = page.properties[`Sub-item ${id}`] && page.properties[`Sub-item ${id}`].number ? page.properties[`Sub-item ${id}`].number : 0;
//       //   return acc + subItemProgress;
//       // }, 0) / subItemIds.length : progress;

//       const rollupProgress = page.properties["Rollup"] && page.properties["Rollup"].Rollup ? page.properties["Rollup"].Rollup : 0;

//       const ugh = page.properties["Number"] && page.properties["Number"].number ? page.properties["Number"].number : 0;


//       console.log("Page object:", page);
//       console.log("Page properties:", page.properties);

//       return {
//         projectName: projectName,
//         startDate: startDate,
//         endDate: endDate,
//         parentItem: parentItem,
//         subItemNames: subItemNames,
//         subItemIds: subItemIds,
//         progress: progress,
//         rollupProgress: rollupProgress,
//         ugh: ugh
//       };
//     }));

//     return pageObjects;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

// // Main function to demonstrate usage
// const main = async () => {
//   try {
//     // Fetch project details for all pages in the database
//     const pages = await getDatabase();

//     // Log the details
//     console.log("Pages:", JSON.stringify(pages, null, 2));

//     return pages; // Return the array of page details
//   } catch (error) {
//     console.error("An error occurred:", error);
//     throw error;
//   }
// };

// // Execute the main function
// main();

// exports.getDatabase = getDatabase;











// this gives the right info into the host file but not the right set up

// require("dotenv").config();
// const { Client } = require("@notionhq/client");

// // Initialize Notion client with API key
// const notion = new Client({ auth: process.env.NOTION_API_KEY });

// // Retrieve Notion database ID from environment variables
// const databaseId = process.env.NOTION_API_DATABASE;



// // Function to fetch sub-item details
// const getSubItemNames = async (subItemIds) => {
//   try {
//     const subItemNames = await Promise.all(subItemIds.map(async (subItemId) => {
//       const response = await notion.pages.retrieve({ page_id: subItemId });
//       const subItemName = response.properties["Project Name"] && response.properties["Project Name"].title.length > 0
//         ? response.properties["Project Name"].title[0].text.content
//         : "Sub-item Name Not Available";
//       return subItemName;
//     }));
//     return subItemNames;
//   } catch (error) {
//     console.error("Error fetching sub-items:", error);
//     return ["Sub-item Names Not Available"];
//   }
// };

// // Function to fetch parent item name
// const getParentItemName = async (parentId) => {
//   try {
//     const response = await notion.pages.retrieve({ page_id: parentId });
//     const parentItemName = response.properties["Project Name"] && response.properties["Project Name"].title.length > 0
//       ? response.properties["Project Name"].title[0].text.content
//       : "Parent item Name Not Available";
//     return parentItemName;
//   } catch (error) {
//     console.error("Error fetching parent item:", error);
//     return "Parent item Name Not Available";
//   }
// };

// const getProgressFromNotion = async (projectId) => {
//   try {
//     const response = await notion.pages.retrieve({ page_id: projectId });
//     const progress = response.properties["Progress"] && response.properties["Progress"].number;
//     return progress || 0; // Default to 0 if progress is undefined or null
//   } catch (error) {
//     console.error("Error fetching progress from Notion:", error);
//     return 0; // Default to 0 if there's an error fetching data
//   }
// };

// const getDatabase = async () => {
//   try {
//     const response = await notion.databases.query({ database_id: databaseId });
//     console.log("Raw response from Notion:", JSON.stringify(response, null, 2));

//     const pageObjects = await Promise.all(response.results.map(async (page) => {
//       console.log("Page properties:", JSON.stringify(page.properties, null, 2));

//       const projectName = page.properties["Project Name"] && page.properties["Project Name"].title.length > 0
//         ? page.properties["Project Name"].title[0].text.content
//         : "Project Name Not Available";

//       const startDate = page.properties["Start Date"] && page.properties["Start Date"].date
//         ? page.properties["Start Date"].date.start || new Date('2024-06-01')
//         : new Date('2024-06-01');

//       const endDate = page.properties["End Date"] && page.properties["End Date"].date
//         ? page.properties["End Date"].date.start || new Date('2024-06-01')
//         : new Date('2024-06-01'); // Assign June 1st, 2024 as the default end date

//       const parentItemId = page.properties["Parent item"] && page.properties["Parent item"].relation[0]?.id
//         ? page.properties["Parent item"].relation[0].id
//         : null;

//       const parentItem = parentItemId ? await getParentItemName(parentItemId) : "Parent item Not Available";

//       const subItemIds = page.properties["Sub-item"] && page.properties["Sub-item"].relation.length > 0
//         ? page.properties["Sub-item"].relation.map(relation => relation.id)
//         : [];

//       const subItemNames = subItemIds.length > 0 ? await getSubItemNames(subItemIds) : ["Sub-item Names Not Available"];

//       const progress = page.properties["Progress"] && page.properties["Progress"].number ? page.properties["Progress"].number : 0;

//       const rollupProgress = page.properties["Rollup"] && page.properties["Rollup"].Rollup ? page.properties["Rollup"].Rollup : 0;

//       const ugh = page.properties["Number"] && page.properties["Number"].number ? page.properties["Number"].number : 0;

//       console.log("Page object:", page);
//       console.log("Page properties:", page.properties);

//       return {
//         id: page.id,
//         projectName: projectName,
//         startDate: startDate,
//         endDate: endDate,
//         parentItem: parentItem,
//         parentItemId: parentItemId,
//         subItemNames: subItemNames,
//         subItemIds: subItemIds,
//         progress: progress,
//         rollupProgress: rollupProgress,
//         ugh: ugh
//       };
//     }));

//     return pageObjects;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

// const main = async () => {
//   try {
//     const pages = await getDatabase();
//     return pages;
//   } catch (error) {
//     console.error("An error occurred:", error);
//     throw error;
//   }
// };

// main();

// exports.getDatabase = getDatabase;







// this code returns the binary tree into termal but then wont get it in to the host file 

// require("dotenv").config();
// const { Client } = require("@notionhq/client");

// // Initialize Notion client with API key
// const notion = new Client({ auth: process.env.NOTION_API_KEY });

// // Retrieve Notion database ID from environment variables
// const databaseId = process.env.NOTION_API_DATABASE;

// // Define TreeNode class
// class TreeNode {
//   constructor(project) {
//     this.project = project;
//     this.children = [];
//   }


// calculateAverageProgress() {
//   if (this.children.length === 0) {
//     return this.project.progress || 0;
//   }

//   const totalProgress = this.children.reduce((acc, child) => acc + child.calculateAverageProgress(), 0);
//   return totalProgress / this.children.length;
// }
// }

// // Function to fetch sub-item details
// const getSubItemNames = async (subItemIds) => {
//   try {
//     const subItemNames = await Promise.all(subItemIds.map(async (subItemId) => {
//       const response = await notion.pages.retrieve({ page_id: subItemId });
//       const subItemName = response.properties["Project Name"] && response.properties["Project Name"].title.length > 0
//         ? response.properties["Project Name"].title[0].text.content
//         : "Sub-item Name Not Available";
//       return subItemName;
//     }));
//     return subItemNames;
//   } catch (error) {
//     console.error("Error fetching sub-items:", error);
//     return ["Sub-item Names Not Available"];
//   }
// };

// // Function to fetch parent item name
// const getParentItemName = async (parentId) => {
//   try {
//     const response = await notion.pages.retrieve({ page_id: parentId });
//     const parentItemName = response.properties["Project Name"] && response.properties["Project Name"].title.length > 0
//       ? response.properties["Project Name"].title[0].text.content
//       : "Parent item Name Not Available";
//     return parentItemName;
//   } catch (error) {
//     console.error("Error fetching parent item:", error);
//     return "Parent item Name Not Available";
//   }
// };

// const getProgressFromNotion = async (projectId) => {
//   try {
//     const response = await notion.pages.retrieve({ page_id: projectId });
//     const progress = response.properties["Progress"] && response.properties["Progress"].number;
//     return progress || 0; // Default to 0 if progress is undefined or null
//   } catch (error) {
//     console.error("Error fetching progress from Notion:", error);
//     return 0; // Default to 0 if there's an error fetching data
//   }
// };

// // Function to fetch project details for all pages in the database
// const getDatabase = async () => {
//   try {
//     const response = await notion.databases.query({ database_id: databaseId });
//     const pageObjects = await Promise.all(response.results.map(async (page) => {
//       const projectName = page.properties["Project Name"] && page.properties["Project Name"].title.length > 0
//         ? page.properties["Project Name"].title[0].text.content
//         : "Project Name Not Available";
//       const startDate = page.properties["Start Date"] && page.properties["Start Date"].date
//         ? page.properties["Start Date"].date.start || new Date('2024-06-01')
//         : new Date('2024-06-01');
//       const endDate = page.properties["End Date"] && page.properties["End Date"].date
//         ? page.properties["End Date"].date.start || new Date('2024-06-01')
//         : new Date('2024-06-01');
//       const parentItemId = page.properties["Parent item"] && page.properties["Parent item"].relation[0]?.id
//         ? page.properties["Parent item"].relation[0].id
//         : null;
//       const subItemIds = page.properties["Sub-item"] && page.properties["Sub-item"].relation.length > 0
//         ? page.properties["Sub-item"].relation.map(relation => relation.id)
//         : [];
//       const subItemNames = subItemIds.length > 0 ? await getSubItemNames(subItemIds) : ["Sub-item Names Not Available"];
//       const progress = page.properties["Progress"] && page.properties["Progress"].number ? page.properties["Progress"].number : 0;

//       return {
//         id: page.id,
//         projectName: projectName,
//         startDate: startDate,
//         endDate: endDate,
//         parentItemId: parentItemId,
//         subItemIds: subItemIds,
//         subItemNames: subItemNames,
//         progress: progress
//       };
//     }));

//     return pageObjects;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

// const buildProjectTrees = (projects) => {
//   const projectMap = new Map();
//   const roots = new Map();

//   projects.forEach((project) => {
//     const node = new TreeNode(project);
//     projectMap.set(project.id, node);

//     if (!project.parentItemId) {
//       roots.set(project.id, node);
//     }
//   });

//   projects.forEach((project) => {
//     if (project.parentItemId) {
//       const parentNode = projectMap.get(project.parentItemId);
//       const childNode = projectMap.get(project.id);
//       if (parentNode) {
//         parentNode.children.push(childNode);
//       }
//     }
//   });

//   return Array.from(roots.values());
// };

// const printTrees = (trees) => {
//   trees.forEach((tree) => printTree(tree));
// };

// const printTree = (node, level = 0) => {
//   if (!node) return;
//   console.log('  '.repeat(level) + node.project.projectName);
//   node.children.forEach((child) => printTree(child, level + 1));
// };

// // Function to calculate average progress for parent nodes
// const calculateAverageProgress = (node) => {
//   if (!node) return;

//   const averageProgress = node.calculateAverageProgress();
//   console.log(`Average Progress for ${node.project.projectName}: ${averageProgress}`);
//   return averageProgress;
// };


// const main = async () => {
//   try {
//     const pages = await getDatabase();
//     const projectTrees = buildProjectTrees(pages);
//     printTrees(projectTrees);
//     projectTrees.forEach(calculateAverageProgress);
//     return projectTrees;
//   } catch (error) {
//     console.error("An error occurred:", error);
//     throw error;
//   }
// };

// main();

// exports.getDatabase = getDatabase;
// exports.buildProjectTrees = buildProjectTrees;
// exports.TreeNode = TreeNode;








require("dotenv").config();
const { Client } = require("@notionhq/client");

// Initialize Notion client with API key
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// Retrieve Notion database ID from environment variables
const databaseId = process.env.NOTION_API_DATABASE;

// Function to fetch sub-item details
const getSubItemNames = async (subItemIds) => {
  try {
    const subItemNames = await Promise.all(subItemIds.map(async (subItemId) => {
      const response = await notion.pages.retrieve({ page_id: subItemId });
      const subItemName = response.properties["Milestone"] && response.properties["Milestone"].title.length > 0
        ? response.properties["Milestone"].title[0].text.content
        : "Sub-item Name Not Available";
      return subItemName;
    }));
    return subItemNames;
  } catch (error) {
    console.error("Error fetching sub-items:", error);
    return ["Sub-item Names Not Available"];
  }
};


// Function to fetch parent item name
const getParentItemName = async (parentId) => {
  try {
    const response = await notion.pages.retrieve({ page_id: parentId });
    const parentItemName = response.properties["Milestone"] && response.properties["Milestone"].title.length > 0
      ? response.properties["Milestone"].title[0].text.content
      : "Parent item Name Not Available";
    return parentItemName;
  } catch (error) {
    console.error("Error fetching parent item:", error);
    return "Parent item Name Not Available";
  }
};



const getProgressFromNotion = async (projectId) => {
  try {
    // Assuming you have a Notion API client initialized as 'notion'
    const response = await notion.pages.retrieve({ page_id: projectId });
    const progress = response.properties["Progress"] && response.properties["Progress"].number;
    return progress || 0; // Default to 0 if progress is undefined or null
  } catch (error) {
    console.error("Error fetching progress from Notion:", error);
    return 0; // Default to 0 if there's an error fetching data
  }
};


async function fetchProjects() {
  const response = await notion.databases.query({ database_id: databaseId });
  
  // First filter out sub-items
  const projects = response.results.filter(page => {
    return !(page.properties["Parent item"] && page.properties["Parent item"].relation.length > 0);
  });

  async function getSubItems(parentId) {
    try {
      const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
          property: "Parent item",
          relation: {
            contains: parentId
          }
        }
      });
  
      console.log("This is the response:", JSON.stringify(response.results, null, 2));
  
      return response.results.map(subItem => {
        console.log("This is the sub itme id ", subItem["id"])
        //maybe other api request here????



        // const milestoneProperty = subItem.properties["Milestone"];
        // const title = milestoneProperty && milestoneProperty.title && milestoneProperty.title.length > 0
        //   ? milestoneProperty.title[0].text.content
        //   : "Sub-item Name Not Available";
  
        // const startDateProperty = subItem.properties["Start Date"];
        // const startDate = startDateProperty && startDateProperty.date ? startDateProperty.date.start : "Start Date Not Available";
  
        // const endDateProperty = subItem.properties["Milestone Deadline"];
        // const endDate = endDateProperty && endDateProperty.date ? endDateProperty.date.end : "End Date Not Available";
  
        // const progressProperty = subItem.properties["Progress"];
        // const progressValue = progressProperty && progressProperty.number ? progressProperty.number : 0;
  
        return {
          id: "1",
          name: "hi",
          actualStart: null,
          actualEnd: null,
          progressValue: "20",
          progress: { fill: "#455a64 0.5", stroke: "0.5 #dd2c00" }
        };
      });
    } catch (error) {
      console.error("Error fetching sub-items:", error);
      return [];
    }
  }
  
  // Then map over the filtered results
  return projects.map(page => {
      const projectName = page.properties["Milestone"] && page.properties["Milestone"].title.length > 0
        ? page.properties["Milestone"].title[0].text.content
        : "Project Name Not Available";
        const startDate = page.properties["Start Date"] && page.properties["Start Date"].date
        ? page.properties["Start Date"].date.start || new Date('2024-06-01').toISOString()
        : new Date('2024-06-01').toISOString();
    
    const endDate = page.properties["Milestone Deadline"] && page.properties["Milestone Deadline"].date
        ? page.properties["Milestone Deadline"].date.start || new Date('2024-06-01').toISOString()
        : new Date('2024-06-01').toISOString();
    


      // const startDate = page.properties["Start Date"] && page.properties["Start Date"].date
      //   ? page.properties["Start Date"].date.start || new Date('2024-06-01')
      //   : new Date('2024-06-01');
      // const endDate = page.properties["Milestone Deadline"] && page.properties["Milestone Deadline"].date
      //   ? page.properties["Milestone Deadline"].date.start || new Date('2024-06-01')
      //   : new Date('2024-06-01');
      const children = getSubItems(page.id)
      // console.log("This is the start date", startDate["Start Date"])
    return {
      id: page.id,
      name: projectName,
      actualStart: "5/20/20",
      actualEnd: "5/10/20",
      children: children
    };
  });
}


// Function to fetch project details for all pages in the database
const getDatabase = async () => {
  try {
    // Query the Notion database
    const response = await notion.databases.query({ database_id: databaseId });
    console.log("Raw response from Notion:", JSON.stringify(response, null, 2));

    // Extract relevant properties for each page
    const pageObjects = await Promise.all(response.results.map(async (page) => {
      console.log("Page properties:", JSON.stringify(page.properties, null, 2));

      const projectName = page.properties["Milestone"] && page.properties["Milestone"].title.length > 0
        ? page.properties["Milestone"].title[0].text.content
        : "Project Name Not Available";

      const startDate = page.properties["Start Date"] && page.properties["Start Date"].date
        ? page.properties["Start Date"].date.start || new Date('2024-06-01')
        : new Date('2024-06-01');

      const endDate = page.properties["Milestone Deadline"] && page.properties["Milestone Deadline"].date
        ? page.properties["Milestone Deadline"].date.start || new Date('2024-06-01')
        : new Date('2024-06-01'); // Assign June 1st, 2024 as the default end date


      const parentItemId = page.properties["Parent item"] && page.properties["Parent item"].relation[0]?.id
        ? page.properties["Parent item"].relation[0].id
        : null;

      const parentItem = parentItemId ? await getParentItemName(parentItemId) : "Parent item Not Available";

      const subItemIds = page.properties["Sub-item"] && page.properties["Sub-item"].relation.length > 0
        ? page.properties["Sub-item"].relation.map(relation => relation.id)
        : [];

      const subItemNames = subItemIds.length > 0 ? await getSubItemNames(subItemIds) : ["Sub-item Names Not Available"];


      const progress = page.properties["Progress"] && page.properties["Progress"].number ? page.properties["Progress"].number : 0;


      const rollupProgress = page.properties["Rollup"] && page.properties["Rollup"].Rollup ? page.properties["Rollup"].Rollup : 0;

      const ugh = page.properties["Number"] && page.properties["Number"].number ? page.properties["Number"].number : 0;


      // console.log("Page object:", page);
      // console.log("Page properties:", page.properties);

      return {
        projectName: projectName,
        startDate: startDate,
        endDate: endDate,
        parentItem: parentItem,
        subItemNames: subItemNames,
        subItemIds: subItemIds,
        progress: progress,
        rollupProgress: rollupProgress,
        ugh: ugh
      };
    }));

    return pageObjects;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Main function to demonstrate usage
const main = async () => {
  try {
 
    const pages = await fetchProjects();

    // Log the details
    console.log("Pages:", JSON.stringify(pages, null, 2));

    return pages; // Return the array of page details
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};

// Execute the main function
main();

// exports.fetchProjects =  fetchProjects;
exports.getDatabase = fetchProjects;
