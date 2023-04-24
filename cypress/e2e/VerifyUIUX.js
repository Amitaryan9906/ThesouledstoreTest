import Tc_077 from "../support/PageObject/TC_77";
import Tc_069 from "../support/PageObject/TC_69";
import Tc_081 from "../support/PageObject/TC_81";
import Tc_083 from "../support/PageObject/TC_83";
import Tc_079 from "../support/PageObject/TC_79";
import Tc_080 from "../support/PageObject/TC_80";


const t69 = new Tc_069();
const t77 = new Tc_077();
const t79 = new Tc_079();
const t80 = new Tc_080();
const t81 = new Tc_081();
const t83 = new Tc_083();
describe('Verify/Screenshot all UI/UX ',()=>{
    it('should take screenshots of perticuler pages',()=>{
      cy.visit("https://www.thesouledstore.com/men/t-shirts");
      cy.wait(4000);
      t69.verifyPrice();
      t77.verifyProductImage();
      t79.verifyProductTitle();
      t80.verifyPrice();
      t81.verifyWishListIcon();
      t83.verifyWishListIconOnNavbar();

    })
})