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
  {
    type: 'input',
    name: 'contributors',
    message: 'Enter contributors (separate with commas):',
  },
  {
    type: 'input',
    name: 'contact',
    message: 'Enter contact information (e.g., email, website):',
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

// Function to generate the README content
function generateReadme(answers) {
  const contributorsList = answers.contributors.split(',').map((contributor) => `- ${contributor.trim()}`).join('\n');

  return `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributors
${contributorsList}

## Contact
${answers.contact}
  `;
}

// Function call to initialize app
init().then((answers) => {
  // Specify the folder path where you want to save the README.md file
  const folderPath = 'generated-readme/';
  const readmeFilePath = `${folderPath}README.md`;

  // Generate the README content
  const readmeContent = generateReadme(answers);

  // Save the README content to the README.md file
  fs.writeFileSync(readmeFilePath, readmeContent);

  console.log(`README.md has been generated in the "${folderPath}" folder.`);
});
