/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

class Tc_081{

    verifyWishListIcon(){
      cy.xpath("(//div[@class='listhoverimg'])[1]").screenshot();  
    }
}
export default Tc_081;