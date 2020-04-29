package uk.harrow.gov.cucumber.stepdefs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.harrow.gov.pages.CouncilTaxPage;
import uk.harrow.gov.pages.HomePage;
import uk.harrow.gov.pages.LoginPage;

/**
 * Created By Bhavesh
 */
public class CouncilTaxSteps {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on council tax link$")
    public void iClickOnCouncilTaxLink() {
        new HomePage().clickOnCouncilTaxLink();
    }

    @Then("^I should navigate to council tax apge successfully$")
    public void iShouldNavigateToCouncilTaxApgeSuccessfully() {
        Assert.assertEquals(new CouncilTaxPage().councilTextPageText(),"Council Tax");
    }

    @And("^I click on single person discount link$")
    public void iClickOnSinglePersonDiscountLink() {
        new CouncilTaxPage().clickOnSinglePersonDiscountTab();
    }

    @And("^I click on apply button$")
    public void iClickOnApplyButton() {
        new CouncilTaxPage().clickOnApplyButton();
    }

    @Then("^I should navigate to login page$")
    public void iShouldNavigateToLoginPage() {
        Assert.assertEquals(new LoginPage().getLoginPageText(),"Log in");
    }
}
