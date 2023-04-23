class Tc_082{

    verifyWishList(){
// Check if the wish list/favorites icon is visible
cy.visit('https://www.thesouledstore.com/men/t-shirts');
cy.wait(4000);
// cy.get("#moe-dontallow_button").click();
cy.xpath("(//div[@class='wishlistIcon pl-1 pb-2 pr-1 wishlist'])[1]").should('be.visible');

// Click the wish list/favorites icon
cy.xpath("(//div[@class='wishlistIcon pl-1 pb-2 pr-1 wishlist'])[1]").click();

// Check if the product was added to the wish list/favorites
cy.xpath("(//div[@class='wishlistIcon pl-1 pb-2 pr-1 wishlistActive'])[1]").should('be.visible');
    }
}
export default Tc_082;