# Introduction

This is an example application to demonstrate the use of some accessibility testing tools.

# Getting started

1. Run `npm install` to install the node dependencies
2. Add the DevCA certificate to your trust store & give it correct permissions <br> See below: [Add CA certificate to truststore](#Add-CA-certificate-to-truststore:)
3. Install the Selenium webdriver <br>See below: [Selenium](#Selenium)
4. Run `npm start` to start the application

## Running in development mode

### Using localhost https

Recent Chrome changes to support the 'SameSite' cookie attribute mean that we have to run the application using https.

(The sign-in process involves Azure AD B2C POSTing a successful login from their Javascript to our site, and that
requires SameSite=None so that we get our session cookie sent along with their POST. SameSite=None is only supported
on Secure cookies, and we can only set Secure if we are running on https.)

Before you can run the site on https you need to generate a self-signed certificate, and then add that certificate to
the trust store on your machine.

### Add CA certificate to truststore:

#### MacOS

1. Open `certs/dev-ca.crt` with the Finder app
2. Add the `dev-ca.crt` to the Keychain app by double clicking on it or using ⌘+O
3. In the Keychain Access app, navigate to the Certificates tab
4. Get info for the newly added 'DevCA' entry in Keychain Access (right-click item > Get info)
5. In the info window, under 'Trust > When using this certificate:' set 'Always trust'.

#### Windows

1. Open the file explorer and double click on `certs/dev-ca.crt` to start the certificate import wizard
1. Import it for the current user
1. Allow it to automatically select the store to put it into
1. winkey+R certmgr.msc
1. Within 'Certificates - Current User' find the DevCA certificate under 'Intermediate Certification Authorities/Certificates'
1. Move (drag-drop) it to 'Trusted Root Certification Authorities/Certificates'

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
> following line in the test to a different browser:`let driver = await new Builder().forBrowser("chrome").build();`

### On Mac:

- Check what version of Chrome you have, by heading to Chrome > About Google Chrome
- Download the correct version of the driver from https://chromedriver.chromium.org/downloads
- Ensure you can run the driver (double click in finder). If you see a permissions warning,
- run the following command in your terminal to grant the required permissions:
  `xattr -d com.apple.quarantine /Downloads/chromedriver`.
- If this command won't run, it can help to move the file to another visible folder e.g. Applications, and then try the command again with:
  `xattr -d com.apple.quarantine /Applications/chromedriver`
- Move the chromedriver file to your `usr/local/bin` folder
- Run the command `npm install -g chromedriver`
- Make sure your application is running; start it with `npm start`
- You should now be able to run the Selenium test from your IDE or by using the command `npm run selenium`
- If you receive an 'EACCES' error message, run the command `npm install --save-dev chromedriver`, then try running the Selenium test over again

### On Windows:

TBC

### Selenium - troubleshooting

If you see an ECONN REFUSED error when running the selenium test, two common issues could be:

- The application isn't running. Ensure you start it first with `npm start` and that it successfully starts up
- The test is timing out too quickly. Adjust the 1000 to a higher number in `App.selenium.js`, line 47: `setTimeout(() => {driver.quit();}, 1000);`
