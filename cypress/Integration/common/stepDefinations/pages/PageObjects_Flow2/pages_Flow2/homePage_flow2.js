export class homePage {

    static homePage_AddToCart = '.product-action > button'
    static homePage_productImage= '.product-image > img'
    static homePage_productName= '.product > .product-name'
    static homePage_productPrice= '.products > .product > .product-price'
    static homePage_productQuantity= '.quantity'

    static Click_On_AddToCart(){
        cy.get(this.homePage_AddToCart).click()
    }
}