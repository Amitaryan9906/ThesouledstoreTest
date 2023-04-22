/// <reference types="Cypress" />
import Tc_059 from "../PageObject/TC_59";

describe("Tc_059", function() {
    const tc_059 = new Tc_059();
    it("should redirect product page and click any category",()=>{ 
        tc_059.visit();
        tc_059.screenShot();
        tc_059.clickCategory();
        
    })
 
    // it("it should handle the window popup",()=>{
    //     tc_059.handleWindowPopup();
    // })
})