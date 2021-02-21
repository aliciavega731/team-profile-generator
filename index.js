// index.js runs the application
const fs = require ('fs');
const inquirer = require ('inquirer');
const Employee = require ('./lib/Employee');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const Manager = require ('./lib/Manager');

const employees = [];

function createTeam() {
  inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Enter team member name.',
  },
  {
   type: 'list',
   name: 'role',
   message: "Select team member's role.",
   choices: ['Manager', 'Engineer', 'Intern'],
  },
  {
    type: 'input',
    name: 'ID',
    message: 'Enter team member ID number.',
  },
  {
    type: 'input',
    name: 'email',
    message: "Enter team member's email address.",
  }])
  
}