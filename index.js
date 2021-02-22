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
    let newEngineer = new Engineer (responses.name, responses.id, responses.email, responses.github)
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
    let newIntern = new Intern (responses.name, responses.id, responses.email, responses.school)
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
  let cardString = ""
  fs.writeFile("./output/createHtml.html", cardString, function(e){console.error(e)})
}

addManager()