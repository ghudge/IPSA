import { When, Then } from "@wdio/cucumber-framework";
import dashboardPage from "../pageobjects/dashboardPage";
// import loginPage from "../pageobjects/loginPage";



When(/^I click on Inicio tab$/, async () => {
    await dashboardPage.clickInicio()
    await browser.pause(2000)
});

Then(/^I click on view more option$/, async () => {
    await dashboardPage.clickViewMore()
    await browser.pause(2000)
});


Then(/^I click on Card brokerage account$/, async () => {
    await dashboardPage.clickBrokerageCard()
    await browser.pause(2000)
});

Then(/^I am on Información de la cuenta page$/, async () => {
    await dashboardPage.verifyInformacióndelacuentaPage()
});

Then(/^I click on tooltip of brokerage account$/, async () => {
    await dashboardPage.clickBrokerageAccountTooltip()
    await browser.pause(2000)
});

Then(/^I swipe to each account and click on tooltip of that page$/, async () => {
    await dashboardPage.swipeBrokerageAccounts()
    await browser.pause(2000)
});


Then(/^I click on investment "([^"]*)" of my portfolio$/, async (investment) => {
    await dashboardPage.accessPortfolio(investment)
});


Then(/^I click on tooltip of my portfolio$/, async () => {
    await dashboardPage.clickPortfolipTooltip()
    await browser.pause(2000)
});


When(/^I click on Invertir tab$/, async () => {
    await dashboardPage.clickInvertir()
    await browser.pause(2000)
});


Then(/^I click on Como invertir option$/, async () => {
    await dashboardPage.clickComoInvertir()
    await browser.pause(2000)
});


Then(/^I click on 3 times Continuar$/, async () => {
    await dashboardPage.clickContinuar()
    await browser.pause(2000)
    await dashboardPage.clickContinuar()
    await browser.pause(2000)
    await dashboardPage.clickContinuar()
    await browser.pause(2000)
});


When(/^I click on Quiero invertir en mi… option$/, async () => {
    await dashboardPage.clickQuieroInvertirenmi()
    await browser.pause(2000)
});

Then(/^I want to invest in "([^"]*)"$/, async (type) => {
    await dashboardPage.investIn(type)
    await browser.pause(2000)
});




When(/^I click on Quiero invertir button$/, async () => {
    await dashboardPage.clickQuieroInvertir()
    await browser.pause(3000)
});



Then(/^I enter Comentario "([^"]*)"$/, async (comment) => {
    await dashboardPage.enterComentario(comment)
    await browser.pause(2000)
});

Then(/^I click Enviar button$/, async () => {
    await dashboardPage.clickEnviar()
    await browser.pause(2000)
});

Then(/^I click on Finalizar of Listo page$/, async () => {
    await dashboardPage.clickFinalizar()
    await browser.pause(2000)
});



Then(/^I click on Calculadora Popular$/, async () => {
    await dashboardPage.clickCalculadoraPopular()
});


When(/^I click on Servicios tab$/, async () => {
    await dashboardPage.clickServicios()
    await browser.pause(2000)
});

Then(/^I click on Abrir cuenta de corretaje option$/, async () => {
    await dashboardPage.clickCuentaDeCorretajeOption()
});

Then(/^I select account type "([^"]*)"$/, async (type) => {
    await dashboardPage.accountType(type)
    await browser.pause(2000)
});


When(/^I click on Especialista tab$/, async () => {
    await dashboardPage.clickEspecialista()
});

Then(/^I click on contact with email option$/, async () => {
    let element = dashboardPage.especialistIcon
    const location = await element.getLocation();
    let xcor=location.x+5
    let ycor=location.y + 835
    await browser.pause(2000)
    await dashboardPage.clickEspec(xcor,ycor )
    await browser.pause(2000)
    await browser.back()
});

Then(/^I click on Comunícate con tu especialista option$/, async () => {
    let element = dashboardPage.especialistIcon
    const location = await element.getLocation();
    let xcor=location.x + 210
    let ycor=location.y + 835
    await browser.pause(2000)
    await dashboardPage.clickEspec(xcor, ycor)
    await browser.pause(2000)
});


Then(/^I select Topic of interest in especialista "([^"]*)"$/, async(type) => {
	await dashboardPage.selectTopicIEspecialista(type)
});

Then(/^I swipe up ¿Cuáles instrumentos son para ti option$/, async() => {
	await dashboardPage.openInstrumentosTab()
});

Then(/^I select instrumentos "([^"]*)"$/, async(typeI) => {
	await dashboardPage.selectInstrumentostype(typeI)
});

Then(/^I sub type if instrumentos "([^"]*)"$/, async(sType) => {
	await dashboardPage.selectSubtype(sType)
});

Then(/^I select Topic of interest "([^"]*)"$/, async(typeI) => {
	await dashboardPage.selectTopicInterest(typeI)
});

Then(/^I am on "([^"]*)" Page$/, async(data) => {
	await expect($('//android.widget.TextView[@text="' + data + '"]')).toBeDisplayed()
});


