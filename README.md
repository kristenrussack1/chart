# KANBAN
This program creates an API connection to the Notion database and generates a Gantt chart displaying Kazvu's business development timeline.

# How to run the program
cd chart

npm start

# Port 10.10.51.26:8010

# File Discriptions 
index.html 

Formats the gantt chart

main.js

Calls the system from the backend and fetches data from the /users endpoint and returns the parsed JSON data.

.env

All the notion API keys and tokens used.

.gitignore

Igonore the files that have the tokens so they arn't publicly shown.

index.js

Uses the Notion API to fetch task data from a Notion database.
Defines individual functions to retrieve tasks for specific projects by filtering tasks where the "project" property matches the project name. 
The main function runs each of these fetch functions and logs the tasks and statuses.

server.js

Provides API endpoints to fetch project data from the Notion API. 
It imports individual functions from another module (index.js) to retrieve tasks for each project's tasks and returns the data in JSON format at specific routes. 
The server listens on port 8010 and allows cross-origin requests using CORS.

## How to run on the server: 

Upload the new code to git 

Ssh into the pi by using it's IP address -- ssh kazvu@10.10.51.26

Input the pi's password when prompted 

Once in the pi clone the git repo by doing -- git clone https://github.com/kristenrussack1/chart

Cd into the folder -- cd chart

Insatill the depndeincies: 

  npm install
  
  npm install express
  
  npm install dotenv
  
If there is an env file you need to upload it locally wihtought putting it on git. In a new terminal run: scp C:\Users\Kristen\Desktop\chart\.env kazvu@10.10.51.26:/home/kazvu/chart/

Then run the program -- npm start

