export class cartPage{

    static cartPage_productImage= "cy.get('.product-image')"
    static cartPage_productName= "cy.get('.product-name')"
    static cartPage_productQuantity= "cy.get('.quantity')"
    static cartPage_placeOrder= ':nth-child(14)'

    static Click_On_PlaceOrder(){
    cy.get(this.cartPage_placeOrder).click()
    }
}