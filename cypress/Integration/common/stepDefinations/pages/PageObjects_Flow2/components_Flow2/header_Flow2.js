export class header_flow2{
    
    static header_Logo = '.brand'
    static header_SearchKeyword = '.search-keyword'
    static header_SearchButton = '.search-button'
    static header_TopDeals = '[href="#/offers"]'
    static header_BlinkingText = '.blinkingText'
    static header_CartIcon = '.cart-icon > img'
    static header_ItemsNumber = 'tbody > :nth-child(1) > :nth-child(3)'
    static header_PriceTotal = ':nth-child(2) > :nth-child(3) > strong'
    static header_ProceedToCheckout = 'PROCEED TO CHECKOUT'
        
    static Enter_SearchKeyword(value){
        cy.get(this.header_SearchKeyword).type(value)
    }
    static Click_On_SearchButton(){
        cy.get(this.header_SearchButton).click()
    }
    static Click_On_Cart(){
        cy.get(this.header_CartIcon).click()
    }
    static Click_On_ProceedToCheckout(){
        cy.contains(this.header_ProceedToCheckout).click()
    }
    static ItemNumber(){
        cy.get(this.header_ItemsNumber)
    }
    static Click_On_TopDeals(){
        cy.get(this.header_TopDeals).click()
    }
    static PriceTotal(){
        cy.get(this.header_PriceTotal)
    }

}