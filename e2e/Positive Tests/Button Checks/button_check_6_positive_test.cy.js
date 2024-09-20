describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_six()
    cy.check_answer('6')
    cy.check_history('Ans = 0')

  })
})