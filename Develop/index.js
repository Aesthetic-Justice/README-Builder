// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        message: `Please enter title`,
        name: `title`
    },
    {
        type: `input`,
        message: `Please enter a description`,
        name: `description`
    },
    {
        type: `input`,
        message: `Please enter installation instructions`,
        name: `installation instruction`
    },
    {
        type: `input`,
        message: `Please enter usage information`,
        name: `usage information`
    },
    {
        type: `input`,
        message: `Please enter contribution guidelines`,
        name: `contribution guidelines`
    },
    {
        type: `input`,
        message: `Please enter test instructions`,
        name: `test instructions`
    },
    {
/*         type: `choice`,
         */
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function(response){
            console.log(JSON.stringify(response,null,`\t`));
        })
}

// Function call to initialize app
init();
