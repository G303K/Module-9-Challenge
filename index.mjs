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
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage instructions:',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Enter license information:',
  },
];

// Create a function to initialize the app
function init() {
  return inquirer
    .prompt(questions)
    .then((answers) => {
      return answers;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Function to save data to a Markdown file
function saveToMarkdownFile(fileName, data) {
  const markdownContent = `
# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}
  `;

  fs.writeFileSync(fileName, markdownContent);
}

// Function call to initialize app
init().then((answers) => {
  // Specify the file path where you want to save the Markdown file
  const markdownFilePath = 'README.md';

  // Save the user input data to the Markdown file
  saveToMarkdownFile(markdownFilePath, answers);

  console.log(`README.md has been generated.`);
});
