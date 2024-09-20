describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_nine()
    cy.check_answer('9')
    cy.check_history('Ans = 0')

  })
})