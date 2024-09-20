describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_seven()
    cy.check_answer('7')
    cy.check_history('Ans = 0')

  })
})