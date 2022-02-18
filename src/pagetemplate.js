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
### ${description}
# ${name}   
# ${problem}   
## Built with ${languages.join(', ')}
# ${license.join(', ')}          
### ${link} 
            
          `;
          })
          .join('')}
    `;
  };
  
  
  module.exports = templateData => { 
  // destructure projects and about data from templateData based on their property key name
  const {projects, about, ...header} = templateData;
  
    return `
 # ${header.name}     
 # href="https://github.com/${header.github}">Github
  ${generateProjects(projects)}
# ${new Date().getFullYear()} by ${header.name}

    
     
    `;
  };
  