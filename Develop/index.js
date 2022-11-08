// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const generateMarkdown = require("./utils/generateMarkdown");

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
        type: `list`,
        message: `Please choose a license from the list below`,
        choices: [`MIT_License`,`Apache_License_2.0`,`GPL_License`],
        name: `license`
    },
    {
        type: `input`,
        message: `Please enter your Github Username`,
        name: `name`
    },
    {
        type: `input`,
        message: `Please enter your email address`,
        name: `email`,
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile
    (`${fileName}.md`,
    data,
    (err) => err ? console.error(err) : console.log("Success!"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function(answer){
            /* console.log(JSON.stringify(response,null,"\t")); */
            writeToFile(`README`,generateMarkdown(answer));
        })
}

// Function call to initialize app
init();