Feature: home page

  Scenario: user can view all
    Given user loads home page
    Then there should be 32 teams

  Scenario: user can search teams
    Given user loads home page
    When the user searches for "new" team
    Then there should be 3 teams

  Scenario: user can view teams profile
    Given user loads home page
    When the user clicks New York Rangers
    Then user sees teams profile
