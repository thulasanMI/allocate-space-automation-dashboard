const AllocateLoginPage = require("../pages/AllocateLoginPage");
const AllocateVMSPage = require("../pages/AllocateVMSPage");
const { When, Then } = require("@wdio/cucumber-framework");

When(/^host arrive at Allocate app home screen$/, async () => {
  await console.log("App launching");
  await $('//android.widget.Button[@resource-id="android:id/button1"]').click();
  await AllocateLoginPage.clickSIGNINButton();
  await AllocateLoginPage.enterEmailAndPassword();
  await AllocateLoginPage.clickSIGNINButton();
  await AllocateLoginPage.disableBiometricLogin();
  await AllocateLoginPage.arriveAtHomeScreen();
});

Then(/^host clicks on Invite tab$/, async () => {
  await AllocateLoginPage.clickInviteTab();
});

Then(/^host clicks Create new invite for the desired passport$/, async () => {
  await AllocateVMSPage.goToEcolabsPassport();
  await AllocateVMSPage.clcikCreateInvite();
});

Then(/^host enters invitation details$/, async () => {
  await AllocateVMSPage.hostEntersEventName();
  await AllocateVMSPage.hostSelectsStartDateTime();
  await AllocateVMSPage.hostSelectsEndDateTime();
  await AllocateVMSPage.hostSelectDoorAcess();
});

Then(/^host adds visitors via email$/, async () => {
  await AllocateVMSPage.hostAddsVisitorViaEmail();
});

Then(/^host clicks send invite button$/, async () => {
  await AllocateVMSPage.hostClicksSendInvitesButton();
});

Then(/^verify invitation is successfuly sent$/, async () => {
  await AllocateVMSPage.invitationSentSucceffullyMessage();
});

Then(/^verify invite shown under 'Upcoming invites'$/, async () => {
  await AllocateVMSPage.invitationShownUnderUpcomingInvites();
});
