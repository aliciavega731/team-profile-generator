// index.js runs the application
const fs = require ('fs');
const inquirer = require ('inquirer');
const Employee = require ('./lib/Employee');
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
    message: "Enter manager's name:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter manager's email address:",
  },
  {
    type: "input",
    name: "ID",
    message: "Enter manager's ID number:",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter manager's office number:",
  }])
  .then(function(responses){
    console.log(responses)

    addAnother()
  })
}

function addEngineer() {
  inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "Enter engineer's name:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter engineer's email address:",
  },
  {
    type: "input",
    name: "ID",
    message: "Enter engineer's ID number:",
  },
  {
    type: "input",
    name: "github",
    message: "Enter engineer's Github username:",
  }])
  .then(function(responses){
    console.log(responses)

    addAnother()
  })
}

function addIntern() {
  inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "Enter intern's name:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter intern's email address:",
  },
  {
    type: "input",
    name: "ID",
    message: "Enter intern's ID number:",
  },
  {
    type: "input",
    name: "school",
    message: "Enter intern's school:",
  }])
  .then(function(responses){
    console.log(responses)

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
    if(responses.addMore == "Add engineer"){
      addEngineer()
    } else if(responses.addMore == "Add intern"){
      addIntern()
    } else {
      generateHtml()
    }
  })
}

// function generateHtml(){
//   console.log("Let's build the HTML")
//   let myString = `
//   `
//   fs.writeFile("./lib/generateHTML", myString, function(e){console.error(e)})
// }

addManager()