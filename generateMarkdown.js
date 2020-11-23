// function to generate markdown for README
function generateMarkdown(responses) {
  let table = `## Table of Contents`;

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

  return table + writeMarkdown;
}

module.exports = generateMarkdown;
