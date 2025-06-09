class FormApplication {
    get hazteInversionista() { return $('//android.widget.TextView[@text="Hazte inversionista"]') }
    get regístrate() { return $('//android.widget.TextView[@text="Regístrate gratis y comienza a invertir"]') }
    get inversiones(){return $('//android.widget.TextView[@text="¡En Inversiones Popular te leemos!"]')}
    get contáctanos(){return $('//android.widget.TextView[@text="Contáctanos"]')}
    get fName(){return $('//android.widget.ScrollView/android.widget.EditText[1]')}
    get lName(){return $('//android.widget.ScrollView/android.widget.EditText[2]')}
    get nDocumento(){return $('//android.widget.ScrollView/android.widget.EditText[4]')}
    get continuar(){return $('//android.widget.TextView[@text="Continuar"]')}
    get phoneNumber(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.EditText[1]')}
    get email(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.EditText[2]')}        
    get contactForm(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.EditText[3]')}


    async verifyInversionesPage(){
        await expect(this.inversiones).toBeDisplayed()
    }

    async verifyRegístrate() {
        await expect(this.regístrate).toBeDisplayed()
    }

    async clickHazteInversionista() {
        await expect(this.hazteInversionista).toBeDisplayed()
        await this.hazteInversionista.click()
    }
    async clickContáctanosBtn(){
        await expect(this.contáctanos).toBeDisplayed()
        await this.contáctanos.click()
    }
    async verifyContáctanosPage(){
        await expect(this.contáctanos).toBeDisplayed()
    }
    async enterFName(data:string){
        await expect(this.fName).toBeDisplayed()
        await this.fName.setValue(data)
    }
    async enterLName(data:string){
        await expect(this.lName).toBeDisplayed()
        await this.lName.setValue(data)
    }
    async selectDocumentType(data:string){
        await $('//android.widget.ScrollView/android.widget.EditText[3]').click()
        let type= $('//android.widget.TextView[@text="'+data+'"]')
        await expect(type).toBeDisplayed()
        await type.click()
    }
    async enterNúmerodeDocumento(data:string){
        await expect(this.nDocumento).toBeDisplayed()
        await this.nDocumento.setValue(data)
        // await expect($('//android.widget.TextView[@text="El documento digitado deberá ser de una persona mayor de 18 años."]')).toBeDisplayed()
    }
    async clickContinuarBtn(){
        await expect(this.continuar).toBeDisplayed()
        await this.continuar.click()
    }
    async verifyContactoTab(){
        await expect($('//android.widget.TextView[@text="Contacto"]')).toBeDisplayed()
    }
    async enterPhoneNumber(data:string){
        await expect(this.phoneNumber).toBeDisplayed()
        await this.phoneNumber.setValue(data)
    }
    async enterEmail(data:string){
        await expect(this.email).toBeDisplayed()
        await this.email.setValue(data)
    }
    async selectContactForm(data:string){
        await expect(this.contactForm).toBeDisplayed()
        await this.contactForm.click()
        await $('//android.widget.TextView[@text="'+data+'"]').click()
    }
    async selectTopicofInterest(interest:string){
        await $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.EditText[1]').click()
        let interestEle = $('//android.widget.TextView[@text="'+interest+'"]')
        await expect(interestEle).toBeDisplayed()
        await interestEle.click()
    }
    async enterComment(data:string){
        let com= $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.EditText[2]')
        await expect(com).toBeDisplayed()
        await com.setValue(data)
    }


}
export default new FormApplication()