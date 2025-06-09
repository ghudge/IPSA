import { Given } from "@wdio/cucumber-framework";

Given(/^click on enter key$/, async () => {
    await $('//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View[1]').click()
    await $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]').click()
    // await $('//android.widget.TextView[@text="Cerrar"]').waitForDisplayed({ timeout: 20000 })
    // if (await $('//android.widget.TextView[@text="Cerrar"]').isDisplayed()) {
    //     await $('//android.widget.TextView[@text="Cerrar"]').click()
    // }
    await $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]').click()
    await $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[3]/android.widget.EditText').setValue('michellebrown')
    await $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[4]/android.widget.EditText').setValue('321321')
    await $('//android.widget.TextView[@text="Acceder"]').click()
    await $('//android.widget.TextView[@text="Lo haré luego"]').click()
    await $('//android.widget.EditText').click()
    await $('//android.widget.EditText').addValue('321321')
    3
    await $('//android.widget.TextView[@text="Validar Token Popular"]').click()
    await $('//android.widget.TextView[@text="Lo haré luego"]').waitForDisplayed({ timeout: 50000 })
    await $('//android.widget.TextView[@text="Lo haré luego"]').click()
    await $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]').click()


    await browser.swipe({
        direction: 'up',
        scrollableElement: $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]')
    })

    // await $('//android.widget.TextView[@text="Solicitar productos"]').scrollIntoView()
    await $('//android.widget.TextView[@text="Solicitar productos"]').click()
    // await $('(//android.widget.TextView[@text="Solicitar productos"])[2]').scrollIntoView()
    await $('(//android.widget.TextView[@text="Solicitar productos"])[2]').click()
    await browser.pause(3000)
    await $('//android.widget.TextView[@resource-id="com.popular.app.android:id/prestamoTxtTitle"]').click()
    await $('//android.widget.Button[@resource-id="com.popular.app.android:id/prestamoVerMasBtn"]').click()
    await $('//android.widget.Button[@resource-id="com.popular.app.android:id/solicitarPrestamoBtn4"]').click()
    //     await $('//android.widget.LinearLayout[@resource-id="com.popular.app.android:id/editTextLayout1"]').click()
    //    // await $('//android.widget.LinearLayout[@resource-id="com.popular.app.android:id/editTextLayout1"]').addValue('10000')
    // await driver.execute('mobile: shell', {
    //   command: 'input',
    //   args: ['keyevent', '66'] // KeyEvent 66 = Enter key
    // });
    // Better: Target the actual EditText inside the LinearLayout
    const input = await $('//android.widget.LinearLayout[@resource-id="com.popular.app.android:id/editTextLayout1"]//android.widget.EditText');

    await input.click(); // Optional, ensures focus
    await input.setValue('10000');


    await browser.pause(3000)
    //    await browser.keys('Enter')
    await driver.execute('mobile: performEditorAction', { action: 'done' });
    // KeyEvent 66 = Enter key
    await driver.pressKeyCode(66);


    await browser.pause(15000)
    await $('//android.widget.RelativeLayout[@resource-id="com.popular.app.android:id/buttonLayout"]').waitForDisplayed({ timeout: 20000 })

});
