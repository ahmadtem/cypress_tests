describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    // minimum number of digits to render the answer in scientific notation (13 digits)
    cy.clickButton_one()
    cy.clickButton_zero()
    cy.clickButton_zero_11()
    cy.clickButton_equal()

    cy.check_answer('1e+12')
    cy.check_history('1000000000000 =')

  })
})