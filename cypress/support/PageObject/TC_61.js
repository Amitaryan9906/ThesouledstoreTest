/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

class Tc_061 {
   //*[@class='col-lg-9 col-md-8 col-12 pro-list']/div/div

   verifyProductDetails(){
     cy.visit('https://www.thesouledstore.com/men/t-shirts')

    cy.xpath("(//div[@class='col-lg-3 col-md-6 col-6'])[1]").click();
    cy.url().should('include', '/product/');
  
   }
}

export default Tc_061;
