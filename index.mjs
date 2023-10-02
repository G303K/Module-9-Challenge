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

// Function to save data to a JSON file
function saveToJsonFile(fileName, data) {
  fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
}

// Function call to initialize app
init().then((answers) => {
  // Specify the file path where you want to save the JSON file
  const jsonFilePath = 'README.json';

  // Save the user input data to the JSON file
  saveToJsonFile(jsonFilePath, answers);

  console.log(`README.json has been generated.`);
});

