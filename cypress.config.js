const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://practice.cydeo.com',
    env: {
      login:"/login"
    },
    video: false,
    retries: 1, //if it fails it will try 1 time
    defaultCommandTimeout: 5000, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
