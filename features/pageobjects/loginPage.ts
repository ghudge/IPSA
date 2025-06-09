class Login {
    get salter() { return $('//android.widget.TextView[@text="Saltar"]') }
    // get continuar() { return $('//*[contains(@text,"Continuar")]') }
    get continuar(){return $('//android.widget.TextView[@text="Continuar"]')}
    get registrate() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button') }
    get doItL() { return $('//android.widget.TextView[@text="Lo haré luego"]') }
    get loginL() { return $('(//android.widget.ImageView[@content-desc="icon_close"])[2]') }
    get tasasDeR1() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[4]/android.view.View[2]') }
    get tasasDeR2() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View[2]') }
    get calculadoraPopular1() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[4]/android.view.View[3]') }
    get calculadoraPopular2() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View[3]') }
    get backA() { return $('//android.view.View[@content-desc="back_arrow"]') }
    get iniciarS() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]') }
    get enterU() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[1]') }
    get enterP() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]') }
    get iniciarB() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[4]/android.widget.Button') }
    get ahoraN() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button') }
    get burgerM() { return $('(//android.widget.ImageView[@content-desc="icon_close"])[1]') }
    get términosyCondiciones() { return $('//android.widget.TextView[@text="Términos y condiciones"]') }
    get términosyCondicionesPage() { return $('//android.webkit.WebView') }
    get políticasDePrivacidad() { return $('//android.widget.TextView[@text="Políticas de privacidad"]') }
    get responsabilidades() { return $('//android.widget.TextView[@text="Responsabilidades"]') }
    get responsabilidadesPage() { return $('//android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView') }
    get homeT() { return $('//android.widget.ScrollView/android.view.View[3]') }
    get acceptar() { return $('//android.widget.TextView[@text="Aceptar"]') }
    get msgHome(){return $('//android.widget.TextView[@text="¡Invierte hoy!"]')}
    get errorLoginMsg(){return $('//android.widget.TextView[@text="El usuario o la contraseña no son correctos"]')}





    async swipeLeft() {
        while(true){
            if(await this.continuar.isDisplayed()){
              break  
            }
            await browser.swipe({
                direction:'left',scrollableElement:$('//android.widget.ImageView'),
            })  
            // await browser.swipe({
            //     direction:'left',scrollableElement:$('//android.widget.ImageView'),
            // })                                           
            // await browser.swipe({
            //     direction:'left',scrollableElement:$('//android.widget.ImageView'),
            // })  
        }
    }
    async clickContinuar() {
        await expect(this.continuar).toBeDisplayed()
        await this.continuar.click()
    }
    async clickRegistrate() {
        await expect(this.registrate).toBeDisplayed()
        await this.registrate.click()
    }
    async doItLater() {
        await expect(this.doItL).toBeDisplayed()
        await this.doItL.click()
    }
    async loginLogo() {
        await this.loginL.waitForDisplayed({timeout:120000})
        await expect(this.loginL).toBeDisplayed()
    }

    async clickTasasDeRendimiento() {
        if (await this.tasasDeR1.isDisplayed()) {
            await this.tasasDeR1.click()
        } else {
            await this.tasasDeR2.click()
        }
    }
    async clickCalculadoraPopular() {
        if (await this.calculadoraPopular1.isDisplayed()) {
            await this.calculadoraPopular1.click()
        } else {
            await this.calculadoraPopular2.click()
        }
    }
    async clickBackArrow() {
        await this.backA.click()
    }
    async clickIniciarSesion() {
        await expect(this.iniciarS).toBeDisplayed()
        await this.iniciarS.click()
    }
    async enterUser(data: any) {
        await this.enterU.addValue(data)
    }
    async enterPassword(data: any) {
        await this.enterP.addValue(data)
    }
    async clickIniciarButton() {
        await expect(this.iniciarB).toBeEnabled()
        await this.iniciarB.click()
    }
    async clickAhoraNo() {
        if (await this.acceptar.isDisplayed()) {
            await console.log(this.errorLoginMsg.getText())
            await expect(this.errorLoginMsg).toBeDisplayed()
            await browser.takeScreenshot()
            await this.acceptar.click()
        } else {
            await expect(this.ahoraN).toBeEnabled()
            await this.ahoraN.click()
        }
    }
    async clickBurgerMenu() {
        await expect(this.burgerM).toBeDisplayed()
        await this.burgerM.click()
    }
    async clickTérminosYCondiciones() {
        await expect(this.términosyCondiciones).toBeEnabled()
        await this.términosyCondiciones.click()
    }
    async scrollTérminosYCondicionesPage() {
        await expect(this.términosyCondicionesPage).toBeDisplayed()
        let a: number = 1;
        while (a <= 7) {
            await browser.swipe()
            a++
        }
        // await $("//*[@class = 'android.view.View' and (@text = '© 2023 Inversiones Popular. Todos los derechos reservados.' or . = '© 2023 Inversiones Popular. Todos los derechos reservados.')]").scrollIntoView()

    }
    async clickPolíticasDePrivacidad() {
        await expect(this.políticasDePrivacidad).toBeDisplayed()
        await this.políticasDePrivacidad.click()
    }

    async clickResponsabilidades() {
        await expect(this.responsabilidades).toBeDisplayed()
        await this.responsabilidades.click()
    }
    async scrollResponsabilidadesPage() {
        await browser.swipe({
            direction: 'up',
            scrollableElement: this.responsabilidadesPage
        })
    }

    async homeTitle() {
        await expect(this.msgHome).toBeDisplayed()
        await this.homeT.waitForEnabled({ timeout: 15000 })
        await expect(this.homeT).toBeEnabled()
        await browser.pause(2000)
        await this.verifyDashboard()
    }
    async verifyLoginPage(){
        await expect($('(//android.widget.ImageView[@content-desc="icon_close"])[2]')).toBeDisplayed()
    }
    async verifyDashboard(){
        await $('//android.widget.TextView[@text="Mi portafolio"]').waitForDisplayed({timeout:30000})
    }

}
export default new Login()