package com.stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class smokeTest {
	
	
	
	WebDriver driver;
	
	@Given("^Open firefox and start application$")
	public void open_firefox_and_start_application() throws Throwable {
		System.setProperty("webdriver.chrome.driver","C:/Downloaded/chromedriver_win32/chromedriver.exe");
	    driver=new ChromeDriver();
		driver.manage().window().maximize();
	    driver.get("https://www.facebook.com/");
	}

//	@When("^I enter valid <\"([^\"]*)\"> and valid <\"([^\"]*)\">$")
//	public void i_enter_valid_and_valid(String arg1, String arg2) throws Throwable {
//		driver.findElement(By.id("email")).sendKeys(arg1);
//		driver.findElement(By.id("pass")).sendKeys(arg2);
//	   
//	}
	
	@When("^I enter valid \"([^\"]*)\" and valid \"([^\"]*)\"$")
	public void i_enter_valid_and_valid(String arg1, String arg2) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(arg1);
	    driver.findElement(By.id("pass")).sendKeys(arg2);
	}

	@Then("^user should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws Throwable {
	   driver.findElement(By.xpath("//input[@data-testid='royal_login_button']")).click();
	}
	
	@Then("^Browser should be closed$")
	public void browser_should_be_closed() throws Throwable {
	    driver.close();
	}

}
