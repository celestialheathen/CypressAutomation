/// <reference types="Cypress" />

describe('Checkout exercises', function() {
  it('Adds item to cart', function() {
    
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")

    // Checkboxes
    // cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
    // cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

    // cy.get('input[type="checkbox"]').check(['option2', 'option3'])

    // Dropdown
    // cy.get('select').select('option2').should('have.value', 'option2')
    cy.get('input#autocomplete').type('china')

  })
})