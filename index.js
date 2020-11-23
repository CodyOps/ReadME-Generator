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
      name: "title",
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
      name: "table",
      message: "What is this list for the table of contents?",
    },
    {
      type: "input",
      name: "instructions",
      message: "What are the installation instructions?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage information?",
    },
    {
      type: "input",
      name: "contribution",
      message: "What are the contribution guidelines of this project?",
    },
    {
      type: "input",
      name: "tests",
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
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ]);

function writeFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
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

    await writeFileAsync("README.md", markdown);
  } catch (error) {
    console.log(error);
  }
}

init();
