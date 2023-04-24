
/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

class Tc_069{

    verifyPrice(){
      cy.xpath("(//a[normalize-space()='Prices'])[1]").screenshot();  
    }
}
export default  Tc_069;