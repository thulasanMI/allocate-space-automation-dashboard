const { When, Then } = require("@wdio/cucumber-framework");
const AllocateLoginPage = require("../pages/AllocateLoginPage");

When(/^user launch Allocate App$/, async () => {
  await console.log("App launching");
});

Then(/^user click SIGN IN and enter email address and password$/, async () => {
  await $('//android.widget.Button[@resource-id="android:id/button1"]').click();
  await AllocateLoginPage.clickSIGNINButton();
  await AllocateLoginPage.enterEmailAndPassword();
});

Then(/^click SIGN IN button$/, async () => {
  await AllocateLoginPage.clickSIGNINButton();
});

Then(/^user disable biometric login$/, async () => {
  await AllocateLoginPage.disableBiometricLogin();
});

Then(/^user arrive at Allocate app home screen$/, async () => {
  await AllocateLoginPage.arriveAtHomeScreen();
});
