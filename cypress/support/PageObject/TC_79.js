/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

class Tc_079{

    verifyProductTitle(){
      cy.xpath("(//h5[normalize-space()='TSS Originals: Retro Gamer'])[1]").screenshot();  
    }
}
export default Tc_079;