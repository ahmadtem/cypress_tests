describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    // largest possible value to render a number and not infinity
    cy.clickButton_one()
    cy.clickButton_seven()
    cy.clickButton_nine()
    cy.clickButton_seven()
    cy.clickButton_six()
    cy.clickButton_zero_304()
    cy.clickButton_equal()

    cy.check_answer('1.7976e+308')
    cy.check_history('179760000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 =')

  })
})