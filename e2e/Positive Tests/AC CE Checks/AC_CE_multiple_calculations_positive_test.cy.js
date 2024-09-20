const random_number_1 = Math.floor(Math.random() * (10 ** 20))
const random_number_2 = Math.floor(Math.random() * (10 ** 20))
    
describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://www.google.com/search?q=calculator')


    cy.AC_expected()                         // AC button showing          
    cy.clickButton_zero()     // 0
    cy.CE_expected()                            // CE button showing
    cy.clickButton_AC_CE()    // CE
    cy.CE_expected()                            // CE button showing
    cy.clickButton_one()      // 1
    cy.CE_expected()                            // CE button showing
    cy.clickButton_one()      // 1
    cy.CE_expected()                            // CE button showing
    cy.clickButton_two()      // 2
    cy.CE_expected()                            // CE button showing
    cy.clickButton_two()      // 2
    cy.CE_expected()                            // CE button showing        
    cy.clickButton_AC_CE()    // CE
    cy.CE_expected()                            // CE button showing        
    cy.clickButton_AC_CE()    // CE
    cy.CE_expected()                            // CE button showing
    cy.clickButton_AC_CE()    // CE
    cy.CE_expected()                            // CE button showing
    cy.clickButton_AC_CE()    // CE
    cy.CE_expected()                            // CE button showing
    cy.clickButton_AC_CE()    // CE
    cy.CE_expected()                            // CE button showing
    cy.clickButton_three()    // 3
    cy.CE_expected()                            // CE button showing
    cy.clickButton_equal()    // =
    cy.AC_expected()                         // AC button showing
    cy.clickButton_AC_CE()    // AC
    cy.CE_expected()                            // CE button showing
    cy.clickButton_minus()    // -
    cy.CE_expected()                            // CE button showing
    cy.clickButton_plus()     // +
    cy.CE_expected()                            // CE button showing
    cy.clickButton_multiply() // *
    cy.CE_expected()                            // CE button showing
    cy.clickButton_divide()   // /
    cy.CE_expected()                            // CE button showing
    cy.clickButton_AC_CE()    // CE
    cy.CE_expected()                            // CE button showing
    cy.clickButton_AC_CE()    // CE
    cy.CE_expected()                            // CE button showing
    cy.clickButton_AC_CE()    // CE
    cy.CE_expected()                            // CE button showing
    cy.clickButton_AC_CE()    // CE
    cy.CE_expected()                            // CE button showing
    cy.clickButton_AC_CE()    // CE
    cy.CE_expected()                            // CE button showing
    cy.clickButton_equal()    // =
    cy.CE_expected()                            // CE button showing
    cy.clickButton_equal()    // CE
    cy.CE_expected()                            // CE button showing
    cy.clickButton_equal()    // =
    cy.CE_expected()                            // CE button showing
    cy.clickButton_equal()    // CE
    cy.CE_expected()                            // CE button showing
    cy.clickButton_equal()    // =
    cy.CE_expected()                            // CE button showing
    cy.clickButton_divide()   // /
    cy.CE_expected()                            // CE button showing
    cy.clickButton_equal()    // =
    cy.CE_expected()                            // CE button showing
    cy.clickButton_five()     // 5
    cy.CE_expected()                            // CE button showing
    cy.clickButton_six()      // 6
    cy.CE_expected()                            // CE button showing
    cy.clickButton_seven()    // 7
    cy.CE_expected()                            // CE button showing
    cy.clickButton_eight()    // 8
    cy.CE_expected()                            // CE button showing
    cy.clickButton_AC_CE()    // CE
    cy.CE_expected()                            // CE button showing
    cy.clickButton_divide()   // /
    cy.CE_expected()                            // CE button showing
    cy.clickButton_AC_CE()    // CE
    cy.CE_expected()                            // CE button showing
    cy.clickButton_multiply() // *
    cy.CE_expected()                            // CE button showing
    cy.clickButton_two()      // 2
    cy.CE_expected()                            // CE button showing
    cy.clickButton_four()     // 4
    cy.CE_expected()                            // CE button showing
    cy.clickButton_six()      // 6
    cy.CE_expected()                            // CE button showing
    cy.clickButton_equal()    // =
    cy.AC_expected()                         // AC button showing
    cy.clickButton_equal()    // =
    cy.AC_expected()                         // AC button showing
    cy.clickButton_equal()    // =
    cy.AC_expected()                         // AC button showing
    cy.clickButton_equal()    // =
    cy.AC_expected()                         // AC button showing
    cy.clickButton_equal()    // =
    cy.AC_expected()                         // AC button showing
    cy.clickButton_equal()    // =
    cy.AC_expected()                         // AC button showing
    cy.clickButton_equal()    // =
    cy.AC_expected()                         // AC button showing
    cy.clickButton_plus()     // +
    cy.CE_expected()                            // CE button showing
    cy.clickButton_AC_CE()    // CE
    cy.CE_expected()                            // CE button showing
    cy.clickButton_AC_CE()    // CE
    cy.CE_expected()                            // CE button showing
    cy.check_answer("0")
    cy.clickButton_decimal()  // .
    cy.CE_expected()                            // CE button showing
    cy.clickButton_minus()    // -
    cy.CE_expected()                            // CE button showing
    cy.clickButton_decimal()  // .
    cy.CE_expected()                            // CE button showing
    cy.clickButton_equal()    // =
    cy.check_answer("Error")
    cy.AC_expected()                         // AC button showing
    cy.clickButton_AC_CE()    // CE
    cy.check_answer("0")
    cy.CE_expected()                            // CE button showing

  })
})