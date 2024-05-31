Feature: Allocate App login

  Scenario: User login
    When user launch Allocate App
    Then user click SIGN IN and enter email address and password
    And click SIGN IN button
    Then user disable biometric login
    Then user arrive at Allocate app home screen
