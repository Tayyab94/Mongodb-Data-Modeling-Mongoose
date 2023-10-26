#Basic Packages and commands

1 . npm init -y

# The command npm init -y is used to initialize a new Node.js project with default values, and the -y flag automatically accepts all default values without prompting you for input. It will create a basic package.json file for your project.


2 npm i express

in this project we are importing the module by using import statement and once we run the project we will face an error, to resolve that issue
add ( "type": "module",) in the package.json file.

3. then we have install nodemon package. this helps us to reload the server after we commit some changes in our code.
 
 #changes in Pacakge.json file.

 "scripts": {
    "dev": "nodemon index.js"
  },

as you can see. we are getting the values from .eve file. to get the values from .env file we need to install 1 more package (npm i doteve)
we can check the index.js file how we can use this package module to get the values from .evn file


#For further we will update this file step by step when we need to add.