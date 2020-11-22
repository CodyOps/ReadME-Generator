//NPM Packages
const inquirer = require("inquirer");
const fs = require("fs");
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
      name: "github",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ]);

// function writeFile(fileName, data) {
//   fs.writeFile(fileName, data, (err) => {
//     if (err) {
//       return console.log(err);
//     }

//     console.log(
//       "Success! You have successfully generated your professional README.md file!"
//     );
//   });
// }

// async function init() {
//   try {
//     let userInput = await promptUser();

//     let readme = Markdown(response);

//     await writeFileAsync("README.md", readMe);
//     console.log(userInput);
//     console.log(
//       "Thank you for completing the questions! Reaching out to Github now..."
//     );
//   } catch (error) {
//     console.log(error);
//   }
// }

const produceHTML = (responses) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${responses.name}</h1>
    <p class="lead">Description: ${responses.description}.</p>
    <p class="lead">User Story: ${responses.story}.</p>
    <p class="lead">Table of Contents: ${responses.table}.</p>
    <p class="lead">Installation Instructions: ${responses.instructions}.</p>
  </div>
</div>
</body>
</html>`;

promptUser()
  .then((responses) => writeFileAsync("index.html", produceHTML(responses)))
  .then(() => console.log("Successfully wrote to index.html"))
  .catch((err) => console.error(err));
