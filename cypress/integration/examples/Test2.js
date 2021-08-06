/// <reference types="Cypress" />

describe('My first test', function() {
  it('Does not do much', function() {
    
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

    // cy.get('.brand')
    // .then( (logoElement) => {
    //   cy.log(logoElement.text())
    // })

    cy.get('.brand').should('have.text', 'GREENKART')

  })
})