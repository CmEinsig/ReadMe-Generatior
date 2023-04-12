const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What do you need to run your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
      },
      {
        type: 'list',
        message: 'What liscence are you using?',
        name: 'liscence',
        choices: ['MIT', 'Creative Commons', 'None'],
      }, 
      {
        type: 'input',
        name: 'contribute',
        message: 'Ways to contribute to your project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What kind of tests for your project?',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Email to contact you?',
      },
    ];
    console.log(questions)

  inquirer.prompt(questions).then((answers) => {
    generateREADME(answers);
  });

  function generateREADME(readme)
${title}

Description
    ${description}
Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Contribute](#contribute)
    - [Tests](#tests)
    - [Questions](#questions)

    Installation
    ${installation}

Usage
    ${usage}
    
Credits
    ${credits}

Liscense
${liscense}
    
How to Contribute

    ${contribute}

Tests
    ${tests}

Questions
    You can email me any questions at ${questions}

    }
;

fs.writeFile('README.me', readme, (err) => {
    if (err) throw err;
    console.log('README generated!');
  });
