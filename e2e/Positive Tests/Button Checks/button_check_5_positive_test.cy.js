describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_five()
    cy.check_answer('5')
    cy.check_history('Ans = 0')

  })
})