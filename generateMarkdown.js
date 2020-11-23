// function to generate markdown for README
function generateMarkdown(responses) {
  //creates a table of contents with clickable text to the specific elements
  let table = `## Table of Contents`;

  //if statement that if the user answers with text to add the specific response to the table of contents
  if (responses.username !== "") {
    table += `
  * [Username](#username)`;
  }

  if (responses.repository !== "") {
    table += `
  * [Repository](#repository)`;
  }

  if (responses.title !== "") {
    table += `
  * [Title](#title)`;
  }

  if (responses.description !== "") {
    table += `
  * [Description](#description)`;
  }
  if (responses.story !== "") {
    table += `
  * [User Story](#story)`;
  }

  if (responses.installation !== "") {
    table += `
  * [Installation](#installation)`;
  }

  if (responses.usage !== "") {
    table += `
  * [Usage](#usage)`;
  }

  if (responses.contribution !== "") {
    table += `
  * [Contribution](#contribution)`;
  }

  if (responses.tests !== "") {
    table += `
  * [Tests](#tests)`;
  }

  if (responses.screenshots !== "") {
    table += `
  * [Screenshots](#screenshots)`;
  }

  if (responses.license !== "") {
    table += `
  * [License](#license)`;
  }

  //create a write markdown variable to store the users responses to add to the readme file
  //if statement to not add any text if the user chooses to not add a specific description to a question
  let writeMarkdown = `

  ## Project Title
  
   ${responses.title}
  
  
  ## Description

  *Quick description about this project* 

  ${responses.description}
  `;

  if (responses.story !== "") {
    writeMarkdown += `
  
  ## User Story
  
  *User Story for this Project:*
  
  ${responses.story}`;
  }

  if (responses.installation !== "") {
    writeMarkdown += `
  
  ## Installation
  
  *Steps required to install project:*
  
  ${responses.installation}`;
  }

  if (responses.usage !== "") {
    writeMarkdown += `
  
  ## Usage 
  
  *Instructions on how to use this project:*
  
  ${responses.usage}`;
  }

  if (responses.contribution !== "") {
    `
  ## Contribution
  
  *If you would like to contribute it, please follow these guidelines:*
  
  ${responses.contribution}`;
  }

  if (responses.tests !== "") {
    writeMarkdown += `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${responses.tests}`;
  }

  if (responses.screenshots !== "") {
    writeMarkdown += `
  
  ## Screenshots
  
  *Images of this project:*
  
  ${responses.screenshots}`;
  }

  writeMarkdown += `
  
  ## License

  ${responses.license}
  `;

  //returns the table and markdown to be passed to the index.js functions to be appended to the readme file
  return table + writeMarkdown;
}

//export the file and functions to be used by the other JavaScript files
module.exports = generateMarkdown;
