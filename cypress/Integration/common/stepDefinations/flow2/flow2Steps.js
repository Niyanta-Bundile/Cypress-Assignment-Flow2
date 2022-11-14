///reference types="cypress" />
import { Given, When, And, Then, Before } from "cypress-cucumber-preprocessor/steps";
import {header_flow2} from "../pages/PageObjects_Flow2/components_Flow2/header_Flow2"
import {homePage} from "../pages/PageObjects_Flow2/pages_Flow2/homePage_flow2"
import {cartPage} from "../pages/PageObjects_Flow2/pages_Flow2/cartPage_flow2"
import {addressPage} from "../pages/PageObjects_Flow2/pages_Flow2/addressPage_flow2"
import { expect } from "chai";



Given("I navigate to application", () => {
	cy.visit('/')
    
});

When("I enter product as {string} in search bar", (product_Name) => {
	header_flow2.Enter_SearchKeyword(product_Name)
    cy.wait(5000)
    header_flow2.Click_On_SearchButton()
});

Then("I should able to see product", () => {
	cy.on(homePage.homePage_productName,(text)=>{
		expect(text).to.be.equal('Mushroom - 1 Kg')
	})
})

When("I click on ADD TO CART", () => {
	homePage.Click_On_AddToCart()
});

And("go to cart", () => {
	header_flow2.Click_On_Cart()
    cy.wait(5000)
});

Then("I should able to see product in the cart", () => {
	cy.on(cartPage.cartPage_productName,(text)=>{
		expect(text).to.be.equal('Mushroom - 1 Kg')
	})
});

When("I click on Proceed To Checkout", () => {
	header_flow2.Click_On_ProceedToCheckout()
});

And ("click on Place Order", () => {
	cartPage.Click_On_PlaceOrder()
});

And ("select {string} and  Agree to the Terms & Conditions", (country) => {
	addressPage.Select_Country(country)
    addressPage.Check_Agree()
});

And ("click on Proceed", () => {
	addressPage.Click_On_Proceed()
});

Then("I should able to see alert message", () => {
	cy.on('window:alert', (text)=>{
		expect(text).to.be.equal("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!")
	})
});

