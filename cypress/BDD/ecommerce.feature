Feature: End to end ecommerce validation

    application Regression

    @RegressionTest
    Scenario: Ecommerce products delivery
        Given I open Ecommerce page
        When I add items to cart
        And Validate the total prices
        Then Select the country submit
        And Verify message

    @SmokeTest
    Scenario: Filling the form to shop
        Given I open Ecommerce page
        When I fill the form details
            | name | gender | email           | password | birth      |
            | Bob  | Male   | email@email.com | P@ssw0rd | 1994-01-14 |
        Then Validate the forms behaviour
            | name |
            | Bob  |
        And Select the Shop Page
