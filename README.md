
# OrangeHRM Cypress Assessment

This project demonstrates end-to-end (E2E) testing of the OrangeHRM demo site using Cypress. 

## Project Overview
- **Framework:** Cypress
- **Tested Application:** [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)
- **Test Focus:** Login functionality

## Folder Structure
```
Assessment/
├── cypress.config.js         # Cypress configuration
├── package.json              # Project dependencies
├── cypress/
│   ├── e2e/                  # E2E test specs
│   │   └── OrangeHRM.cy.js   # Main test file
│   ├── fixtures/             # Test data (example.json)
│   ├── support/              # Custom commands & global setup
│   │   ├── commands.js       # Custom Cypress commands
│   │   └── e2e.js            # Global support config
│   └── downloads/            # (empty, for downloads)
└── README.md                 # Project documentation
```

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation Steps
1. **Clone the repository**
	```bash
	git clone git@github.com:etumoh/ORANGEHRM-test.git
	cd ORANGEHRM-test
	```
2. **Install dependencies**
	```bash
	npm install
	```
	This installs Cypress and other required packages.

### Running the Tests
1. **Open Cypress Test Runner**
	```bash
	npx cypress open
	```
	- This launches the Cypress UI. Select `OrangeHRM.cy.js` under the `e2e` folder to run the test interactively.

2. **Run tests in headless mode (optional)**
	```bash
	npx cypress run
	```
	- This runs all E2E tests in the terminal.

## Test Details
- The main test (`OrangeHRM.cy.js`) automates:
  - Navigating to the OrangeHRM login page
  - Entering valid credentials (`Admin` / `admin123`)
  - Submitting the login form
  - Includes waits to accommodate page load and input timing
- Test data can be managed via the `fixtures` folder for more advanced scenarios.

## Customization & Extensibility
- Add more test cases in the `cypress/e2e/` folder.
- Use `cypress/support/commands.js` to define reusable custom commands.
- Global setup/configuration can be modified in `cypress/support/e2e.js`.


## References
- [Cypress Documentation](https://docs.cypress.io/)
- [OrangeHRM Demo Site](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)




