describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_nine()
    cy.clickButton_divide()
    cy.clickButton_three()
    cy.clickButton_equal()
    cy.check_answer('3')
    cy.check_history('9 ÷ 3 =')

  })
})