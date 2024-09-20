describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_eight()
    cy.clickButton_decimal()
    cy.clickButton_four()
    cy.clickButton_four()

    cy.clickButton_divide()

    cy.clickButton_three()
    cy.clickButton_decimal()
    cy.clickButton_four()

    cy.clickButton_equal()
    cy.check_answer('2.48235294118')
    cy.check_history('8.44 ÷ 3.4 =')

  })
})