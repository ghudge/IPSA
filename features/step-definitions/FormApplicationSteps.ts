import { When,Then } from "@wdio/cucumber-framework";
import FormApplicationPage from "../pageobjects/FormApplicationPage";

When(/^I am on Regístrate gratis y comienza a invertir page$/, async() => {
	await FormApplicationPage.verifyRegístrate()
});

Then(/^I click on Hazte inversionista button$/, async() => {
	await FormApplicationPage.clickHazteInversionista()
});

Then(/^I am on ¡En Inversiones Popular te leemos! page$/, async() => {
	await FormApplicationPage.verifyInversionesPage()
});

Then(/^I click on Contáctanos button$/, async() => {
	await FormApplicationPage.clickContáctanosBtn()
});

Then(/^I am on Contáctanos Page to fill form$/, async() => {
	await FormApplicationPage.verifyContáctanosPage()
});

Then(/^I enter name "([^"]*)" in Nombre field$/, async(fName) => {
	await FormApplicationPage.enterFName(fName)
});

Then(/^I enter last name "([^"]*)" in Apellido field$/, async(lName) => {
	await FormApplicationPage.enterLName(lName)
});

Then(/^I select Document type "([^"]*)" in  Tipo de documento field$/, async(dType) => {
	await FormApplicationPage.selectDocumentType(dType)
});

Then(/^I enter Document number in "([^"]*)" in Número de documento field$/, async(nDocumento) => {
	await FormApplicationPage.enterNúmerodeDocumento(nDocumento)
});

Then(/^I click on Continuar button$/, async() => {
	await FormApplicationPage.clickContinuarBtn()
});

Then(/^I am on Contacto tab$/, async() => {
	await FormApplicationPage.verifyContactoTab()
});

Then(/^I enter phone number "([^"]*)" in Número de celular field$/, async(number) => {
	await FormApplicationPage.enterPhoneNumber(number)
});

Then(/^I enter email "([^"]*)" in Correo electrónico personal field$/, async(email) => {
	await FormApplicationPage.enterEmail(email)
});

Then(/^I select contacto "([^"]*)" in Forma de contacto field$/, async(form) => {
	await FormApplicationPage.selectContactForm(form)
});

Then(/^I select Topic of interest "([^"]*)" in Tema de interés$/, async(interest) => {
	await FormApplicationPage.selectTopicofInterest(interest)
});

Then(/^I enter comment "([^"]*)" in Comentario field$/, async(comment) => {
	await FormApplicationPage.enterComment(comment)
});

Then(/^I wait for next page$/, async() => {
	await browser.pause(20000)
});
