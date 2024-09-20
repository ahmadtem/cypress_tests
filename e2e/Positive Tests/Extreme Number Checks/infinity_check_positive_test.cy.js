describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    // smallest possible value to render infinity
    cy.clickButton_one()
    cy.clickButton_seven()
    cy.clickButton_nine()
    cy.clickButton_seven()
    cy.clickButton_seven()
    cy.clickButton_zero_304()
    cy.clickButton_equal()

    cy.check_answer('Infinity')
    cy.check_history('179770000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 =')

  })
})