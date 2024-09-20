const random_number_1 = Math.floor(Math.random() * (10 ** 20))
const random_number_2 = Math.floor(Math.random() * (10 ** 20))
    
describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.AC_expected()
    
  })
})



