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
          .map(({ name, license, confirmAbout, description, problem, languages, link }) => {
            return `
## Desription: 
${description}
## Names of Contributors: 
${name}   
## Problem this project solves:
 ${problem}   
## Built with:
${languages.join(', ')}
## Type of Licenses 
${license.join(', ')}          
## Reference Links: 
${link}
 `;
          })
        }
    `;
  };
  
  
  module.exports = templateData => { 
  // destructure projects and about data from templateData based on their property key name
  const {projects, confirmAbout, ...header} = templateData;
  
    return `
 # ${header.name}    
 ${generateProjects(projects)}
 ## "https://github.com/${header.github}"
 ${generateAbout(confirmAbout)}
### ${new Date().getFullYear()} by ${header.github}  `;
  };
  