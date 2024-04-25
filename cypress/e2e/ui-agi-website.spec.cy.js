describe('accessing agi website', () => {
  beforeEach(() => {

    //realiza o acesso ao site da AGI - uma breve analise verifiquei que a URL é padrão
    // sendo assim, possível, re-utilizar o visit para direcionar para outros setor
    // passando apenas /setor como consta no metodo visitPage
    cy.visitPage("/"); //<-nesse caso estarei na home
    //cy.visitPage("/noticias/") //<-nesse caso sou direcionado para a pagina de noticias
  });

  //Cenário 1 - Valida se a lupa está visivel para pesquisa
  it('Cenário 1 - Validating search visible', () => {
    //Valida se o elemanto está visivel na tela
    cy.searchGlass().should('be.visible')
    //searchGlass - realiza o click na lupa
    cy.searchGlass().click()

  });
  //realiza uma pesquisa com sucesso
  it('Cenário 2 - Do a search success', () => {
    cy.searchGlass().should('be.visible')
    cy.searchGlass().click()
    //searchField - escreve no campo após o click o que for passado dentro das aspas
    cy.searchField("saque")
    cy.validatingTitle("Resultados encontrados para")

  })
  it('Cenário 3 - Do a search no results', () => {
    cy.searchGlass().should('be.visible')
    cy.searchGlass().click()
    //searchField - escreve no campo após o click o que for passado dentro das aspas
    cy.searchField("aaaaaa")
    //validatingTitle - Valida se o campo de Resultados esta visivel
    cy.validatingTitle("Resultados encontrados para")
    //validatingResult - Valida se não obteve resultados
    cy.validatingResult("Lamentamos, mas nada foi encontrado para sua pesquisa")
  })

});