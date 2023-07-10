const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "http://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    env: {
      first_name: "Sara",
      webdriver_uni_home: "http://www.webdriveruniversity.com/"
    },

  },
});
