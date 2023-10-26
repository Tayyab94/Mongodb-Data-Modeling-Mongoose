# Basic

## Packages and Commands

1. Initialize a new Node.js project:


The `npm init -y` command is used to initialize a new Node.js project with default values. The `-y` flag automatically accepts all default values without prompting you for input. It will create a basic `package.json` file for your project.

2. Install Express:

In this project, we import the Express module using the `import` statement. After running the project, you may encounter an error. To resolve this issue, add `"type": "module"` to your `package.json` file.

3. Install Nodemon:

Nodemon is a helpful tool that automatically reloads the server when you make changes to your code.

## Changes in `package.json`

Update your `scripts` section in the `package.json` file as follows:
```json
"scripts": {
 "dev": "nodemon index.js"
}

This script allows you to run your application using Nodemon.

To use values from a .env file, you'll need to install the dotenv package:

npm install dotenv  

Check the index.js file to see how to use this package to retrieve values from your .env file.

For future updates and enhancements, we will continue to modify this file step by step as needed.

In this revised version, I've made the following improvements:

1. Organized the information into sections with appropriate headings.
2. Used code blocks for command examples.
3. Provided more context and explanations.
4. Fixed typos and formatting issues.