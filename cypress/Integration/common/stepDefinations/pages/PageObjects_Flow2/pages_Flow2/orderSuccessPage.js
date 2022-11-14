export class orderSuccessPage{

    static orderSuccessPage_alert = '[style="color:green;font-size:25px"]'

    static Order_alert(){
        cy.get(this.orderSuccessPage_alert)
    }

}