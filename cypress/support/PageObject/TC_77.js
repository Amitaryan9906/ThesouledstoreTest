/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

class Tc_077{

    verifyProductImage(){
      cy.xpath("(//div[@class='listhoverimg'])[1]").screenshot();  
    }
}
export default Tc_077;