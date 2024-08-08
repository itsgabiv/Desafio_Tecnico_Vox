//const { defineConfig } = require('cypress');
module.exports = {
viewportHeight:600,
viewportWidth:720,
chromeWebSecurity: false,
video:false,

    env: {
        username: '',
        password: '',
    },
    "retries": {
        "runMode": 3,
        "openMode": 0
    },
     reporter: 'cypress-multi-reporters',
    reporterOptions: {
        configFile: 'reporter-config.json',
    },

  e2e: {
    CYPRESS_CACHE_DISABLED: true,
 baseUrl:'https://www.saucedemo.com',
  specPattern:'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
