// create the about section
// const generateAbout = aboutText => {
//     if (!aboutText) {
//       return '';
//     }
//     return `
// # ${aboutText} 
//     `;
//   }
  const generateProjects = projectsArr => {
    return `
        ${projectsArr
          .filter(({ feature }) => !feature)
          .map(({ name, license, description, problem, languages, link }) => {
            return `
## Desription: 
${description}
## Names of Contributors: 
${name}   
## Problem this project solves:
 ${problem}   
## Image 
![Screenshot 2022-01-29 190329](https://user-images.githubusercontent.com/94644749/151681703-6695c05a-eb11-422b-9a5f-5c0c2410157a.png)
## Built with:
${languages.join(', ')}
## Type of Licenses 
${license.join(', ')}          
## Reference Links: 
${link} `;
          })
        }
    `;
  };
  
  
  module.exports = templateData => { 
  // destructure projects and about data from templateData based on their property key name
  const {projects, about, ...header} = templateData;
  
    return `
 # ${header.name}    
 ${generateProjects(projects)}
 ## "https://github.com/${header.github}"
### ${new Date().getFullYear()} by ${header.github}  `;
  };
  