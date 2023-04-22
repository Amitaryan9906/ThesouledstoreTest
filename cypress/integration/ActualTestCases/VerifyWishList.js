import Tc_082 from "../PageObject/TC_82";
import Tc_059 from "../PageObject/TC_59";
describe("TC_082", function () {
    let tc=new Tc_082();
    let sc=new Tc_059();
    it("should take screenshort",()=>{
        sc.screenShot();
    })
    it('wishlist',()=>{
      tc.verifyWishList();
    })
})