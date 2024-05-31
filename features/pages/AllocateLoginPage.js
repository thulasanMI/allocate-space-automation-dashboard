const { WebDriverAgent } = require("appium-webdriveragent");
const AllocateLoginPageObjects = require("../pageobjects/AllocateLoginPageObjects");

class AllocateLoginPage {
  async enterEmailAndPassword() {
    await AllocateLoginPageObjects.emailAddressField.setValue(
      "thulasan+2@massiveinfinity.com"
      //"91232145"
    );
    await AllocateLoginPageObjects.passwordField.setValue("AAaa12345.");
    //click();
  }

  async clickSIGNINButton() {
    await AllocateLoginPageObjects.signInButton.click();
  }

  async disableBiometricLogin() {
    await $('[text="Allow only while using the app"]')
      .click
      //   {   setTimeout: 50000,}
      ();
    await $('[text="CANCEL"]')
      .click
      //   { setTimeout: 50000 }
      ();
  }

  async arriveAtHomeScreen() {
    // xpath  //android.widget.TextView[@text="Welcome back"]
    await expect(AllocateLoginPageObjects.welcomeBackText).toHaveText(
      "Welcome back",
      {
        setTimeout: 5000,
      }
    );
  }

  async clickInviteTab() {
    await AllocateLoginPageObjects.inviteTabButton.click();
  }
}

module.exports = new AllocateLoginPage();
