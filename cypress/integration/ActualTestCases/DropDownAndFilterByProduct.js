/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
import Tc_064 from "../PageObject/TC_64";
import Tc_059 from "../PageObject/TC_59";

describe("Tc_064", function() {
    const tc = new Tc_064();
    let sc=new Tc_059();
    it('should validate dropdown and filter by product', () => {
        tc.visit();
        tc.selectDropdownOption();
        // add assertions to validate the dropdown selection
        sc.screenShot();
        // tc.filterByProduct('Oversized T-Shirts');
        // add assertions to validate the filtered products
      });
      
      // it("should take screenshort",()=>{
          
      // })
      
})