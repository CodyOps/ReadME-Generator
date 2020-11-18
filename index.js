//NPM Packages
const inquirer = require("inquirer");
const fs = "fs";
const util = require("util");

const promptUser = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your project?",
    },
  ]);
