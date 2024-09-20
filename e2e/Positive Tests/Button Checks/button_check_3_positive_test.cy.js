describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_three()
    cy.check_answer('3')
    cy.check_history('Ans = 0')

  })
})