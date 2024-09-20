describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_multiply()
    cy.check_answer('0 x')
    cy.check_history('Ans = 0')

  })
})