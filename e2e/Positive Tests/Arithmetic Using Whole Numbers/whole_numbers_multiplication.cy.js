describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_two()
    cy.clickButton_multiply()
    cy.clickButton_three()
    cy.clickButton_equal()
    cy.check_answer('6')
    cy.check_history('2 × 3 =')

  })
})