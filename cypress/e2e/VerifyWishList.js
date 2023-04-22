import Tc_082 from "../support/PageObject/TC_82";
import Tc_059 from "../support/PageObject/TC_59";
describe("TC_082", function () {
    let tc=new Tc_082();
    let sc=new Tc_059();
   
    it('wishlist',()=>{
      tc.verifyWishList();
    })
})