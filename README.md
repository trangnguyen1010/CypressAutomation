# CypressAutomation
An automation testing framework for web appplucation using Cypress
### Project structure
```
.
├── cypress
│   ├── fixtures
│   │   ├── answer.json
│   │   ├── locator.json
│   │   ├── messages.json
│   │   ├── testdata.json
│   │   └── ...
│   ├── integration
│   │   ├── chatBox.spec.js
│   │   └── ...
│   ├── pages
│   │   ├── ChatBoxPage.js
│   │   └── ...
│   ├── plugins
│   │   ├── index.js
│   │   └── ...
│   └── support
│      ├── commands.js
│      ├── index.js
│      └── ...
├── package.json
└── cypress.json
```
## Getting Started
### Prerequisites
- NodeJS

### Installation
1. Clone the repo
```
git clone https://github.com/trangnguyen1010/CypressAutomation.git
```
2. Install NPM packages
```
$ npm install
```
### Running the tests
- Open Cypress:
```
$ npm run cy:open
```
- Running the tests in headless mode with Chrome
```
$ npm run cy:run-chrome
```
- Running the tests in headless mode with Firefox
```
$ npm run cy:run-firefox
```
- Running the tests in headless mode with Electron
```
$ npm run cy:run-electron
```
