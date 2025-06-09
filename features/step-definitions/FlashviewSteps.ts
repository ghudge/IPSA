import { Given, When, Then } from "@wdio/cucumber-framework";
import loginPage from "../pageobjects/loginPage";
import flashViewPage from "../pageobjects/flashViewPage";


Given(/^I open IPSA app$/, async () => {
    await loginPage.salter.waitForDisplayed({ timeout: 10000 })
});

Then(/^I swipe left 3 times$/, async () => {
    if (await loginPage.salter.isDisplayed()) {
        await loginPage.swipeLeft()
    }
});

Then(/^I click on continuar button$/, async () => {
    await loginPage.clickContinuar()
});

Then(/^I click on Registrate button$/, async () => {
    await loginPage.clickRegistrate()
});

When(/^I click on do it later button$/, async () => {
    await loginPage.doItLater()
});

Given(/^I am navigating to login page of IPSA$/, async () => {
    // await loginPage.salter.waitForDisplayed({ timeout: 10000 })
    // await expect($('//android.widget.TextView[@text="¡Consulta tus inversiones en todo momento!"]')).toBeDisplayed()
    // if (await loginPage.salter.isDisplayed()) {
    //     await loginPage.swipeLeft()
    // }
    // await loginPage.clickContinuar()

    if (await loginPage.registrate.isDisplayed()) {
        await loginPage.clickRegistrate()
    }
});

Then(/^I click on Do it later button$/, async () => {
    await loginPage.doItLater()
    await browser.pause(2000)
    await loginPage.loginLogo()
});

Then(/^I am on login page$/, async () => {
    await loginPage.verifyLoginPage()
});


Then(/^I click on Comunícate con nosotros tab$/, async () => {
    await flashViewPage.clickComunícateConNosotros()
});

Then(/^I click on Enviar correo tab$/, async () => {
    await flashViewPage.clickEnviarCorreo()
    await browser.pause(4000)
    await browser.back()
});

Then(/^I click on Solicitar cita tab$/, async () => {
    await flashViewPage.clickSolicitarCita()
    await browser.pause(5000)
    await loginPage.clickBackArrow()
});


Then(/^I click on Seguirnos en Instagram tab$/, async () => {
    await flashViewPage.clickSeguirnosEnInstagram()
    await browser.pause(2000)
    await browser.back()
    await browser.pause(2000)
});

Then(/^I click on Tasas de rendimiento tab$/, async () => {
    await loginPage.clickTasasDeRendimiento()
    // await browser.pause(3000)
    // await loginPage.clickBackArrow()
});

Then(/^I scroll up and down$/, async () => {
    await flashViewPage.scrollUpDown()
});

Then(/^I click on tooltip option$/, async () => {
    await flashViewPage.clickTooltip()
});

Then(/^I click on DOP tab$/, async () => {
    await flashViewPage.clickDOP()
});

Then(/^I click on USD tab$/, async () => {
    await flashViewPage.clickUSD()
    await browser.pause(2000)
});


Then(/^I click on Question mark$/, async () => {
    await flashViewPage.swipeInfo()

});

Then(/^I goto login page IPSA$/, async () => {
    await $('//android.view.View[@content-desc="Close sheet"]').click()
    await loginPage.clickBackArrow()
    await loginPage.loginLogo()

});




Then(/^I click on Calculadora Popular tab$/, async () => {
    await loginPage.clickCalculadoraPopular()
    await browser.pause(3000)
    // await loginPage.clickBackArrow()
    // await browser.pause(2000)

});


Then(/^I select currency "([^"]*)"$/, async (currency) => {
    await console.log(currency)
    await flashViewPage.selectCurrency(currency)
    await browser.pause(2000)
});

Then(/^I enter amount "([^"]*)" in Monto a invertir field$/, async (amount) => {
    await flashViewPage.enterMontoaInvertir(amount)
    await browser.pause(2000)
});

Then(/^I enter days "([^"]*)" in Cantidad de días field$/, async (days) => {
    await flashViewPage.enterCantidadDeDías(days)
    await browser.pause(2000)
});


Then(/^I enter continuar button$/, async () => {
    await flashViewPage.clickContinuar()
    await browser.pause(2000)
});

Then(/^I scroll up and down Calculadora Mutuos Popular page$/, async () => {
    await flashViewPage.scrollCalculadoraMutuosPopular()
});

Then(/^I click on tool tip of Calculadora Mutuos Popular page$/, async () => {
    await flashViewPage.clickTooltipC()
});

Then(/^I click on Finalizar button$/, async () => {
    await flashViewPage.clickFinalizarButton()
});



Then(/^I am on "([^"]*)" page$/, async (data) => {
    await expect($('//android.widget.TextView[@text="' + data + '"]')).toBeDisplayed()
});

When(/^I click on cuenta de corretaje link$/, async () => {
    await $('//android.widget.TextView[contains(@text,"cuenta de corretaje")]').click()
});


When(/^I click on Preguntas frecuentes button$/, async () => {
    await $('//android.widget.TextView[@text="Preguntas frecuentes"]').click()
});

Then(/^I am on "([^"]*)" website$/, async (data) => {
    await expect($('//android.view.View[@text="' + data + '"]')).toBeDisplayed()
    await browser.swipe({
        direction: 'up', scrollableElement: $('//android.view.View[@text="' + data + '"]')
    })
    await browser.pressKeyCode(4)
});










