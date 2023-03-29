// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'Title',
            message: 'Please enter the title of your project',
        },
        {
            type: 'list',
            name: 'License',
            message: 'Please choose which license your project uses',
            choices: ['Unlicensed', "CC0", 'MIT', 'Apache', 'BSD', 'MPL', 'WTFPL']
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Please enter project description',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Please enter installation instruction',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Please enter usage information',
        },
        {
            type: 'input',
            name: 'Contribution',
            message: 'Please enter contribution guideline',
        },
        {
            type: 'input',
            name: 'Test',
            message: 'Please enter test instruction',
        },
        {
            type: 'input',
            name: 'Github',
            message: 'Please enter your Github username',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Please enter your Email address',
        }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("./README.md", generateMarkdown({...data}))
    })
     };

// Function call to initialize app
init();
