// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the title of your Project.',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter the Description of your Project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter the installation instruction of your Project.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter the usage information of your Project.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter the license of your Project From the following list. MIT, BSL, Apache or none: ',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Enter the contributing guidline for your Project.',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Enter the test instruction of your Project.',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Enter your GitHub username.',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email'
    }

];

// TODO: Create a function to write README file
let fileName = "readme.md";
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Created')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(response => writeToFile(fileName, generateMarkdown(response)));
}

// Function call to initialize app
init();