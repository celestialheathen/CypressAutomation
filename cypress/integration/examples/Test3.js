/// <reference types="Cypress" />

describe('My first test', function() {
  it('Does not do much', function() {
    
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

    cy.get('.products').find('.product').each( ($el, index, $list) => {
      const productName = $el.find('h4.product-name').text()
      if (productName.includes("Mango")) {
        $el.contains('ADD TO CART').click()   
      }
    })

    // cy.wait(5000)
    // cy.get('.cart-icon > img').click() 
  })


})