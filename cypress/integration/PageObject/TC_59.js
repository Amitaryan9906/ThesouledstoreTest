/// <reference types="Cypress" />

class Tc_059 {
    visit() {
      cy.visit('https://www.thesouledstore.com/men');
      cy.wait(5000);
    }
  
    clickCategory() {
      cy.get('#vests').click();
    }
  
    handleWindowPopup() {
        cy.get('.fancybox-close', { timeout: 10000 }).then(($button) => {
          if ($button.is(':visible')) {
            $button.click();
          }
        });
      }
      screenShot() {
        cy.screenshot();
      }
      
  }
  
  export default Tc_059;
  