describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_decimal()
    cy.clickButton_equal()
    cy.check_answer('Error')
    cy.check_history('. =')

  })
})