// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',   
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    }, 
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Add table of contents?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Provide instructions for installation.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators (comma seperated)'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'What license should this project use?',
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
            err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => writeToFile('./output/README.md', data))
}

// Function call to initialize app
init();
