export class addressPage{

    static addressPage_label= 'label'
    static addressPage_SelectCountry= 'select'
    static addressPage_TermsAndConditions= 'a'
    static addressPage_checkAgree= '.chkAgree'
    static addressPage_proceed= 'Proceed'

    static Select_Country(value){
        cy.get(this.addressPage_SelectCountry).select(value)
    }

    static Check_Agree(){
        cy.get(this.addressPage_checkAgree).check()
    }

    static Click_On_Proceed(){
        cy.contains(this.addressPage_proceed).click()
    }
}