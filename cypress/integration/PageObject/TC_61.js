/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

class Tc_061 {
   //*[@class='col-lg-9 col-md-8 col-12 pro-list']/div/div

   verifyProductDetails(){
    cy.get("//*[@class='col-lg-9 col-md-8 col-12 pro-list']/div/div").first().click();
    cy.url().should('include', '/product/');
    // handle any alert popups that may appear
    // cy.on('window:alert', (text) => {
    //   expect(text).to.equal('This website would like to send you awesome updates and offers!');
    // });
   }
}

export default Tc_061;
