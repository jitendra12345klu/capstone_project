@SecondFeatureFile
Feature: Feature File 2
    Background:
        Given User is on the loginPage
        When User enters "Admin" and "admin123" Clicks on LogIn Button
        And User click on Leave Button
    @Scenario-001
    Scenario Outline: Apply Valid Leave
        And User click on Apply Leave Button
        And User enters the leave details "<fromDate>", "<fromDate>", "<comment>"
        Then User should see the leave applied successfully message
        Examples:
            | fromDate   | toDate     | comment                |
            | 2024-09-01 | 2024-09-01 | report |
    # | 2021-09-03 | 2021-09-04 | Casual Leave |

    @Scenario-002
    Scenario: Apply inValid Leave
        And User click on Apply Leave Button
        And User enters the leave details "2021-09-03", "2021-09-04", "ts ap"
        Then User should see the leave applied unsuccessfully message

    @Scenario-003
    Scenario: Validate the My Leave Page
        And User click on My List Button
        Then User should Validate the My Leave Page

    @Scenario-004
    Scenario: Fetch Table data From My Leave Page
        And User click on My Leave Button
        Then User fetch data from Table and Console it

    @Scenario-005
    Scenario Outline: Write a comment
        And User click on My Leave Button
        And User click on drop down Button in My Leave of "<comment1>"
        And User click on Write a comment Button
        And User enters the comment "<comment2>" and click on Submit Button
        Then User should see the comment added successfully message
        Examples:
            | comment1               | comment2       |
            | report | pilla ra |

    @Scenario-006
    Scenario Outline: Cancel Leave
        And User click on My Leave Button
        And User click on Cancel Leave Button of "<comment>"
        Then User should see the leave cancelled successfully message
        Examples:
            | comment        |
            | pilla ra |
