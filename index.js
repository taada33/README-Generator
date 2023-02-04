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
        name: 'install',
        message: 'Provide instructions for installation if required.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide any usage instructions.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List the contribution guidelines required for this project.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'List any test instructions for this project.'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT License', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'GNU Affero General Public License v3.0', 'The Unlicense', 'Apache License 2.0', 'GNU General Public License v3.0', 'no license'],
        message: 'What license should this project use?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your contact email?'
    }
];

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
