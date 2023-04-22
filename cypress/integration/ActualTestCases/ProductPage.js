import Tc_061 from "../PageObject/TC_61";

describe('Test Case 061', () => {
    const TC =new Tc_061();
  beforeEach(() => {
    cy.visit('https://www.thesouledstore.com/men/t-shirts'); // Visit the page you want to test
   cy.wait(5000);
});

  it('should verify the product details', () => {
    TC.verifyProductDetails();
  });


});
