// create the about section
const generateAbout = aboutText => {
    if (!aboutText) {
      return '';
    }
    return `
   
  
    #${aboutText}
    `;
  }
  
  const generateProjects = projectsArr => {
    return `
      
        ${projectsArr
          .filter(({ feature }) => feature)
          .map(({ name, description, languages, link }) => {
            return `
            ###${name}
             
             ##   ${languages.join(', ')}
              
            ###  ${description}
           ### ${link}
           
          `;
          })
          .join('')}
  
        ${projectsArr
          .filter(({ feature }) => !feature)
          .map(({ name, description, languages, link }) => {
            return `
            ${name}
             
              ##  Built With:
                ${languages.join(', ')}
           
             ${description}
             "${link}" 
   
          `;
          })
          .join('')}
      
     
    `;
  };
  
  
  module.exports = templateData => {
   
  // destructure projects and about data from templateData based on their property key name
  const {projects, about, ...header} = templateData;
  
    return `
   
    
    
      ###${header.name}
      
     ## href="https://github.com/${header.github}">Github
    
  
 
   ### ${generateAbout(about)}
    ${generateProjects(projects)}
    </main>
  
  
    ${new Date().getFullYear()} by ${header.name}</h3>

    
     
    `;
  };
  