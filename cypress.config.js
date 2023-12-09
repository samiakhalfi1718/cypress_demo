const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //"baseUrl":"https://www.google.com",
    //pour configurer le viewport pour tout les cas de test
   // "viewportWidth":550,
    //"viewportHeight":750,
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
