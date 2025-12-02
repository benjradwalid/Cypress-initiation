describe('Exemple', () => {
  it('vérifie le titre', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('cypress.io')
  })
})
