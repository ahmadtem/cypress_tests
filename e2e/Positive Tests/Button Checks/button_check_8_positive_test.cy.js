describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_eight()
    cy.check_answer('8')
    cy.check_history('Ans = 0')

  })
})