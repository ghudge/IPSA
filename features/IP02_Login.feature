@test1
Feature: As a user,I open burger menu and login app

  Background: Open IPSA app and goto login page
    Given I am navigating to login page of IPSA
    Then I click on Do it later button

  # @hamburger_menu @regression
  # Scenario: As a user,I goto humburger menu
  #   Then I click on burger menu
  #   Then I click on Términos y condiciones
  #   Then I scroll upto end of the page
  #   Then I click on back arrow
  #   Then I click on Políticas de privacidad
  #   Then I click on Responsabilidades
  #   Then I scroll up Responsabilidades page
  #   Then I click on back arrow

  @login_IPSA @regression
  Scenario: As a user, I can login with "<stmt>"
    When I click on Inisior sesion
    Then I enter user "<user>"
    Then I enter password "<password>"
    Then I click on iniciar sesion button
    When I click on Ahora no button
    Then I am on Dashboard of IPSA app

    Examples:
      | stmt                            | user        | password     |
      | valid user and password         | 00300583317 | Abcd@1234    |
      # | invalid user and password       | 00303256321 | Abcd@1234    |
      # | valid user and invalid password | 00300583317 | Abcd@1232542 |
      # | blank user and valid password   |             | Abcd@1234    |
      # | valid user and blank password   | 00300583318 |              |


