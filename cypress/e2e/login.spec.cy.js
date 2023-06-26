describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://inf15979.disciplinas.rlaiola.inf.ufes.br/boca/')
    cy.get(':nth-child(1) > :nth-child(2) > input').type('ihc')
    cy.get(':nth-child(2) > :nth-child(2) > input').type('ihc')
    cy.get('[type="submit"]').click()
  })

  it('passes', () => {
       cy.get(':nth-child(1) > .menu').click()
  })

  it('clicar', () => {
      cy.get(':nth-child(3) > .menu').click()
  })
})






