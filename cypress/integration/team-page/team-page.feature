Feature: team page

  Scenario: use can view team stats
    Given user loads team page
    Then team stats should display
      | team name     | New Jersey Devils |
      | conference    | Eastern           |
      | division      | MassMutual East   |
      | games played  | 56                |
      | wins          | 19                |
      | losses        | 30                |
      | ot            | 7                 |
      | points        | 45                |
      | goals         | 22                |
      | percentage    | 14.2              |
      | goals against | 43                |
      | opportunities | 155               |

  Scenario: use can search team roster
    Given user loads team page
    Then there should be 27 players
    When the user searches for "jac" player
    Then there should be 2 players

  Scenario: use can view player profile
    Given user loads team page
    When the user searches for "subban" player
    When user clicks view player info
    Then player stats should display
      | jersey and name | #76 P.K. Subban   |
      | team name       | New Jersey Devils |
      | age             | 31                |
      | position        | Defenseman        |
      | handed          | R                 |
      | nationality     | CAN               |
    When use closes player stats
    When the user searches for "jacobs" player
    When user clicks view player info
    Then player stats should display
      | jersey and name | #40 Josh Jacobs   |
      | rookie          | Rookie            |
      | team name       | New Jersey Devils |
      | age             | 25                |
      | position        | Defenseman        |
      | handed          | R                 |
      | nationality     | USA               |
