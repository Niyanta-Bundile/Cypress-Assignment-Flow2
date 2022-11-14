export class LaunchUrl{
        static url= 'https://rahulshettyacademy.com/seleniumPractise'

        static Launch_url(){
            cy.visit (this.url)
        }

}