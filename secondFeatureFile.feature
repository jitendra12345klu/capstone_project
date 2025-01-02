@SecondFeatureFile
Feature: Feature File 2
    Background:
        Given User is on the loginPage
        When User enters "Admin" and "admin123" Clicks on LogIn Button
        And User click on Leave Button
    @Scenario-001
    Scenario: Apply Leave
        And User click on Apply Leave Button
        And User enters the leave details
        Then User should see the leave applied successfully message

    @Scenario-002
    Scenario: Validate the Leave History
        And User click on Leave List Button
        Then User should Validate the Leave History Page Web Elements

    @Scenario-003
    Scenario: Write a comment
        And User click on My Leave Button
        And User click on Write a comment Button
        And User enters the comment
        Then User should see the comment added successfully message

    @Scenario-004
    Scenario: Cancel Leave
        When User enters "Admin" and "admin123" Clicks on LogIn Button
        And User click on Leave Button
        And User click on My Leave Button
        And User click on Cancel Leave Button
        Then User should see the leave cancelled successfully message
