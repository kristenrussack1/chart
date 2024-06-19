// const express = require("express");
// // our module
// const moduleToFetch = require("./index");
// // our function
// const getDatabase = moduleToFetch.getDatabase;

// const port = 8004;
// const app = express();

// // the code line we just added
// // app.use(express.static("public"));

// // app.get("/users", async (req, res) => {
// //   const users = await getDatabase();
// //   res.json(users);
// // });


// app.get("/users", async (req, res) => {
//     try {
//         const projects = await getDatabase();
//         res.json(projects);
//     } catch (error) {
//         console.error("Error fetching projects:", error);
//         res.status(500).json({ error: "Failed to fetch projects" });
//     }
// });

// app.listen(port, console.log(`Server started on ${port}`));
// server.js

const express = require("express");
const moduleToFetch  = require("./index");
const getDatabase = moduleToFetch.getDatabase;


const port = 8008;
const app = express();

app.use(express.static("public"));

app.get("/users", async (req, res) => {
    const users = await getDatabase();
    res.json(users);
  });



app.listen(port, console.log(`Server started on ${port}`));


