// const getDataFromBackend = async () => {
//     const rest = await fetch("http://localhost:8004/users");
//     const data = await rest.json();
  
//     return data;
//   };
  
//   const res = await getDataFromBackend();
//   console.log(res);

// // Add data to HTML
// const addData = async () => {
//     const data = await getDataFromBackend();
  
//     data.forEach((value) => {
//       const div = document.createElement("div");
//       div.classList.add("userContainer");
//       div.innerHTML = `
//           <h3>${value.projectName}</h3>
//           <p>${value.startDate}</p>
//       `;
  
//       container.append(div);
//     });
//   };
  
//   addData();


// google.charts.load('current', {'packages':['gantt']});
// google.charts.setOnLoadCallback(drawChart);

// // Function to fetch data from backend
// const getDataFromBackend = async () => {
//   try {
//     const response = await fetch("http://localhost:8004/users");
//     if (!response.ok) {
//       throw new Error('Failed to fetch data');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };

// // Function to draw the Gantt chart
// const drawChart = async () => {
//   try {
//     // Fetch data from backend
//     const dataFromBackend = await getDataFromBackend();

//     // Create DataTable for Google Charts
//     var data = new google.visualization.DataTable();
//     data.addColumn('string', 'Task ID');
//     data.addColumn('string', 'Task Name');
//     data.addColumn('date', 'Start Date');
//     data.addColumn('date', 'End Date');
//     data.addColumn('number', 'Duration');
//     data.addColumn('number', 'Percent Complete');
//     data.addColumn('string', 'Dependencies');

//     // Populate DataTable with fetched data
//     dataFromBackend.forEach((value) => {
//       data.addRow([
//         value.projectName,
//         value.subItem,
//         new Date(value.startDate),
//         new Date(value.endDate),
//         daysToMilliseconds(value.durationInDays),
//         value.percentComplete,
//         value.dependencies.join(',')
//       ]);
//     });

//     // Configure options for the chart
//     var options = {
//       height: 275
//     };

//     // Create Gantt chart and draw it in the 'chart_div' element
//     var chart = new google.visualization.Gantt(document.getElementById('chart_div'));
//     chart.draw(data, options);

//   } catch (error) {
//     console.error('Error drawing chart:', error);
//   }
// };

// // Utility function to convert days to milliseconds
// function daysToMilliseconds(days) {
//   return days * 24 * 60 * 60 * 1000;
// }

// // Immediately invoke drawChart function when script is loaded
// drawChart();


// const getDataFromBackend = async () => {
//     const rest = await fetch("http://localhost:8004/users"); // Adjust URL based on your server setup
//     const data = await rest.json();
  
//     return data;
//   };
  
//   const addData = async () => {
//     try {
//       const data = await getDataFromBackend();

      
  
//       data.forEach((value) => {
//         const div = document.createElement("div");
//         div.classList.add("userContainer");
//         div.innerHTML = `
//             <h3>${value.projectName}</h3>
//             <p>${value.startDate}</p>
//             <p>${value.endDate}</p>
//             <p>${value.subItem}</p>
//             <p>${value.parentItem}</p>
//             parentItem
//         `;
  
//         document.body.appendChild(div); // Append to appropriate container
//       });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
  
//   addData();




const getDataFromBackend = async () => {
    const response = await fetch("http://localhost:8008/users");
    const data = await response.json();
    return data;
  };
  
  const addData = async () => {
    const data = await getDataFromBackend();
    const container = document.getElementById("container");
  
    data.forEach((value) => {
      const div = document.createElement("div");
      div.classList.add("userContainer");
      div.innerHTML = `
        <h3>${value.projectName}</h3>
        <p><strong>Start Date:</strong> ${value.startDate}</p>
        <p><strong>End Date:</strong> ${value.endDate || "N/A"}</p>
         <p> ${value.parentItem || "N/A"}</p>
        <p> ${value.subItemNames || "N/A"}</p>
        <p> ${value.rollupProgress|| "0"}</p>
      `;
      container.appendChild(div);
    });
  };
  
  addData();
  
