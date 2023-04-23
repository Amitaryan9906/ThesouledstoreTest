import Tc_082 from "../support/PageObject/TC_82";
describe("TC_082", function () {
    let tc=new Tc_082();
   
    it('wishlist',()=>{
      tc.verifyWishList();
    })
})