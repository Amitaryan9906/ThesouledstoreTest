/// <reference types="Cypress" />

class Tc_064 {
    visit() {
      cy.visit('https://www.thesouledstore.com/men/t-shirts');
      cy.wait(5000);
    }
  
    selectDropdownOption() {
      cy.get('#headingOne').click();
      
    }
  
    filterByProduct(filterText) {
        cy.get("//*[@class='form-control input-sm filter-search'][1]").contains(filterText).click();
        cy.get('#apply_filter').should('have.class', 'checked')
    }
  }
  
  export default Tc_064;
  