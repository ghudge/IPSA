class FalshViewPage {
    get comunícateConN() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[4]/android.view.View[1]') }
    get enviarCorreo() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[1]') }
    get solicitarCita() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]') }
    get seguirnosEnInstagram() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[3]') }
    get scrollableEle() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[5]') }
    get tooltip() { return $('//android.widget.TextView[@text="Para mayor información consulta tasas de rendimiento"]') }
    get dopTab() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[3]') }
    get usdTab() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[4]') }
    get montoaInvertir() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]') }
    get continuar() { return $('//android.widget.TextView[@text="Continuar"]') }
    get errorCal() { return $('//android.widget.TextView[@text="Un monto no menor a RD$50,000.00"]') }
    get scrollCalculatorPage() { return $('//android.widget.ScrollView') }
    get tooltipC() { return $('//android.widget.ImageView[@content-desc="icon_close"]') }
    get finalizarB(){return $('//android.widget.ScrollView/android.view.View[3]/android.widget.Button')}
    



    async clickComunícateConNosotros() {
        await browser.pause(2000)
        await this.comunícateConN.click()
        await browser.pause(2000)
        // await $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View[1]').click()
    }

    async clickEnviarCorreo() {
        if (await this.enviarCorreo.isDisplayed()) {
            await this.enviarCorreo.click()
        } else {
            await this.comunícateConN.click()
            await this.enviarCorreo.click()
        }
    }

    async clickSolicitarCita() {
        if (await this.solicitarCita.isDisplayed()) {
            await this.solicitarCita.click()
        } else {
            await this.comunícateConN.click()
            await browser.pause(2000)
            await this.solicitarCita.click()
        }
    }

    async clickSeguirnosEnInstagram() {
        if (await this.seguirnosEnInstagram.isDisplayed()) {
            await this.seguirnosEnInstagram.click()
        } else {
            await this.comunícateConN.click()
            await browser.pause(2000)
            await this.seguirnosEnInstagram.click()
        }
    }

    async scrollUpDown() {
        await this.scrollableEle.waitForDisplayed({ timeout: 10000 })
        await browser.swipe({
            direction: 'up',
            scrollableElement: this.scrollableEle
        })
        await browser.pause(2000)
        await browser.swipe({
            direction: 'down',
            scrollableElement: this.scrollableEle
        })
    }

    async clickTooltip() {
        await this.tooltip.click()
        await browser.pause(2000)
        await this.scrollableEle.click()
    }
    async clickUSD() {
        await this.usdTab.click()
        await browser.pause(2000)
    }
    async clickDOP() {
        await this.dopTab.click()
        await browser.pause(2000)
    }

    async selectCurrency(data: any) {
        await expect($('//android.widget.TextView[@text="' + data + '"]')).toBeDisplayed()
        await $('//android.widget.TextView[@text="' + data + '"]').click()
    }

    async enterMontoaInvertir(data: any) {
        await this.montoaInvertir.addValue(data)
    }
    async enterCantidadDeDías(data: any) {
        await $('//android.widget.EditText[@text="15"]').clearValue()
        await $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]').addValue(data)
    }

    async clickContinuar() {
        await expect(this.continuar).toBeEnabled()
        await this.continuar.click()
        if (await this.errorCal.isDisplayed()) {
            await console.log(this.errorCal.getText())
        }
    }

    async scrollCalculadoraMutuosPopular() {
        await browser.swipe({
            direction: 'up',
            scrollableElement: this.scrollCalculatorPage
        })
        await browser.pause(2000)
        await browser.swipe({
            direction: 'down',
            scrollableElement: this.scrollCalculatorPage
        })
    }
    async clickTooltipC() {
        await this.tooltipC.click()
        await expect($('//android.widget.TextView[@text="Tasa de rendimiento anualizada."]')).toBeDisplayed()
        await browser.pause(2000)
        await this.tooltipC.click()
    }

    async clickFinalizarButton() {
        await this.finalizarB.scrollIntoView()
        await expect(this.finalizarB).toBeDisplayed()
        await this.finalizarB.click()
    }
    async swipeInfo() {
        await expect($('//android.widget.ImageView')).toBeDisplayed()
        await $('//android.widget.ImageView').click()
        await browser.pause(1000)
        for (let i = 1; i < 4; i++) {
            await browser.swipe({
                direction: "left",
                scrollableElement: $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View')
            })
        }
    }

}
export default new FalshViewPage()