# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run selenium`

Runs the Selenium accessibility test (see below for more info on set up).

## Selenium
In order to run the Selenium accessibility test, you need to ensure you have the webdriver installed and in the correct
place on your machine. 

> NB: The test is currently set up to run on Chrome, but this can be changed by altering the 
following line in the test to a different browser:`let driver = await new Builder().forBrowser("chrome").build();`

#### On Mac:
* Check what version of Chrome you have, by heading to Chrome > About Google Chrome
* Download the correct version of the driver from https://chromedriver.chromium.org/downloads
* Ensure you can run the driver (double click in finder). If you see a permissions warning, 
* run the following command in your terminal to grant the required permissions:
`xattr -d com.apple.quarantine /Downloads/chromedriver`
* Move the chromedriver file to your `usr/local/bin` folder
* Make sure your application is running; start it with `npm start`
* You should now be able to run the Selenium test from your IDE or
by using the command `npm run selenium`

#### On Windows: 
TBC