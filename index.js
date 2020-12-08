const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user
const questions = [

      {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
        validate: function(name) {
            if(name.length < 1) {
                return console.log("You must provide a valid Github username.");
            }
        }
      },
      {
        type: 'input',
        message: 'What is the name of your Github repository?',
        name: 'repository',
        validate: function(word) {
            if(name.length < 1) {
                return console.log("You must provide a valid Github repo name.");
            }
        }
      },
      {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: function(word) {
            if(name.length < 1) {
                return console.log("You must provide a title for your project.");
            }
        }
      },
      {
        type: 'input',
        message: 'Please add a table of content.',
        name: 'content',
        validate: function(word) {
            if(name.length < 1) {
                return console.log("You must provide a table of content.");
            }
        }
      },
      {
        type: 'input',
        message: 'Please include a description of your project.',
        name: 'description',
        validate: function(word) {
            if(name.length < 1) {
                return console.log("You must provide a description of your project.");
            }
        }
      },
      {
        type: 'input',
        message: 'If applicable, please describe the steps required to install your application.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Please share instructions and examples of your project in use.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'State if you are open to contributions and what your requirements are for accepting them.',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'If applicable, provide any tests written for your application and provide examples on how to run them.',
        name: 'tests',
      },
      {
        type: 'list',
        message: 'Choose a license for your project.',
        choices: ['Academic Free License v3.0', 'Apache license 2.0', 'Artistic license 2.0', 'Boost Software License 1.0', 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', 'BSD 3-clause Clear license', 'Creative Commons license family', 'Creative Commons Zero v1.0 Universal', 'Creative Commons Attribution 4.0', 'Creative Commons Attribution Share Alike 4.0', 'Do What The F*ck You Want To Public License', 'Educational Community License v2.0', 'Eclipse Public License 1.0', 'Eclipse Public License 2.0', 'European Union Public License 1.1', 'GNU Affero General Public License v3.0', 'GNU General Public License family', 'GNU General Public License v2.0', 'GNU General Public License v3.0', 'GNU Lesser General Public License family', 'GNU Lesser General Public License v2.1', 'GNU Lesser General Public License v3.0', 'ISC', 'LaTeX Project Public License v1.3c', 'Microsoft Public License', 'MIT', 'Mozilla Public License 2.0', 'Open Software License 3.0', 'PostgreSQL License', 'SIL Open Font License 1.1', 'University of Illinois/NCSA Open Source License', 'The Unlicense', 'zLib License'];
        name: 'license',
      },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


