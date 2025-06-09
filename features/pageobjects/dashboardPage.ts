class DashboardPage {
    get invertir() { return $('//android.widget.TextView[@text="Invertir"]') }
    get comoInvertir() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[1]') }
    get continuar() { return $('//*[@text="Continuar"]') }
    get quieroInvertir() { return $('//android.widget.TextView[@text="Quiero invertir"]') }
    get calculadoraPopular() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]') }
    get comentario() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.widget.EditText[2]') }
    get enviar() { return $('//android.widget.TextView[@text="Enviar"]') }
    get finalizar() { return $('//android.widget.TextView[@text="Finalizar"]') }
    get servicios() { return $('//android.widget.TextView[@text="Servicios"]') }
    get cuentaDeCorretajeOption() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View') }
    get especialista() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[5]') }
    get inicio() { return $('//android.widget.TextView[@text="Inicio"]') }
    get brokerageCard() { return $('//android.widget.ScrollView/android.view.View[1]/android.view.View[1]') }
    get informaciónDelaCuenta() { return $('//android.widget.TextView[@text="Información de la cuenta"]') }
    get brokerageAccountTooltip() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[4]') }
    get brokerageAccounts() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View') }
    get portfolipTooltip() { return $('//android.widget.ScrollView/android.view.View[2]') }
    get viewMore() { return $('//android.widget.ScrollView/android.view.View[1]/android.view.View[2]/android.widget.ImageView') }
    get quieroInvertirenmi() { return $('//android.widget.ScrollView/android.view.View[3]') }
    get especialistIcon(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.widget.ImageView')}
    


    async clickInvertir() {
        await expect(this.invertir).toBeDisplayed()
        await this.invertir.click()
    }
    async clickComoInvertir() {
        await expect(this.comoInvertir).toBeDisplayed()
        await this.comoInvertir.click()
        await expect($('//android.widget.TextView[@text="¿Cómo invertir?"]')).toBeDisplayed()
    }
    async clickContinuar() {
        await expect(this.continuar).toBeEnabled()
        await this.continuar.click()
    }
    async clickQuieroInvertir() {
        await this.quieroInvertir.scrollIntoView()
        await expect(this.quieroInvertir).toBeEnabled()
        await this.quieroInvertir.click()
    }
    async clickCalculadoraPopular() {
        await expect(this.calculadoraPopular).toBeDisplayed()
        await this.calculadoraPopular.click()
    }
    async enterComentario(data: any) {
        await expect(this.comentario).toBeDisplayed()
        await this.comentario.addValue(data)
    }
    async clickEnviar() {
        await expect(this.enviar).toBeEnabled()
        await this.enviar.click()
    }
    async clickFinalizar() {
        await expect($('//android.widget.ImageView[@content-desc="ipsa_illustrations_check"]')).toBeDisplayed()
        await expect($('//android.widget.TextView[@text="Marcos Andres Dalmasi Pe"]')).toBeDisplayed()
        await expect(this.finalizar).toBeEnabled()
        await this.finalizar.click()
    }
    async clickServicios() {
        await expect(this.servicios).toBeDisplayed()
        await this.servicios.click()
    }
    async clickCuentaDeCorretajeOption() {
        await expect(this.cuentaDeCorretajeOption).toBeDisplayed()
        await this.cuentaDeCorretajeOption.click()
    }
    async accountType(data: string) {
        await expect($('//android.widget.TextView[@text="' + data + '"]')).toBeEnabled()
        await $('//android.widget.TextView[@text="' + data + '"]').click()
        if (await data === 'Personal') {
            // await browser.pause(2000)
            await expect($('//android.widget.TextView[@text="Solicitar"]')).toBeEnabled()
            await $('//android.widget.TextView[@text="Solicitar"]').click()
        }
    }
    async clickEspecialista() {
        await expect(this.especialista).toBeDisplayed()
        await this.especialista.click()
    }
    async clickInicio() {
        await expect(this.inicio).toBeEnabled()
        await this.inicio.click()
    }
    async clickBrokerageCard() {
        await expect(this.brokerageCard).toBeDisplayed()
        await this.brokerageCard.click()
    }

    async verifyInformacióndelacuentaPage() {
        await this.informaciónDelaCuenta.waitForDisplayed({ timeout: 10000 })
        await expect(this.informaciónDelaCuenta).toBeDisplayed()
    }
    async clickBrokerageAccountTooltip() {
        await expect(this.brokerageAccountTooltip).toBeEnabled()
        await this.brokerageAccountTooltip.click()
        await expect($('//android.widget.TextView[contains(@text, "Cuenta bancaria registrada")]')).toBeDisplayed()
    }
    async swipeBrokerageAccounts() {
        await browser.swipe({
            direction: 'left',
            scrollableElement: this.brokerageAccounts
        })
        await this.clickBrokerageAccountTooltip()
    }

    async accessPortfolio(data: any) {
        await expect($('//android.widget.TextView[@text="' + data + '"]')).toBeDisplayed()
        await $('//android.widget.TextView[@text="' + data + '"]').click()
    }
    async clickPortfolipTooltip() {
        await expect(this.portfolipTooltip).toBeDisplayed()
        await this.portfolipTooltip.click()
        await expect($('//android.widget.TextView[contains(@text,"Este monto está sujeto a comisiones")]')).toBeDisplayed()
        await expect($('//android.widget.TextView[contains(@text,"Para mayor información")]')).toBeDisplayed()
    }


    async clickViewMore() {
        await expect(this.viewMore).toBeEnabled()
        await this.viewMore.click()
        await expect($('//android.widget.TextView[@text="Total de inversiones:"]')).toBeDisplayed()
    }

    async clickQuieroInvertirenmi() {
        await this.quieroInvertirenmi.waitForDisplayed({ timeout: 60000 })
        await expect(this.quieroInvertirenmi).toBeDisplayed()
        await browser.pause(2000)
        await this.quieroInvertirenmi.click()
    }

    async investIn(data: string) {
        await expect($('//android.widget.TextView[@text="' + data + '"]')).toBeDisplayed()
        await $('//android.widget.TextView[@text="' + data + '"]').click()
        await expect($('//android.widget.TextView[@text="' + data + '"]')).toBeDisplayed()
    }

    async openInstrumentosTab() {

        await browser.swipe({
            direction: "left",
            scrollableElement: $('//android.widget.ScrollView/android.view.View[1]')
        })
        await $('//android.widget.Button').click()
        await $('//android.view.View[@content-desc="back_arrow"]').click()
        await browser.swipe({
            direction: "left",
            scrollableElement: $('//android.widget.ScrollView/android.view.View[1]')
        })
        await browser.swipe({
            direction: "up",
            scrollableElement: $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[3]'),
            // percent:100
        })
    }
    async selectInstrumentostype(data: string) {
        await $('//android.widget.TextView[contains(@text,"' + data + '")]').click()
    }
    async selectSubtype(data: string) {
        await $('//android.widget.TextView[@text="' + data + '"]').click()
    }
    async selectTopicInterest(data: string) {
        await $('//android.widget.TextView[@text="' + data + '"]').click()
    }
    async clickEspec(xc:number,yc:number){
        await browser.performActions([{
            type: 'pointer',
            id: 'mouse',
            parameters: { pointerType: 'mouse' },
            actions: [
              { type: 'pointerMove', duration: 0, x: xc, y: yc },
              { type: 'pointerDown', button: 0 },
              { type: 'pointerUp', button: 0 }
            ]
          }]);
          
          await browser.releaseActions();
    }
    async selectTopicIEspecialista(data:string){
        await $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.widget.EditText[1]/android.view.View').click()
        await browser.pause(2000)
        await expect($('//android.widget.TextView[@text="'+data+'"]')).toBeDisplayed()
        await $('//android.widget.TextView[@text="'+data+'"]').click()
    }
    
}
export default new DashboardPage()