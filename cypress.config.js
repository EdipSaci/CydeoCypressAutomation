const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://practice.cydeo.com',
    video: false,
    retries: 2, //if it fails it will try 2 times
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
