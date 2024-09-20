describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_one()
    cy.clickButton_zero()
    cy.clickButton_zero()
    cy.clickButton_zero()
    cy.check_answer('1000')
    cy.check_history('Ans = 0')

  })
})