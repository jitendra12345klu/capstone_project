@loginPageFeature
Feature: Feature File 1
    Background:
        Given User is on the loginPage

    @loginPageWebElements  @testcase1
    Scenario: Validate loginPage Web Elements
        Then User should Validate the loginPage Web Elements excluding footer links

    @footerLinks  @testcase2
    Scenario: Validate the footer links
        Then User clicks on footer links checks redirects to respective footer links page

    @loginSuccess  @testcase3
    Scenario: Login with Valid Credentials
        When User enters "Admin" and "admin123" Clicks on LogIn Button
        Then User should see the dashboard

    @loginFailure  @testcase4
    Scenario: Login with Invalid Credentials
        When User enters "Nothing" and "Nothing" Clicks on LogIn Button
        Then User should see the invalid credentials message

    @forgetPassword  @testcase5
    Scenario: Forgot Password
        When User click on Forgot Password
        Then User should see the Forgot Password Page Web Elements
        And Enter "Admin" and click on reset password Button
        Then User should get reset password link sent message















