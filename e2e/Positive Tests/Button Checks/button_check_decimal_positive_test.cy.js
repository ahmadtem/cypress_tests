describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_decimal()
    cy.check_answer('.')
    cy.check_history('Ans = 0')

  })
})