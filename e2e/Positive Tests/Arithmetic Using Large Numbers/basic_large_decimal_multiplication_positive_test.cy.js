const random_number_1 = Math.floor(Math.random() * (10 ** 20))
const random_number_2 = Math.floor(Math.random() * (10 ** 20))
const random_number_1_decimal = Math.floor(Math.random() * (10 ** 20))
const random_number_2_decimal = Math.floor(Math.random() * (10 ** 20))
    
describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.clickButton_minus()
    cy.type_number(random_number_1)
    cy.clickButton_decimal()
    cy.type_number(random_number_1_decimal)

    cy.clickButton_multiply()
    
    cy.clickButton_minus()
    cy.type_number(random_number_2)
    cy.clickButton_decimal()
    cy.type_number(random_number_2_decimal)

    cy.clickButton_equal()

    var float_1 = parseFloat("-" + random_number_1 + "." + random_number_1_decimal)
    var float_2 = parseFloat("-" + random_number_2 + "." + random_number_2_decimal)

    var ans = float_1 * float_2
    cy.handle_float_and_check_answer(ans)
  })
})