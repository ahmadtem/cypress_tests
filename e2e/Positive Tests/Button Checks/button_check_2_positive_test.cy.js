describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_two()
    cy.check_answer('2')
    cy.check_history('Ans = 0')

  })
})