//create the about section
const generateAbout = confirmAbout => {
    if (!confirmAbout) {
      return '';
    } else {
    return "![alt text](assets/images/screenshot.png)";
    }  
}

  const generateProjects = projectsArr => {
    return `
        ${projectsArr
          .filter(({ feature }) => !feature)
          .map(({ name, license, test, confirmAbout, install, description, problem, github, languages, email }) => {
            return `
## Table of Contents
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [Built With:](#Built-with)
7. [Licenses](#Licenses)
8. [Questions](#Questions)
9. [Year Built](#Year-built)

## Description: 
${description}
## Installation
${install}
## Usage:
 ${problem}  
## Contributing: 
${name}   
## Tests:
${test}
 
## Built with:
${languages.join(', ')}

## Type of Licenses 
${license.join(', ')}          


`;
          })
        }
    `;
  };
  
  
  module.exports = templateData => { 
  // destructure projects and about data from templateData based on their property key name
  const {projects, confirmAbout, ...header} = templateData;
  
    return `
 # Title of Project
  ${header.name}    
 ${generateProjects(projects)}
 ## Questions
  ${header.email} - Please send me an email with additional questions or any suggestions or make this project better.
 <br>
  "https://github.com/${header.github}"

  ${generateAbout(confirmAbout)}
### Year Built
${new Date().getFullYear()} by ${header.github}  `;
  };
  