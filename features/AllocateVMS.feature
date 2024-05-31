Feature: Allocate VMS

  Scenario: Host sends invitation via email
    When host arrive at Allocate app home screen
    Then host clicks on Invite tab
    And host clicks Create new invite for the desired passport
    And host enters invitation details
    Then host adds visitors via email
    Then host clicks send invite button
    And verify invitation is successfuly sent
    Then verify invite shown under 'Upcoming invites'
