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
          .map(({ name, license, confirmAbout, install, description, problem, languages, email }) => {
            return `
## Desription: 
${description}
## Contributing: 
${name}   
## Usage:
 ${problem}   
## Built with:
${languages.join(', ')}
## How to install?
${install}
## Type of Licenses 
${license.join(', ')}          
## Questions: 
${email} - Please send me an email with additional questions or any suggestions or make this project better.
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
 ## "https://github.com/${header.github}"
 ${generateAbout(confirmAbout)}
### ${new Date().getFullYear()} by ${header.github}  `;
  };
  