@FirstFeature
Feature: Feature File 1
    Background:
        Given User is on the loginPage

    @Scenario-1
    Scenario: Validate loginPage Web Elements
        Then User should Validate the loginPage Web Elements

    @Scenario-2
    Scenario: Login with Valid Credentials
        When User enters "Admin" and "admin123" Clicks on LogIn Button
        Then User should see the dashboard

    @Scenario-3
    Scenario: Login with Invalid Credentials
        When User enters "Nothing" and "Nothing" Clicks on LogIn Button
        Then User should see the invalid credentials message

    @Scenario-4
    Scenario: Forgot Password
        When User click on Forgot Password
        Then User should see the Forgot Password Page Web Elements

    @Scenario-5
    Scenario Outline: Reset Password
        When User click on Forgot Password
        And Enter "<username>" and click on reset password Button
        Then User should get reset password link message
        Examples:
            | username |
            | Admin    |
            | Nothing  |
            | Admin123 |

    @Scenario-6
    Scenario: Validate the Dashboard
        When User enters "Admin" and "admin123" Clicks on LogIn Button
        Then User should Validate the Dashboard Web Elements

    @Scenario-7
    Scenario: Validate Profile Dropdown
        When User enters "Admin" and "admin123" Clicks on LogIn Button
        And User click on Profile Dropdown
        Then User should Validate the Profile Dropdown Web Elements

    @Scenario-8
    Scenario Outline: Validate Profile Dropdown Elements
        When User enters "Admin" and "admin123" Clicks on LogIn Button
        And User click on Profile Dropdown
        And User click on Dropdown element "<element>"
        Then User should Validate "<element>"
        Examples:
            | element         |
            | About           |
            | Support         |
            | Change Password |

    @Scenario-9
    Scenario: Validate leave Page Web Elements
        When User enters "Admin" and "admin123" Clicks on LogIn Button
        And User click on Leave Button
        Then User should Validate the leave Page Web Elements

    @Scenario-10
    Scenario: Validate User Logout
        When User enters "Admin" and "admin123" Clicks on LogIn Button
        And User click on Profile Dropdown
        And User click on Logout Button
        Then User should Validate the logout Page Web Elements