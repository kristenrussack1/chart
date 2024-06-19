//   // Import necessary modules
// require("dotenv").config();
// const { Client } = require("@notionhq/client");

// // Initialize Notion client with API key
// const notion = new Client({ auth: process.env.NOTION_API_KEY });

// // Retrieve Notion database ID from environment variables
// const databaseId = process.env.NOTION_API_DATABASE;

// // Function to fetch project details for all pages in the database
// const getDatabase = async () => {
//     // Query the Notion database
//     const response = await notion.databases.query({ database_id: databaseId });

//     // Extract relevant properties for each page
//     const pageObjects = response.results.map((page) => {
//       const projectName = page.properties["Project Name"] ? page.properties["Project Name"].title[0].text.content : "Project Name Not Available";

//       const startDate = page.properties["Start Date"] && page.properties["Start Date"].date && page.properties["Start Date"].date.start
//       ? page.properties["Start Date"].date.start
//       : "Start Date Not Available";
          

//       const endDate = page.properties["End Date"] ? page.properties["End Date"].date.end : "End Date Not Available";


//       return {
//         projectName: projectName,
//         startDate: startDate,
//         endDate: endDate
//       };
//     });

//     return pageObjects;
//   } ;

// // Main function to demonstrate usage
// const main = async () => {
//   try {
//     // Fetch project details for all pages in the database
//     const pages = await getDatabase();

//     // Log the details
//     console.log("Pages:", pages);

//     return pages; // Return the array of page details
//   } catch (error) {
//     console.error("An error occurred:", error);
//     throw error;
//   }
// };

// // Execute the main function
// // main();


// ///GOOD GOOOD GOOD 
// require("dotenv").config();
// const { Client } = require("@notionhq/client");

// // Initialize Notion client with API key
// const notion = new Client({ auth: process.env.NOTION_API_KEY });

// // Retrieve Notion database ID from environment variables
// const databaseId = process.env.NOTION_API_DATABASE;


// // Function to fetch project details for all pages in the database
// const getDatabase = async () => {
//     try {
//         // Query the Notion database
//         const response = await notion.databases.query({ database_id: databaseId });

//         // Extract relevant properties for each page
//         const pageObjects = await Promise.all(response.results.map(async (page) => {
//             // Initialize an object to hold specific properties of the page
//             const specificProperties = {};

//             // Extracting specific properties with nullish coalescing
//             specificProperties.projectName = page.properties["Project Name"]
//                 ? page.properties["Project Name"].title[0]?.text?.content || "Project Name Not Available"
//                 : "Project Name Not Available";

//             specificProperties.startDate = page.properties["Start Date"] && page.properties["Start Date"].date
//                 ? page.properties["Start Date"].date.start || "Start Date Not Available"
//                 : "Start Date Not Available";

//             specificProperties.endDate = page.properties["End Date"] && page.properties["End Date"].date
//                 ? page.properties["End Date"].date.end || "End Date Not Available"
//                 : "End Date Not Available";

              

//                 specificProperties.parentItem = page.properties["Parent item"] && page.properties["Parent item"].relation[0]?.id
//                 ? page.properties["Parent item"].relation[0].id
//                 : "Parent item Not Available";


//                 specificProperties.subItem = page.properties["Sub-item"]&& page.properties["Sub-item"].relation[0]?.id
//                 ? page.properties["Sub-item"].relation[0].id
//                 : "Sub-item Not Available";

    

//             return specificProperties;
        
                
              

//         }));

//         return pageObjects;
//     } catch (error) {
//         console.error("Error fetching database:", error);
//         throw error;
//     }
// };

// // Main function to demonstrate usage
// const main = async () => {
//     try {
//         // Fetch project details for all pages in the database
//         const pages = await getDatabase();

//         // Log the details
//         console.log("Pages:", pages);

//         return pages; // Return the array of page details
//     } catch (error) {
//         console.error("An error occurred:", error);
//         throw error;
//     }
// };

// module.exports = { getDatabase, main };

// // Execute the main function
// main();

// ///END OF GOOG GOOD GOOD





// // index.js

// // Import necessary modules
// require("dotenv").config();
// const { Client } = require("@notionhq/client");

// // Initialize Notion client with API key
// const notion = new Client({ auth: process.env.NOTION_API_KEY });

// // Retrieve Notion database ID from environment variables
// const databaseId = process.env.NOTION_API_DATABASE;

// // Function to fetch project details for all pages in the database

  
//       // Extract relevant properties for each page
     
//       const getDatabase = async () => {
//         try {
//           const response = await notion.databases.query({ database_id: databaseId });
      
//           const pageObjects = response.results.map((page) => {
//             const projectName = page.properties["Project Name"] ? page.properties["Project Name"].title[0].text.content : "Project Name Not Available";
//             const startDate = page.properties["Start Date"] ? page.properties["Start Date"].date.start : "Start Date Not Available";
//             const endDate = page.properties["End Date"] ? page.properties["End Date"].date.end : "End Date Not Available";
      
//             return {
//               projectName: projectName,
//               startDate: startDate,
//               endDate: endDate
//             };
//           });
      
//           return pageObjects;
//         } catch (error) {
//           console.error("Error fetching database:", error);
//           throw error;
//         }
//       };
      

// module.exports = { getDatabase };
// //Main function to demonstrate usage
// const main = async () => {
//   try {
//     // Fetch project details for all pages in the database
//     const pages = await getDatabase();

//     // Log the details
//     console.log("Pages:", pages);

