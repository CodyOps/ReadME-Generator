//NPM Packages
const inquirer = require("inquirer");
const fs = "fs";
const util = require("util");

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
      message: "What are the test instructions?",
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
      message: "What is your license for this application?",
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
