/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
import Tc_059 from "../support/PageObject/TC_59";
import Tc_064 from "../support/PageObject/TC_64";

describe("Tc_064", function() {
    const t = new Tc_064();
  
    it('should validate dropdown and filter by product', () => {
       t.filterByProduct();
      });
     
      
})