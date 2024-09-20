describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    // maximum number of digits to render the answer not in scientific notation (12 digits)
    cy.clickButton_nine()
    cy.clickButton_zero_11()
    cy.clickButton_equal()

    cy.check_answer('900000000000')
    cy.check_history('900000000000 =')

  })
})