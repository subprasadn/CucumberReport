@FacebookSmokeTest
Feature: Test Facebook smoke scenario

  Scenario Outline: Test login with valid credentials
    Given Open firefox and start application
    When I enter valid "<username>" and valid "<password>"
    Then user should be able to login successfully
    Then Browser should be closed

    Examples: 
      | username    | password |
      | testUser123 | pass123  |
