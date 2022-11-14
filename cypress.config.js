const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  watchForFileChanges: false,
 
  
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
    },
    e2e:{
      specPattern: 'cypress/Integration/**/*.feature',
      baseUrl: 'https://rahulshettyacademy.com/seleniumPractise'
    },
    
  }
})