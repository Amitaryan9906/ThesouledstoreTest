
/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

class Tc_080{

    verifyPrice(){
      cy.get("div[id='productlist-218501'] a div span[class='offer fsemibold']").screenshot();  
    }
}
export default  Tc_080;