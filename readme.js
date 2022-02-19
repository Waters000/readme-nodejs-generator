const fs = require('fs');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const generatePage = require('./src/pagetemplate');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your Project name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your Project name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to add an image in your folder assets/images/screenshot.png to readme?',
        default: true
      },
  ]);
};

const promptProject = portfolioData => {


  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('You need to enter a project description!');
                return false;
              }
            }
          },
        {
        type: 'input',
        name: 'name',
        message: 'Add names of Contributors seperated by a comma (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please add contributors?');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'problem',
        message: 'How do you intend to use this project? (Required)',
        validate: problemInput => {
          if (problemInput) {
            return true;
          } else {
            console.log('How to use this project?');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'install',
        message: 'How to install this project? (Required)',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('How to install this project?');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What license is used? (Check all that apply)',
        choices: ['MIT', 'GNU', 'Mozilla', 'Apache', 'GPLUv3', 'Public', 'Google']
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      
      },
    //   
    
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
