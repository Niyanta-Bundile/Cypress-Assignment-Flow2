Feature: Purchase veg and fruits from GreenKart
    As a user I should able to purchase veg and fruits from GreenKart

Background: Launch website
    Given I navigate to application

Scenario Outline: purchase Mushrooms
    When I enter product as "<product_Name>" in search bar
    Then I should able to see product
    
    When I click on ADD TO CART
    And go to cart
    Then I should able to see product in the cart

    When I click on Proceed To Checkout
    And click on Place Order
    And select "<country>" and  Agree to the Terms & Conditions
    And click on Proceed
    Then I should able to see alert message

    Examples:
        | product_Name | country |
        | Mushroom  | India |

