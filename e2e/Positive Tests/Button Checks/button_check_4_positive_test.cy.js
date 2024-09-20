describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_four()
    cy.check_answer('4')
    cy.check_history('Ans = 0')

  })
})