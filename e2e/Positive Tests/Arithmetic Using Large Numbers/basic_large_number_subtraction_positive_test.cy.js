const random_number_1 = Math.floor(Math.random() * (10 ** 10))
const random_number_2 = Math.floor(Math.random() * (10 ** 20))
    
describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.type_number(random_number_1)
    cy.clickButton_minus()
    cy.type_number(random_number_2)

    cy.clickButton_equal()

    var ans = random_number_1 - random_number_2
    cy.reformat_and_check_answer(ans)
  })
})