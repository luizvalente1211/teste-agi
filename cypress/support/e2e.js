import './commands';


require('cypress-plugin-tab');


Cypress.on('uncaught:exception', (_err, _runnable) => {
  return false;
});