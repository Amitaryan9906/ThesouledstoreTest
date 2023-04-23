/// <reference types="Cypress" />

class Tc_064 {
    filterByProduct() {
      cy.visit('https://www.thesouledstore.com/men/t-shirts');
      cy.wait(6000);
      // cy.get("#moe-dontallow_button").click();
      cy.xpath("(//a[normalize-space()='Products'])[1]").click();
      cy.xpath("(//input[@type='checkbox'])[1]").check({force: true});
  }
  }
  
  export default Tc_064;
  