import { When, Then } from "@wdio/cucumber-framework";
import loginPage from "../pageobjects/loginPage";



Then(/^I click on burger menu$/, async () => {
	await loginPage.clickBurgerMenu()
	await browser.pause(2000)
	await await browser.swipe({
		direction:'up',
		// scrollableElement:
	})
});

Then(/^I click on Términos y condiciones$/, async () => {
	await loginPage.clickTérminosYCondiciones()
	await browser.pause(2000)
	await browser
});

Then(/^I scroll upto end of the page$/, async () => {
	await loginPage.scrollTérminosYCondicionesPage()
});

Then(/^I click on back arrow$/, async () => {
	await loginPage.clickBackArrow()
	await browser.pause(2000)
});


Then(/^I click on Políticas de privacidad$/, async () => {
	await loginPage.clickPolíticasDePrivacidad()
	await browser.pause(5000)
	await browser.back()
});


Then(/^I click on Responsabilidades$/, async () => {
	await loginPage.clickResponsabilidades()
	await browser.pause(1000)
});


Then(/^I scroll up Responsabilidades page$/, async () => {
	await loginPage.scrollResponsabilidadesPage()
	await browser.pause(2000)
});

When(/^I click on Inisior sesion$/, async () => {
	await loginPage.clickIniciarSesion()
});


Then(/^I enter user "([^"]*)"$/, async (user) => {
	await loginPage.enterUser(user)
});


Then(/^I enter password "([^"]*)"$/, async (password) => {
	await loginPage.enterPassword(password)
	await browser.pause(2000)
});




Then(/^I click on iniciar sesion button$/, async () => {
	await loginPage.clickIniciarButton()
	await browser.pause(5000)
});

Then(/^I click on Ahora no button$/, async () => {
	await loginPage.clickAhoraNo()
	await browser.pause(5000)
	await loginPage.homeTitle()
});

Then(/^I am on home page of app$/, async () => {
	await loginPage.homeTitle()
});

Then(/^I am on Dashboard of IPSA app$/, async () => {
	await loginPage.verifyDashboard()
});