//     return pages; // Return the array of page details
//   } catch (error) {
//     console.error("An error occurred:", error);
//     throw error;
//   }
// };

// // Execute the main function
// main();

// require("dotenv").config();
// const { Client } = require("@notionhq/client");

// // Initialize Notion client with API key
// const notion = new Client({ auth: process.env.NOTION_API_KEY });

// // Retrieve Notion database ID from environment variables
// const databaseId = process.env.NOTION_API_DATABASE;

// // Function to fetch project details for all pages in the database
// const getDatabase = async () => {
//     try {
//       // Query the Notion database
//       const response = await notion.databases.query({ database_id: databaseId });
//       console.log("Raw response from Notion:", JSON.stringify(response, null, 2));
  
//       // Extract relevant properties for each page
//       const pageObjects = response.results.map((page) => {
//         console.log("Page properties:", JSON.stringify(page.properties, null, 2));
  
//         const projectName = page.properties["Project Name"] && page.properties["Project Name"].title.length > 0
//           ? page.properties["Project Name"].title[0].text.content
//           : "Project Name Not Available";


//           const startDate = page.properties["Start Date"] && page.properties["Start Date"].date
//           ? page.properties["Start Date"].date.start || new Date('2024-06-01')
//           : new Date('2024-06-01'); 

//             let endDate = page.properties["End Date"] && page.properties["End Date"].date
//             ? page.properties["End Date"].date.start || new Date('2024-06-01')
//             : new Date('2024-06-01'); // Assign June 1st, 2024 as the default end date


//                 const parentItem = page.properties["Parent item"] && page.properties["Parent item"].relation[0]?.id
//                 ? page.properties["Parent item"].relation[0].id
//                 : "Parent item Not Available";

//                 const Dependencies = page.properties["Sub-item"]&& page.properties["Sub-item"].relation[0]?.id
//                 ? page.properties["Sub-item"].relation[0].id
//                 : "Sub-item Not Available";



//           console.log("Page object:", page);
//           console.log("Page properties:", page.properties);

  
//         return {
//           projectName: projectName,
//           startDate: startDate,
//           endDate: endDate,
//           parentItem: parentItem,
//           subItem: Dependencies
//         };
//         });
     
  
//       return pageObjects;
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       throw error;
//     }
//   };
  

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



// //gogoggoggg

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
      const subItemName = response.properties["Project Name"] && response.properties["Project Name"].title.length > 0
        ? response.properties["Project Name"].title[0].text.content
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
    const parentItemName = response.properties["Project Name"] && response.properties["Project Name"].title.length > 0
      ? response.properties["Project Name"].title[0].text.content
      : "Parent item Name Not Available";
    return parentItemName;
  } catch (error) {
    console.error("Error fetching parent item:", error);
    return "Parent item Name Not Available";
  }
};

// Function to fetch project details for all pages in the database
const getDatabase = async () => {
  try {
    // Query the Notion database
    const response = await notion.databases.query({ database_id: databaseId });
    console.log("Raw response from Notion:", JSON.stringify(response, null, 2));

    // Extract relevant properties for each page
    const pageObjects = await Promise.all(response.results.map(async (page) => {
      console.log("Page properties:", JSON.stringify(page.properties, null, 2));

      const projectName = page.properties["Project Name"] && page.properties["Project Name"].title.length > 0
        ? page.properties["Project Name"].title[0].text.content
        : "Project Name Not Available";

      const startDate = page.properties["Start Date"] && page.properties["Start Date"].date
        ? page.properties["Start Date"].date.start || new Date('2024-06-01')
        : new Date('2024-06-01');

      const endDate = page.properties["End Date"] && page.properties["End Date"].date
        ? page.properties["End Date"].date.start || new Date('2024-06-01')
        : new Date('2024-06-01'); // Assign June 1st, 2024 as the default end date

      const parentItemId = page.properties["Parent item"] && page.properties["Parent item"].relation[0]?.id
        ? page.properties["Parent item"].relation[0].id
        : null;

      const parentItem = parentItemId ? await getParentItemName(parentItemId) : "Parent item Not Available";

      const subItemIds = page.properties["Sub-item"] && page.properties["Sub-item"].relation.length > 0
        ? page.properties["Sub-item"].relation.map(relation => relation.id)
        : [];

      const subItemNames = subItemIds.length > 0 ? await getSubItemNames(subItemIds) : ["Sub-item Names Not Available"];

      console.log("Page object:", page);
      console.log("Page properties:", page.properties);

      return {
        projectName: projectName,
        startDate: startDate,
        endDate: endDate,
        parentItem: parentItem,
        subItems: subItemNames,
        subItemIds: subItemIds
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
    // Fetch project details for all pages in the database
    const pages = await getDatabase();

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

exports.getDatabase = getDatabase;





// LOVELOVELOVE

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

//       const parentItem = page.properties["Parent item"] && page.properties["Parent item"].relation[0]?.id
//         ? page.properties["Parent item"].relation[0].id
//         : "Parent item Not Available";

//       const subItemIds = page.properties["Sub-item"] && page.properties["Sub-item"].relation.length > 0
//         ? page.properties["Sub-item"].relation.map(relation => relation.id)
//         : [];

//       const subItemNames = subItemIds.length > 0 ? await getSubItemNames(subItemIds) : ["Sub-item Names Not Available"];

//       console.log("Page object:", page);
//       console.log("Page properties:", page.properties);

//       return {
//         projectName: projectName,
//         startDate: startDate,
//         endDate: endDate,
//         parentItem: parentItem,
//         subItemNames: subItemNames
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

