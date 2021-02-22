// index.js runs the application
const fs = require ('fs');
const inquirer = require ('inquirer');
// const Employee = require ('./lib/Employee');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const Manager = require ('./lib/Manager');

// Team array will have all of the objects to then turn into a string
const team = []; 

// Inquirer questions
function addManager() {
  inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "Enter manager's name (first and last):",
  },
  {
    type: "input",
    name: "id",
    message: "Enter manager's ID number:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter manager's email address:",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter manager's office number:",
  }])
  .then(function(responses){
    // console.log(responses)
    let newManager = new Manager (responses.name, responses.id, responses.email, responses.officeNumber)
    console.log(newManager)
    team.push(newManager)
    addAnother()
  })
}

function addEngineer() {
  inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "Enter engineer's name (first and last):",
  },
  {
    type: "input",
    name: "id",
    message: "Enter engineer's ID number:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter engineer's email address:",
  },
  {
    type: "input",
    name: "github",
    message: "Enter engineer's Github username:",
  }])
  .then(function(responses){
    // console.log(responses)
    let newEngineer = new Engineer (responses.name, responses.email, responses.id, responses.github)
    console.log(newEngineer)
    team.push(newEngineer)
    addAnother()
  })
}

function addIntern() {
  inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "Enter intern's name (first and last):",
  },
  {
    type: "input",
    name: "id",
    message: "Enter intern's ID number:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter intern's email address:",
  },
  {
    type: "input",
    name: "school",
    message: "Enter intern's school:",
  }])
  .then(function(responses){
    // console.log(responses)
    let newIntern = new Intern (responses.name, responses.email, responses.id, responses.school)
    console.log(newIntern)
    team.push(newIntern)
    addAnother()
  })
}

function addAnother(){
  inquirer.prompt([
    {
      type: "list",
      name: "addMore",
      choices: ["Add engineer", "Add intern", "No, I'm done adding team members."],
      message: "Would you like to add any more team members?"
    }
  ])
  .then(function(responses){
    console.log(responses.addMore)
    if(responses.addMore === "Add engineer"){
      addEngineer()
    } else if(responses.addMore === "Add intern"){
      addIntern()
    } else {
      createHtml()
    }
  })
}

function createHtml(){
  // console.log("Time to build the HTML")
  let myString = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
  <title>Team Profile Generator</title>
</head>

<body>
  <nav class="navbar navbar-dark bg-primary">
    <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
  </nav>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="card mx-auto mb-3" style="width: 15rem">
          <h3 class="card-header">Manager name<br /><br />Manager</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: Manager ID</li>
            <li class="list-group-item">Email address: Manager id</li>
            <li class="list-group-item">Office number: Manager office number</li>
          </ul>
        </div>
      </div>
      <div class="col-6">
        <div class="card mx-auto mb-3" style="width: 15rem">
          <h5 class="card-header">Engineer name<br /><br />engineer</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:id here </li>
            <li class="list-group-item">Email address: email here</li>
            <li class="list-group-item">Github: git hub</li>
          </ul>
        </div>
      </div>
      <div class="col-6">
        <div class="card mx-auto mb-3" style="width: 15rem">
          <h5 class="card-header">Intern name<br /><br />intern</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: id here</li>
            <li class="list-group-item">Email address: email here</li>
            <li class="list-group-item">School: school here</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</body>

</html>
  `
  fs.writeFile("./dist/createHtml.html", myString, function(e){console.error(e)})
}

addManager()