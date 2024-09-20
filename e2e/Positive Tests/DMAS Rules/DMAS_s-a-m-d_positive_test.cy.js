const random_number_1 = Math.floor(Math.random() * (10 ** 5))
const random_number_2 = Math.floor(Math.random() * (10 ** 5))
const random_number_3 = Math.floor(Math.random() * (10 ** 5))
const random_number_4 = Math.floor(Math.random() * (10 ** 5))
const random_number_5 = Math.floor(Math.random() * (10 ** 5))

// DMAS Scenario
// - + x /
  
describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')

    cy.type_number(random_number_1)
    cy.clickButton_minus()

    cy.type_number(random_number_2)
    cy.clickButton_plus()

    cy.type_number(random_number_3)
    cy.clickButton_multiply()

    cy.type_number(random_number_4)
    cy.clickButton_divide()
    
    cy.type_number(random_number_5)
    cy.clickButton_equal()


    var ans = random_number_1 - random_number_2 + random_number_3 * random_number_4 / random_number_5
    cy.reformat_and_check_answer(ans)
    
  })
})