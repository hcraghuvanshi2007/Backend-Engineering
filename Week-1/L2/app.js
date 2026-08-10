// NPM - creating a New Project

// 1. Interactive setup — asks questions
npm init
// package name: (my-app)
// version: (1.0.0)
// description: My Node.js API
// entry point: (index.js)
// test command:
// author: Alice
// license: (ISC)

// Skip questions — use defaults for everything
npm init -y
// Creates package.json instantly with defaults

// Check what was created
cat package.json

// 2. Install dependencies

// Install and save to 'dependencies' (needed in production)
npm install express
npm install express mongoose dotenv cors

// Install as 'devDependency' (dev tools only)
npm install --save-dev nodemon jest
// shorthand:
npm i -D nodemon jest

// Install a specific version
npm install express@4.18.2

// Install all deps listed in package.json
npm install

// Install globally (available in any project)
npm install -g nodemon
