// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
    
// clickButton functions to press buttons 0123456789.=+-×÷AC/CE
// get section which contains numbers and arithmetic operators
// press relevant button using x, y pixel coordinates

// number 9
Cypress.Commands.add('clickButton_nine', () => {
	cy.get('.ElumCf').within(() => {
        cy.root().should('have.class', 'ElumCf')
    }).click(213, 72)
})

// number 8
Cypress.Commands.add('clickButton_eight', () => {
    cy.get('.ElumCf').within(() => {
        cy.root().should('have.class', 'ElumCf')
    }).click(128, 72)
})

// number 7
Cypress.Commands.add('clickButton_seven', () => {
    cy.get('.ElumCf').within(() => {
        cy.root().should('have.class', 'ElumCf')
    }).click(43, 72)
})

// number 6
Cypress.Commands.add('clickButton_six', () => {
    cy.get('.ElumCf').within(() => {
        cy.root().should('have.class', 'ElumCf')
    }).click(213, 108)
})

// number 5
Cypress.Commands.add('clickButton_five', () => {
    cy.get('.ElumCf').within(() => {
        cy.root().should('have.class', 'ElumCf')
    }).click(128, 108)
})

// number 4
Cypress.Commands.add('clickButton_four', () => {
    cy.get('.ElumCf').within(() => {
        cy.root().should('have.class', 'ElumCf')
    }).click(43, 108)
})

// number 3
Cypress.Commands.add('clickButton_three', () => {
    cy.get('.ElumCf').within(() => {
        cy.root().should('have.class', 'ElumCf')
    }).click(213, 144)
})

// number 2
Cypress.Commands.add('clickButton_two', () => {
    cy.get('.ElumCf').within(() => {
        cy.root().should('have.class', 'ElumCf')
    }).click(128, 144)
})

// number 1
Cypress.Commands.add('clickButton_one', () => {
    cy.get('.ElumCf').within(() => {
        cy.root().should('have.class', 'ElumCf')
    }).click(43, 144)
})

// number 0
Cypress.Commands.add('clickButton_zero', () => {
    cy.get('.ElumCf').within(() => {
        cy.root().should('have.class', 'ElumCf')
    }).click(43, 198)
})

// decimal point
Cypress.Commands.add('clickButton_decimal', () => {
    cy.get('.ElumCf').within(() => {
        cy.root().should('have.class', 'ElumCf')
    }).click(128, 198)
})

// equal sign
Cypress.Commands.add('clickButton_equal', () => {
    cy.get('.ElumCf').within(() => {
        cy.root().should('have.class', 'ElumCf')
    }).click(213, 198)
})

// plus sign
Cypress.Commands.add('clickButton_plus', () => {
    cy.get('.ElumCf').within(() => {
        cy.root().should('have.class', 'ElumCf')
    }).click(300, 198)
})

// minus sign
Cypress.Commands.add('clickButton_minus', () => {
    cy.get('.ElumCf').within(() => {
        cy.root().should('have.class', 'ElumCf')
    }).click(300, 144)
})

// multiply sign
Cypress.Commands.add('clickButton_multiply', () => {
    cy.get('.ElumCf').within(() => {
        cy.root().should('have.class', 'ElumCf')
    }).click(300, 108)
})

// division sign
Cypress.Commands.add('clickButton_divide', () => {
    cy.get('.ElumCf').within(() => {
        cy.root().should('have.class', 'ElumCf')
    }).click(300, 72)
})

// AC/CE 
Cypress.Commands.add('clickButton_AC_CE', () => {
    cy.get('.ElumCf').within(() => {
        cy.root().should('have.class', 'ElumCf')
    }).click(300, 30)
})



// press zero 304 times (useful for typing largest possible values)
Cypress.Commands.add('clickButton_zero_304', () => {
    cy.get('.ElumCf').within(() => {
        cy.root().should('have.class', 'ElumCf')
    }).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198)
})

// press zero 11 times (useful for typing largest possible values)
Cypress.Commands.add('clickButton_zero_11', () => {
    cy.get('.ElumCf').within(() => {
        cy.root().should('have.class', 'ElumCf')
    }).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198).click(43, 198)
})


// only CE expected to contain style="display: none; tag when the AC button is being shown
Cypress.Commands.add('AC_expected', () => {
    cy.get('[style*="none"]').should('contain', 'CE')
})


// only AC tag expected to contain style="display: none; tag when the CE button is being shown
Cypress.Commands.add('CE_expected', () => {
    cy.get('[style*="none"]').should('contain', 'AC')
})


// check answer
Cypress.Commands.add('check_answer', (ans) => {
    cy.get('.qv3Wpe').within(() => {
        cy.root().should('contain', ans) 
    })
})


// check recent calculation (section above answer)
Cypress.Commands.add('check_history', (history) => {
    cy.get('.vUGUtc').within(() => {
        cy.root().should('contain', history) 
    })
})


