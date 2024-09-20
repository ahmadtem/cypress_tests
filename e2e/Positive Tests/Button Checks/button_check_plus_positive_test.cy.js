describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_plus()
    cy.check_answer('0 +')
    cy.check_history('Ans = 0')

  })
})