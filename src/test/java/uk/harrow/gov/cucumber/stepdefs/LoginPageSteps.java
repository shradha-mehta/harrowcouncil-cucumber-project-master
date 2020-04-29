package uk.harrow.gov.cucumber.stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.harrow.gov.pages.HomePage;
import uk.harrow.gov.pages.LoginPage;

/**
 * Created By Bhavesh
 */
public class LoginPageSteps {
    @When("^I click on login and register link$")
    public void iClickOnLoginAndRegisterLink() {
        new HomePage().clickOnLoginAndRegisterLink();
    }

    @Then("^I should navigate to login and register page$")
    public void iShouldNavigateToLoginAndRegisterPage() {
        Assert.assertEquals(new LoginPage().getLoginPageText(),"Log in");
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email)  {
        new LoginPage().enterEmail(email);

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
        new LoginPage().enterPassword(password);

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should see the error message$")
    public void iShouldSeeTheErrorMessage() {
        Assert.assertEquals(new LoginPage().loginErrorMessage(),"Invalid Username/Password supplied");
    }
}