// enter number into the calculator
Cypress.Commands.add('type_number', (number) => {

    const number_string = String(number)
    for (let i = 0; i < number_string.length; i++){
        const c = number_string[i]

        if (c == "."){
            cy.clickButton_decimal()
        } else if (c == "0"){
            cy.clickButton_zero()
        } else if (c == "1"){
            cy.clickButton_one()
        } else if (c == "2"){
            cy.clickButton_two()
        } else if (c == "3"){
            cy.clickButton_three()
        } else if (c == "4"){
            cy.clickButton_four()
        } else if (c == "5"){
            cy.clickButton_five()
        } else if (c == "6"){
            cy.clickButton_six()
        } else if (c == "7"){
            cy.clickButton_seven()
        } else if (c == "8"){
            cy.clickButton_eight()
        } else if (c == "9"){
            cy.clickButton_nine()
        } else if (c == "/"){
            cy.clickButton_divide()
        } else if (c == "*"){
            cy.clickButton_multiply()
        } else if (c == "+"){
            cy.clickButton_plus()
        } else if (c == "-"){
            cy.clickButton_minus()
        } else if (c == "="){
            cy.clickButton_equal()
        }
        else {}
    }
})


// determine if answer needs to be formatted to scientific notation or not
// and then check answer
Cypress.Commands.add('reformat_and_check_answer', (ans) => {

    var number_string = String(ans)
    var ans_string = ""

    var negative_flag = false
    if (ans < 0){
        negative_flag = true
        number_string = number_string.substring(1)
    }

    const decimal_position = number_string.indexOf(".")

    if (number_string.length <= 13){
        ans_string = number_string
    }
    else if (decimal_position <= 13 && decimal_position != -1){
        for (let i = 0; i < 13; i++) {

            if (i == 12 && number_string.length > 12){
                var index_to_check = 13
                if (number_string[13] == "."){
                    index_to_check = 14
                }
                if (number_string[index_to_check] >= 5){
                    var rounded_last_digit = parseInt(number_string[12]) + 1
                    if (rounded_last_digit == 10){
                        rounded_last_digit = 0
                        prev_digit_index = i - 1
                        if (prev_digit == "."){
                            prev_digit_index = i - 2
                        }
                        var prev_digit = number_string[prev_digit_index]
                        var prev_digit_int = parseInt(prev_digit) + 1

                        ans_string[prev_digit_index] = prev_digit_int
                    }
                    ans_string = ans_string + String(rounded_last_digit)
                }
                else {
                    ans_string = ans_string + number_string[i]
                }
            }
            else{
                ans_string = ans_string + number_string[i]
            }
        }
    }
    // else use scientific notation
    else {
        if (negative_flag){
            number_string = number_string.substring(1)
        }
        var exponent_degree = number_string.length - 1
        var len_of_ans_string_before_exponent = 0
    
        if (exponent_degree <= 9){
            len_of_ans_string_before_exponent = 9
        } 
        else if (exponent_degree > 99){
            len_of_ans_string_before_exponent = 7
        } 
        else {
            len_of_ans_string_before_exponent = 8
        }
        
    
        for (let i = 0; i < len_of_ans_string_before_exponent; i++){
            if (i == 1){
                ans_string = ans_string + "." + number_string[i]
            } 
            else if (i == len_of_ans_string_before_exponent - 1){
                var current_digit = parseInt(number_string[i])
                var next_digit = parseInt(number_string[i+1])
                if (next_digit >= 5){
                    current_digit = current_digit + 1
                    if (current_digit == 10){
                        current_digit = 0
                        prev_digit_index = i - 1
                        if (prev_digit == "."){
                            prev_digit_index = i - 2
                        }
                        var prev_digit = number_string[prev_digit_index]
                        var prev_digit_int = parseInt(prev_digit) + 1

                        ans_string[prev_digit_index] = prev_digit_int
                    }
                }
                ans_string = ans_string + String(current_digit)
            }
            else {
                ans_string = ans_string + number_string[i]
            }
        }
        if (ans_string[-1] == "0"){
            ans_string = ans_string.substring(0, ans_string.length -2)
        }
        ans_string = ans_string + "e+" + String(exponent_degree)
        
    }
    if (negative_flag){
        ans_string = "-" + ans_string
    }
    //remove trailing zeros after decimal point
    while (ans_string.includes(".") && ans_string[ans_string.length - 1] == "0"){
        ans_string = ans_string.substring(0, ans_string.length - 1)
    }
    cy.check_answer(ans_string)
})


// need to check if the float already contains scientific notation
Cypress.Commands.add('handle_float_and_check_answer', (ans) => {
    var ans_string = String(ans)
    var negative_flag = false

    if (ans_string[0] == "-"){
        negative_flag = true
        ans_string = ans_string.substring(1)
    }

    if (ans_string.includes("e") && ans_string.length > 13){
        var exponent_digits = ans.length - ans_string.indexOf("+")
        var digits_to_keep = 13 - exponent_digits
    
        var truncated_ans_string = ""
        for (let i = 0; i < digits_to_keep; i++){
            truncated_ans_string = truncated_ans_string + ans_string[i]
        }

        truncated_ans_string = truncated_ans_string + ans_string.substring(ans_string.indexOf("e"))
        
        if (negative_flag){
            truncated_ans_string = "-" + truncated_ans_string
        }
        //remove trailing zeros after decimal point
        while (truncated_ans_string.includes(".") && truncated_ans_string[truncated_ans_string.length - 1] == "0"){
            truncated_ans_string = truncated_ans_string.substring(0, truncated_ans_string.length - 1)
        }
        cy.check_answer(truncated_ans_string)
    }
    else {
        cy.reformat_and_check_answer(ans)
    }
})