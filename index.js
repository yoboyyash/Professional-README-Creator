// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require("inquirer");


const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    
    type: "input",
    message: "Title of this Project/README file: ",
    name: "titleH1"

}, {
    
    type: "input", 
    message: "A slogan or brief quote for this project: ",
    name: "sloganH2"

}, {

    type: "input",
    message: "A detailed description of this project: ",
    name: "descriptionP1"

}, {

    type: "input",
    message: "How is the app used? Give instructions",
    name: "usage"

}, {

    type: "input",
    message: "What is your Github username?",
    name: "username"

}, {

    type: "input",
    message: "What is your email address?",
    name: "email"

}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)

        } else {
            console.log("Success!")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();
