describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_nine()
    cy.clickButton_equal()
    cy.check_answer('9')
    cy.check_history('9 =')

  })
})