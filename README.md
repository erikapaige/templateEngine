# templateEngine
Using the command line, this template allows a user to generate an application to track team members. 


## Installation
The software used to create this generator include: Javascript, Node.js, NPM Jest, NPM Inquirer, HTML and Bootstrap.  

**Please use the below commands to install the NPM dependencies. Upon installation, confirm that Jest and Inquirer were installed. (You can check this in package.json file)**
<br>
npm i
<br> if Jest and Inquirer did not download, install:
<br>
npm i inquirer
<br>
npm i jest
<br>

## Usage
This template allows a user to generate a team web page to track basic team member information. Multiple employees can be added at the same time.

Using the command line, the user will be prompted for specifics about the team member they would like to add. Questions include: name, role, employee ID, and email. Additional questions will be asked specific to each role. 

After each new employee is added a "team card" will be generated and displayed on the team's webpage. 


## Demo
![Team Template Engine Demo] (templateEngineGenerator.gif)
Link to view video of the demo here: https://www.dropbox.com/s/3vhhfeztjcmzfba/teamGeneratorVideo-Demo.mov?dl=0
<br>
<br>
<br>

#### NOTES ABOUT THE PROCESS
This assignment was challenging, but it was great to have the opportunity to combine all of the skills learned during last week's Node class.

There are several files in develop:
- drafts: includes all of my app.js files. I began, then stopped, revaluated how to proceed. You can see my train of though as you progress through the files. On my final draft, (in app.js) my switchcase prompts users for their role.
- lib: includes js files based on each employee role with their class constructor.
- test: includes all the test files, to ensure the code is returning the correct information. (The lib files passed)
