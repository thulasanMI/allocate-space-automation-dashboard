class AllocateLoginPageObjects {
  get emailAddressField() {
    return $(
      '//android.widget.EditText[@text="Email"]'
      // |'//XCUIElementTypeTextField[@value="Phone Number"]'
    );
  }

  get passwordField() {
    return $(
      '//android.widget.EditText[@text="Password"]'
      // | "#Send"
    );
  }

  get signInButton() {
    return $(
      '//android.widget.TextView[@text="SIGN IN"]'
      // | '//XCUIElementTypeButton[@name="OK"]'
    );
  }

  get welcomeBackText() {
    return $('[text="Welcome back"]');
  }

  get inviteTabButton() {
    //return $();
  }
}

module.exports = new AllocateLoginPageObjects();
