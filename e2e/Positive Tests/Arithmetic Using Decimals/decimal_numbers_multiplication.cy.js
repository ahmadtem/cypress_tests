describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_six()
    cy.clickButton_decimal()
    cy.clickButton_five()
    cy.clickButton_nine()

    cy.clickButton_multiply()

    cy.clickButton_seven()
    cy.clickButton_decimal()
    cy.clickButton_seven()

    cy.clickButton_equal()
    cy.check_answer('50.743')
    cy.check_history('6.59 × 7.7 =')

  })
})