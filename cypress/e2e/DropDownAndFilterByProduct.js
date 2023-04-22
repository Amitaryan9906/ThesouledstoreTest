/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
import Tc_059 from "../support/PageObject/TC_59";
import Tc_064 from "../support/PageObject/TC_64";

describe("Tc_064", function() {
    const t = new Tc_064();
    let tc=new Tc_059();
    it('should validate dropdown and filter by product', () => {
        tc.visit();
        t.selectDropdownOption();
        // add assertions to validate the dropdown selection
       
        // tc.filterByProduct('Oversized T-Shirts');
        // add assertions to validate the filtered products
      });
      
      // it("should take screenshort",()=>{
          
      // })
      
})