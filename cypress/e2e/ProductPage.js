import Tc_061 from "../support/PageObject/TC_61";
import Tc_059 from "../support/PageObject/TC_59";
describe('Test Case 061', () => {
    const TC =new Tc_061();
    const T = new Tc_059();
  beforeEach(() => {
    cy.visit('https://www.thesouledstore.com/men/t-shirts'); // Visit the page you want to test
   cy.wait(5000);
});

  it('should verify the product details', () => {
    TC.verifyProductDetails();
  });


});
