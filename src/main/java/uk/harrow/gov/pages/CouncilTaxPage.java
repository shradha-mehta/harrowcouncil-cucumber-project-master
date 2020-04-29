package uk.harrow.gov.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import uk.harrow.gov.utility.Utility;


public class CouncilTaxPage extends Utility {
    private static final Logger log = LogManager.getLogger(CouncilTaxPage.class.getName());



    @FindBy(xpath ="//h1[contains(text(),'Council Tax')]" )
    WebElement _welcomeText;
    @FindBy(xpath = "//h2[contains(text(),'Apply for single person discount')]")
    WebElement singlePersonDiscount;
    @FindBy (xpath = "//a[contains(text(),'Apply')]")
    WebElement applyButton;

    public String councilTextPageText(){
        Reporter.addStepLog("Getting text from : " + _welcomeText.toString());
        log.info("Getting text from " +_welcomeText.toString());
        return getTextFromElement(_welcomeText);
    }

    public void clickOnSinglePersonDiscountTab(){
        Reporter.addStepLog("Clciking on single person discount tab : " + singlePersonDiscount.toString());
        clickOnElement(singlePersonDiscount);
        log.info("Clciking on single person discount tab : " + singlePersonDiscount.toString());
    }

    public void clickOnApplyButton(){
        Reporter.addStepLog("Clciking on apply button : " + applyButton.toString());
        clickOnElement(applyButton);
        log.info("Clciking on apply button : " + applyButton.toString());


    }

}
