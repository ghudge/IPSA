@regression
Feature: As a user,I goto Dashboard

  Background: Open IPSA app and goto login page
  # Scenario: Open IPSA app and goto login page
    Given I am navigating to login page of IPSA
    Then I click on Do it later button
    When I click on Inisior sesion
    Then I enter user "00300583317"
    Then I enter password "Abcd@1234"
    Then I click on iniciar sesion button
    When I click on Ahora no button
    Then I am on home page of app

  @Inicio_tab @regression
  Scenario: I goto Inicio tab and I click on Inicio tab and accessing brokerage account
    When I click on Inicio tab
    Then I click on view more option
    Then I click on Card brokerage account
    Then I am on Información de la cuenta page
    Then I click on tooltip of brokerage account
    Then I swipe to each account and click on tooltip of that page
    Then I click on back arrow
    Then I am on home page of app

  @Inicio_tab @regression
  Scenario: I goto Inicio tab and I can access all investment of my portfolio "<portfolio>"
    Then I click on investment "<portfolio>" of my portfolio
    Then I click on tooltip of my portfolio
    Then I click on back arrow
    Then I am on home page of app

    Examples:
      | portfolio                                |
      | NOTAS DEL BANCO CENTRAL VENC  03 10 2025 |

  @Inicio_tab @regression
  Scenario: As a user, I goto Inicio tab and I want to invest in "<type>"
    When I click on Quiero invertir en mi… option
    Then I want to invest in "<type>"
    Then I click on Quiero invertir button
    Then I enter Comentario "<comment>"
    Then I click Enviar button
    Then I click on Finalizar of Listo page
    Then I am on home page of app

    Examples:
      | type           | comment                      |
      | Comprar bienes | I am choosing Comprar bienes |
      # | Diversificar patrimonio | I am choosing Diversificar patrimonio |
      # | Pago de estudios        | I am choosing Pago de estudios        |
      # | Proyecto de vida        | I am choosing Proyecto de vida        |
      # | Viajar                  | I am choosing Viajar                  |

  @Invertir_tab @regression
  Scenario: I click on Invertir tab then click on Como invertir from Invertir tab and add comment "<comment>"
    When I click on Invertir tab
    Then I click on Como invertir option
    Then I click on 3 times Continuar
    When I click on Quiero invertir button
    Then I enter Comentario "<comment>"
    Then I click Enviar button
    Then I click on Finalizar of Listo page
    Then I am on home page of app

    Examples:
      | comment |
      | sample  |
      # | demo    |

  @Invertir_tab @regression
  Scenario: I click on Invertir tab then click on Calculadora Popular then calculate Monto a invertir "<currency>" and "<amount>" and "<days>"
    When I click on Invertir tab
    Then I click on Calculadora Popular
    Then I select currency "<currency>"
    Then I enter amount "<amount>" in Monto a invertir field
    Then I enter days "<days>" in Cantidad de días field
    Then I enter continuar button
    Then I scroll up and down Calculadora Mutuos Popular page
    Then I click on tool tip of Calculadora Mutuos Popular page
    Then I click on Finalizar button
    Then I am on home page of app

    Examples:
      | currency | amount | days |
      | USD      |  60000 |  200 |
      # | DOP      |   6000 |  200 |
      # | DOP      | 750000 |    1 |

  @Servicios_tab @regression
  Scenario: I can open "<type>" brokerage account in Servicios tab
    When I click on Servicios tab
    Then I click on Abrir cuenta de corretaje option
    Then I select account type "<type>"
    Then I enter Comentario "<comment>"
    Then I click Enviar button
    Then I click on Finalizar of Listo page
    Then I am on home page of app

    Examples:
      | type     | comment |
      | Personal | sample  |
      # | Empresarial o institucional | demo    |

  @Especialista_tab @regression
  Scenario: I click on Especialista tab email option "<type>"
    When I click on Especialista tab
    Then I click on contact with email option
    Then I am on home page of app
    When I click on Especialista tab
    Then I click on Comunícate con tu especialista option
    Then I select Topic of interest in especialista "<type>"
    Then I enter Comentario "Buen"
    Then I click Enviar button
    Then I click on Finalizar of Listo page
    Then I am on home page of app

    Examples:
      | type            |
      | Quiero invertir |
      # | Abrir cuenta de corretaje    |
      # | Solicitar cita               |
      # | Solicitar traspaso de título |
