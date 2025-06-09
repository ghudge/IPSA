import { When,Then } from "@wdio/cucumber-framework";
import profilePage from "../pageobjects/profilePage";
import loginPage from "../pageobjects/loginPage";


When(/^I click on application website$/, async() => {
    await profilePage.appWebsite()
    browser.pause(2000)
});

Then(/^I goto home page of app$/, async() => {
	await browser.back()
    await browser.pause(2000)
});



When(/^I click on profile icon$/, async() => {
	await profilePage.clickProfileIcon()
    await browser.pause(2000)
});

Then(/^I click on Mi perfil$/, async() => {
	await profilePage.clickMyProfile()
    await browser.pause()
});

Then(/^I close popup$/, async() => {
	await profilePage.clickCloseSheet()
    await browser.pause(2000)
});

Then(/^I click on Documentos importantes$/, async() => {
	await profilePage.clickDocumentosImportantes()
    await browser.pause(2000)
});


Then(/^I click on 2 times back arrow$/, async() => {
	await loginPage.clickBackArrow()
    await browser.pause(1000)
    await loginPage.clickBackArrow()
    await browser.pause(2000)
});

Then(/^I click on Desvincular dispositivo$/, async() => {
	await profilePage.clickDesvincularDispositivo()
    await browser.pause(2000)
});

Then(/^I click on Configuraciones$/, async() => {
	await profilePage.clickConfiguraciones()
    await browser.pause(2000)
});

Then(/^I click on Cambiar mi contraseña$/, async() => {
	await profilePage.clickCambiarmiContraseña()
    await browser.pause(2000)
});


Then(/^I click on Salir button$/, async() => {
	await profilePage.clickSalir()
    await browser.pause(2000)
});

Then(/^I click on Cerrar sesión$/, async() => {
	await profilePage.clickCerrarSesión()
    await browser.pause(2000)
});

Then(/^I click on Desvincular usuario option$/, async() => {
	await profilePage.clickDesvincularUsuario()
    await browser.pause(2000)
});

Then(/^I click on Desvincular button$/, async() => {
	await profilePage.clickDesvincular()
    await browser.pause(2000)
});




