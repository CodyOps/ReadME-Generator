//NPM Packages
const inquirer = require("inquirer");
const fs = "fs";
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the description of your project?",
    },
    {
      type: "input",
      name: "story",
      message: "What is the user story of this project?",
    },
    {
      type: "input",
      name: "name",
      message: "What is this list for the table of contents?",
    },
    {
      type: "input",
      name: "name",
      message: "What are the installation instructions?",
    },
    {
      type: "input",
      name: "name",
      message: "What is the usage information?",
    },
    {
      type: "input",
      name: "name",
      message: "What are the contribution guidelines of this project?",
    },
    {
      type: "input",
      name: "name",
      message:
        "If applicable, provide any tests written for your application and provide examples on how to run them.",
    },
    {
      type: "input",
      name: "technology",
      message: "What were the technologies or frameworks used?",
    },
    {
      type: "input",
      name: "features",
      message: "What are some stand out feature of this project?",
    },
    {
      type: "input",
      name: "githubpages",
      message: "What is the url link to your GitHub Pages?",
    },
    {
      type: "input",
      name: "screenshots",
      message: "Please attach some links to screenshots of your application.",
    },
    {
      type: "input",
      name: "name",
      message: "Do you have a license for your project?",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      name: "name",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "name",
      message: "What is your email address?",
    },
  ]);

function writeFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Success! Your README.md file has been generated");
  });
}
