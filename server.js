const express = require("express");
const moduleToFetch  = require("./index");
const fetchRobotArm = moduleToFetch.fetchRobotArm;
const fetchBizDev = moduleToFetch.fetchBizDev;
const fetchDemo = moduleToFetch.fetchDemo;



const port = 8004;
const app = express();

app.use(express.static("public"));



  app.get("/robot-arm", async (req, res) => {
      const users = await fetchRobotArm();
      res.json(users);
  });

  app.get("/biz-dev", async (req, res) => {
    const users = await fetchBizDev();
    res.json(users);
});

  app.get("/demo", async (req, res) => {
    const users = await fetchDemo();
    res.json(users);
});


app.listen(port, console.log(`Server started on ${port}`));


