//  @fileoverview A command line util in Inquire
//  @author Joshua Skootsky

// Requirements
const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'list', // type: 'checkbox'
    name: 'drink',
    message: 'How would you like a martini?',
    default: 'shaken',
    choices: [
      { name: 'Stirred', value: 'stirred' },
      { name: 'Shaken, not stirred', value: 'shaken' },
      { name: 'Neat, please', neat: 'neat' },
    ],
  },
  {
    type: 'list',
    name: 'name',
    message: 'What is your name?',
    default: 'Bond. James Bond.',
    choices: [
      { name: 'Vesper Lynd', value: 'vesper' },
      { name: 'Bond. James Bond', value: 'bond' },
      { name: 'Oddjob', value: 'odd' },
      { name: 'None of these', value: 'none' },
    ],
  },
]).then(answers => {
    console.log(answers);
});
