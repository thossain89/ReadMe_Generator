// TODO: Include packages needed for this application
const generateMarkdown = require ('./Develop/utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [{
    type:'input',
    message:'What is the name of your project ?',
    name:'title',
    validate: (input) => { if(input ===''){return "Please enter the project title"} return true }

},{
    type:'input',
    message:'What is this project about ?',
    name:'description',
    validate: (input) => { if(input ===''){return "Please enter description of the project"} return true }

},{
    type:'input',
    message:'How to Install this project?',
    name:'install',
    validate: (input) => { if(input ===''){return "Please enter steps to install the program"} return true }

},{
    type:'input',
    message:'How to use your program?',
    name:'usage',
    validate: (input) => { if(input ===''){return "Please enter full description of how to use the program"} return true }

},{
    type:'input',
    message:'Are there any Contributors/contribution for this project? Please provide all information.',
    name:'contribution',
    validate: (input) => { if(input ===''){return "Please enter info regarding contribution"} return true }

},{
    type: 'confirm',
    name: 'test',
    message: `Would you like to add instructions for running tests?`,
},{
    type: 'input',
    name: 'testNotes',
    message: `Please add instructions and steps for running tests`,
    when: function (answers) {
        return answers.test;
    }
},{
    type:'checkbox',
    message:'Please select a license for your project?',
    name:'license',
    choices: ['Apache 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'GNU AGPLv3.0', 'GNU GPLv2.0', 'GNU GPLv3.0', 'MIT', 'Mozilla Public 2.0'],

},{
    type:'input',
    message:'What is your GitHub ID?',
    name:'github',
    validate: (input) => { if(input ===''){return "Please enter your username"} return true }

},{
    type: 'input',
    name: 'email',
    message: `What's your email?`,
    validate: function (value) {
        let valid = value.match(
            /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        );
        if (valid) {
            return true;
        }
        return 'Please enter a valid email address!';
    },
},

];


// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(success)
    );
}


// TODO: Create a function to initialize app
const init = async () => {
    try {
        const data = await inquirer.prompt(questions);
        writeToFile('./Generated_Readme/README.md', generateMarkdown(data));
    } catch (err) {
        console.log(err);
    }
}
// Function call to initialize app
init();
