//create the about section
const generateAbout = confirmAbout => {
    if (!confirmAbout) {
      return '';
    } else {
    return "![alt text](assets/images/screenshot.png)";
    }  
}

const generateLicense = license => {
    if (license == "MIT") {
      return 'MIT License - A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
    } else if (license == "Boost"){
    return "Boost License - A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";
    }  else if (license == "Mozilla") {
        return "Mozilla License - Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses)"
    } else if (license == "Apache") {
        return "Apache License -  A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
    } else if (license == "GNU") {
        return "GNU License - Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved."
    } else if (license == "Public") {
        return "Public License - Free for all and open to use with anything."
    } else if (license == "Unlicense") {
        return "Unlicense -  A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code."
    } else  {
        return "No license listed."
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
4. [Licenses](#Licenses)
5. [Contributing](#Contributing)
6. [Tests](#Tests)
7. [Built With:](#Built-with)
8. [Questions](#Questions)
9. [Year Built](#Year-built)

## Description: 
${description}
https://img.shields.io/badge/generator-MIT-brightgreen
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
## License
${generateLicense(license)}
         


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
  