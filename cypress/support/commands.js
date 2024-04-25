Cypress.Commands.add('visitPage', function (setor) {
 
    cy.visit('https://blogdoagi.com.br' + setor);
    
  });

  Cypress.Commands.add('searchGlass', () => {
    
    cy.get('.site-header-above-section-right > .ast-builder-layout-element')
  })

  Cypress.Commands.add('searchField', (name) => {
    cy.get('#search-field').type(name + "{enter}")
  })

  Cypress.Commands.add('validatingTitle', (label) =>{
    cy.get('.ast-archive-description').should('contain',label)
  })
  Cypress.Commands.add('validatingResult', (result) =>{
    cy.get('.no-results').should('contain',result)

  })
  