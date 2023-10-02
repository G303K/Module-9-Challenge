import fs from 'fs';
import inquirer from 'inquirer';

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title for your README:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description:',
  },
  // Add more questions for other sections of the README as needed
];

// Create a function to write the README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// Create a function to initialize the app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate the README content based on user answers
      const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Installation
<!-- Add installation instructions here -->

## Usage
<!-- Add usage instructions here -->

## License
<!-- Add license information here -->
`;

      // Specify the file path where you want to save the README
      const readmeFilePath = 'README.md';

      // Write the README content to the file
      writeToFile(readmeFilePath, readmeContent);

      console.log(`README.md has been generated.`);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Function call to initialize app
init();
