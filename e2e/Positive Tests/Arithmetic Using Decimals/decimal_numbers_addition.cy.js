describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_nine()
    cy.clickButton_decimal()
    cy.clickButton_seven()

    cy.clickButton_plus()

    cy.clickButton_seven()
    cy.clickButton_decimal()
    cy.clickButton_four()
    cy.clickButton_three()
    
    cy.clickButton_equal()
    cy.check_answer('17.13')
    cy.check_history('9.7 + 7.43 =')

  })
})