//NPM Packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require("./generateMarkdown.js");
const api = require("./api");

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
        "Boost Software License 1.0",
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "MIT License",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
  ]);

function writeFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    console.log(
      "Success! You have successfully generated your professional README.md file!"
    );
  });
}

async function init() {
  try {
    const userAnswers = await promptUser();
    console.log("Your responses: ", userAnswers);

    // const userGithub = await api.getUser(responses);
    // console.log("Your GitHub: ", userGithub);

    console.log("Generating your README file...");
    const markdown = generateMarkdown(userAnswers);
    console.log(markdown);

    await writeFileAsync("GenerateREADME.md", markdown);
  } catch (error) {
    console.log(error);
  }
}

init();
