describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_seven()
    cy.clickButton_decimal()
    cy.clickButton_four()

    cy.clickButton_minus()
    
    cy.clickButton_two()
    cy.clickButton_decimal()
    cy.clickButton_nine()
    cy.clickButton_seven()
    
    cy.clickButton_equal()
    cy.check_answer('4.43')
    cy.check_history('7.4 - 2.97 =')

  })
})