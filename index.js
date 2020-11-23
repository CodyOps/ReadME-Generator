//NPM Packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require("./generateMarkdown.js");
const api = require("./api");

//function to prompt the user the questions and use the inquirer npm
const promptUser = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "repository",
      message: "What is your Github repository name?",
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      default: "Project Description",
      message: "Please include a description of your project.",
    },
    {
      type: "input",
      name: "story",
      default: "User Story",
      message: "What is the user story of this project?",
    },
    {
      type: "input",
      name: "installation",
      message:
        "Please describe the installation steps for your project, if applicable.",
    },
    {
      type: "input",
      name: "usage",
      message:
        "Please include instructions and examples about the usage of your project, if applicable.",
    },
    {
      type: "input",
      name: "contribution",
      message:
        "How can other developers contribute to you work, if applicable?",
    },
    {
      type: "input",
      name: "tests",
      message:
        "If applicable, please provide any tests written for your application.",
    },
    {
      type: "input",
      name: "screenshots",
      message: "Please attach some links to screenshots of your application.",
    },
    {
      type: "list",
      name: "license",
      message: "Do you have a license for your project?",
      choices: [
        "Apache License 2.0",
        "Artistic license 2.0",
        "Boost Software License 1.0",
        "BSD 2-clause license",
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Microsoft Public License",
        "MIT License",
        "Open Software License 3.0",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
  ]);

//Function to show the user their answers and generate the markdown file with their responses
async function init() {
  try {
    const userAnswers = await promptUser();
    console.log("Your responses: ", userAnswers);

    console.log("Generating your README file...");
    const markdown = generateMarkdown(userAnswers);
    console.log(markdown);

    await writeFileAsync("GenerateREADME.md", markdown);
  } catch (error) {
    console.log(error);
  }
}

//Function to let the user know that their markdown file has been generated
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Success! Your README.md file has been generated!");
  });
}

//Calls the init function
init();
