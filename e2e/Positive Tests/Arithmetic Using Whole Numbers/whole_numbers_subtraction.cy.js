describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_nine()
    cy.clickButton_minus()
    cy.clickButton_five()
    cy.clickButton_equal()
    cy.check_answer('4')
    cy.check_history('9 - 5 =')

  })
})