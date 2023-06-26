describe('My First Test', () => {
  it('Visits BOCA', () => {
    cy.visit('https://inf15979.disciplinas.rlaiola.inf.ufes.br/boca/')
    cy.contains('boca')
    cy.get('name')
  })
})