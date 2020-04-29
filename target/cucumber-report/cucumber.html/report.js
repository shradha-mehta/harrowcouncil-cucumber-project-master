$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/harrow/gov/resources/featurefile/counciltax.feature");
formatter.feature({
  "line": 3,
  "name": "CouncilTax page feature",
  "description": "As a user I want to navigate to council tax page into harrow council website",
  "id": "counciltax-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CouncilTax"
    }
  ]
});
formatter.before({
  "duration": 16128067400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to council tax page successfully",
  "description": "",
  "id": "counciltax-page-feature;user-should-navigate-to-council-tax-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on council tax link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to council tax apge successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "CouncilTaxSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 81308100,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxSteps.iClickOnCouncilTaxLink()"
});
formatter.result({
  "duration": 723287300,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxSteps.iShouldNavigateToCouncilTaxApgeSuccessfully()"
});
formatter.result({
  "duration": 57104800,
  "status": "passed"
});
formatter.after({
  "duration": 696103800,
  "status": "passed"
});
formatter.before({
  "duration": 11731244200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should navigate to login page from single person discount page successfully",
  "description": "",
  "id": "counciltax-page-feature;user-should-navigate-to-login-page-from-single-person-discount-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on council tax link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on single person discount link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on apply button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "CouncilTaxSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 30800,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxSteps.iClickOnCouncilTaxLink()"
});
formatter.result({
  "duration": 675224000,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxSteps.iClickOnSinglePersonDiscountLink()"
});
formatter.result({
  "duration": 10642196800,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxSteps.iClickOnApplyButton()"
});
formatter.result({
  "duration": 16538596100,
  "status": "passed"
});
formatter.match({
  "location": "CouncilTaxSteps.iShouldNavigateToLoginPage()"
});
formatter.result({
  "duration": 50780400,
  "status": "passed"
});
formatter.after({
  "duration": 712414100,
  "status": "passed"
});
formatter.uri("src/test/java/uk/harrow/gov/resources/featurefile/login.feature");
formatter.feature({
  "line": 3,
  "name": "Login feature",
  "description": "As a user I want to login into harrow council website",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 11636903600,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-feature;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login and register link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to login and register page",
  "keyword": "Then "
});
formatter.match({
  "location": "CouncilTaxSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 48800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginAndRegisterLink()"
});
formatter.result({
  "duration": 15376046800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldNavigateToLoginAndRegisterPage()"
});
formatter.result({
  "duration": 42644700,
  "status": "passed"
});
formatter.after({
  "duration": 703250400,
  "status": "passed"
});
formatter.before({
  "duration": 11824991000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should not login with invalid credentials",
  "description": "",
  "id": "login-feature;user-should-not-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login and register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"abc123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"abc786\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "CouncilTaxSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 71200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginAndRegisterLink()"
});
formatter.result({
  "duration": 12592989600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 157813100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc786",
      "offset": 18
    }
  ],
  "location": "LoginPageSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 100571900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 3269181300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldSeeTheErrorMessage()"
});
formatter.result({
  "duration": 49203100,
  "status": "passed"
});
formatter.after({
  "duration": 700087200,
  "status": "passed"
});
});