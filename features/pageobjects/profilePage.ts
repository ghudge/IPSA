class ProfilePage{
    get profileIcon(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.widget.TextView')}
    get myProfile(){return $('//android.widget.ImageView[@content-desc="icon_close"]')}
    get myP(){return $('//android.widget.TextView[@text="Mi perfil"]')}
    get sheet(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View')}
    get closeSheet(){return $('//android.view.View[@content-desc="Close sheet"]')}
    get documentosImportantes(){return $('//android.widget.TextView[@text="Documentos importantes"]')}
    get desvincularDispositivo(){return $('//android.widget.TextView[@text="Desvincular dispositivo"]')}
    get configuraciones(){return $('//android.widget.TextView[@text="Configuraciones"]')}
    get cambiarmiContraseña(){return $('//android.widget.TextView[@text="Cambiar mi contraseña"]')}
    get salir(){return $('//android.widget.TextView[@text="Salir"]')}
    get cerrarSesión(){return $('//android.widget.TextView[@text="Cerrar sesión"]')}
    get desvincularUsuario(){return $('//android.widget.TextView[@text="Desvincular usuario"]')}
    get desvincular(){return $('//android.widget.TextView[@text="Desvincular"]')}
    get appW(){return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]')}


    async appWebsite(){
        await expect(this.appW).toBeDisplayed()
        await this.appW.click()
        await $('//android.widget.Button').waitForDisplayed({timeout:10000})
        await expect($('//android.widget.Button')).toBeDisplayed()
    }


    async clickProfileIcon(){
        await this.profileIcon.waitForDisplayed({timeout:20000})
        await expect(this.profileIcon).toBeDisplayed()
        await this.profileIcon.click()
        await expect(this.myP).toBeDisplayed()
    }

    async clickMyProfile(){
        await expect(this.myProfile).toBeEnabled()
        await this.myProfile.click()
    }

    async clickCloseSheet(){
        await browser.swipe({
            direction:'up',
            scrollableElement:this.sheet
        })
        await this.closeSheet.click()
    }
    async clickDocumentosImportantes(){
        await expect(this.documentosImportantes).toBeDisplayed()
        await this.documentosImportantes.click()
    }
    async clickDesvincularDispositivo(){
        await expect(this.desvincularDispositivo).toBeEnabled()
        await this.desvincularDispositivo.click()
    }
    async clickConfiguraciones(){
        await expect(this.configuraciones).toBeDisplayed()
        await this.configuraciones.click()
    }
    async clickCambiarmiContraseña(){
        await expect(this.cambiarmiContraseña).toBeDisplayed()
        await this.cambiarmiContraseña.click()
        await expect($('//android.widget.TextView[@text="Identificación de usuario"]')).toBeDisplayed()
    }
    async clickSalir(){
        await expect(this.salir).toBeEnabled()
        await this.salir.click()
    }
    async clickCerrarSesión(){
        await expect(this.cerrarSesión).toBeDisplayed()
        await this.cerrarSesión.click()
    }
    async clickDesvincularUsuario(){
        await expect(this.desvincularUsuario).toBeDisplayed()
        await this.desvincularUsuario.click()
    }
    async clickDesvincular(){
        await expect(this.desvincular).toBeDisplayed()
        await this.desvincular.click()
    }


}
export default new ProfilePage()