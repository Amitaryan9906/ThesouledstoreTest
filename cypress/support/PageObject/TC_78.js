/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

class Tc_078{
 
    verifyProduct(){
         // Visit the product page
  cy.visit('https://www.thesouledstore.com/product/tss-originals-retro-gamer-oversized-tshirts?gte=1');
  cy.wait(5000);
  // Scroll to the product details section
  cy.xpath("(//div[@class='productinfo px-3'])[1]").should('be.visible');
  cy.xpath("(//div[@class='productinfo px-3'])[1]").scrollIntoView();
   
  // Verify the product title
  cy.xpath("(//h1[normalize-space()='TSS Originals: Retro Gamer'])[1]").should('contain.text', 'TSS Originals: Retro Gamer');

  // Verify the product price
  cy.xpath("(//span[@class='fbold'])[1]").should('have.text', '₹ 999');
  // Scroll to normal position


  // verify that the product details section
  cy.xpath("(//a[normalize-space()='Product Details'])[1]").click();
//  cy.get("#collapseOne").screenshot();
cy.screenshot();
  // Verify the product description
  cy.xpath("(//a[normalize-space()='Product Description'])[1]").click();
  cy.screenshot();
  cy.get("div[id='collapseTwo'] span").should('be.visible');

  
    }
}
export default Tc_078;