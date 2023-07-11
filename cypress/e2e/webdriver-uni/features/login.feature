Feature: WebdriverUniveristy Login Page

Scenario: Login using valid credentials
Given I access the WebdriverUniversity Login Portal page
When I enter a username webdriver
And I enter valid password webdriver123
And I click on login button
Then I should be present validation message vlidation succeeded
