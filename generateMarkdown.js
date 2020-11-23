// function to generate markdown for README
function generateMarkdown(responses) {
  let table = `## Table of Contents`;

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

  let writeMarkdown = `# ${responses.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${responses.github}/${responses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${responses.username}/${responses.repo}?style=flat&logo=appveyor)
  
  
  ${responses.description}
  `;

  writeMarkdown += table;

  writeMarkdown += `
  * [License](#license)`;

  if (responses.installation !== "") {
    writeMarkdown += `
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${responses.installation}`;
  }

  if (responses.usage !== "") {
    writeMarkdown += `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${responses.usage}`;
  }

  if (responses.contributing !== "") {
    `
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${responses.contributing}`;
  }

  if (responses.tests !== "") {
    writeMarkdown += `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${responses.tests}`;
  }

  writeMarkdown += `
  
  ## License

  ${responses.license}
  `;
}

module.exports = generateMarkdown;
