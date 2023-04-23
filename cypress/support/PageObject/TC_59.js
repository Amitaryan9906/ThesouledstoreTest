/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
class Tc_059 {
    visit() {
      cy.visit('https://www.thesouledstore.com/men');
      cy.wait(5000);
      cy.get("#moe-dontallow_button").click();
      cy.xpath("(//img[@id='vests'])[1]").click();
      cy.screenshot();
    }
  
   
      
  }
  
  export default Tc_059;
  