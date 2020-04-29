package uk.harrow.gov.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.harrow.gov.utility.Utility;


public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    @FindBy (xpath = "//h2[contains(text(),'Log in')]")
    WebElement loginPageText;

    @FindBy (xpath = "//input[@name='username']")
    WebElement yourEmail;

    @FindBy (xpath ="//input[@name='password']" )
    WebElement yourPassword;

    @FindBy(xpath = "//input[@name='_login']")
    WebElement loginButton;

    @FindBy(xpath = "//span[contains(text(),'Invalid Username')]")
    WebElement errorMessage;


    public String getLoginPageText(){
        Reporter.addStepLog("getting text from : " + loginPageText.toString());
        log.info("getting text from : " + loginPageText.toString());
        return getTextFromElement(loginPageText);

    }

    public void enterEmail(String email){
        Reporter.addStepLog("Entering eamil : " + email + "to email field: " + yourEmail.toString());
        sendTextToElement(yourEmail,email);
        log.info("Entering email : " + email + "to email field: " + yourEmail.toString());

    }
    public void enterPassword(String password) {
        Reporter.addStepLog("Entering password : " + password + "to password field: " + yourPassword.toString());
        sendTextToElement(yourPassword, password);
        log.info("Entering password : " + password + "to password field: " + yourPassword.toString());
    }

    public void clickOnLoginButton(){
        Reporter.addStepLog("clicking on login button : " +loginButton.toString());
        clickOnElement(loginButton);
        log.info("clicking on login button : " +loginButton.toString());
    }

    public String loginErrorMessage(){
        Reporter.addStepLog("getting text from : " + errorMessage.toString());
        log.info("getting text from : " +errorMessage.toString());
        return getTextFromElement(errorMessage);


    }
}
