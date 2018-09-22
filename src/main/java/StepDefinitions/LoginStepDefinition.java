//package StepDefinitions;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.JavascriptExecutor;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.interactions.Actions;
//import org.openqa.selenium.support.ui.ExpectedConditions;
//import org.openqa.selenium.support.ui.WebDriverWait;
//
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import junit.framework.Assert;
//
//public class LoginStepDefinition {
//	WebDriver driver;
//	
//	
//	@Given("^User is already on login page$")
//	public void User_is_already_on_login_page()
//	{
//		System.setProperty("webdriver.chrome.driver", "F:\\Selenium jar\\Lib\\Drivers\\chromedriver\\chromedriver.exe");
//		driver=new ChromeDriver();
//		driver.manage().window().maximize();
//		driver.get("https://www.freecrm.com/index.html");
//		
//	}
//	@Then("^title of the login page is Free CRM$")
//	public void title_of_the_login_page_is_FreeCRM()
//	{
//		String title=driver.getTitle();
//		Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
//			}
//	@Then("^User enters \"(.*)\" and \"(.*)\"$")
//	
//	public void User_enters_username_and_password(String username,String password)
//	{
//		driver.findElement(By.name("username")).sendKeys(username);
//		driver.findElement(By.name("password")).sendKeys(password);
//		
//		
//	}
//
//	@Then("^user click on login button$")
//	public void user_click_on_login_button()
//	{
//		WebElement loginbtn=driver.findElement(By.xpath("//input[@type='submit']"));
//		JavascriptExecutor js=(JavascriptExecutor)driver;
//		js.executeScript("arguments[0].click()", loginbtn);
//		
//	}
//	@Then("^user is on homepage$")
//	public void user_is_on_homepage() throws InterruptedException
//	{
//		String homepagetitle=driver.getTitle();
//	    Assert.assertEquals("CRMPRO", homepagetitle);
//	    Thread.sleep(2000);
//
//	}
//	@Then("^user moves to new Contacts page$")
//	public void user_moves_to_new_Contacts_page() 
//	{	
//		driver.switchTo().frame("mainpanel");
//		Actions action=new Actions(driver);
//		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
//		WebDriverWait wait=new WebDriverWait(driver,30);
//		wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//a[contains(text(),'New Contact')]"))));
//		driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
//		
//	    	
//	}
//
//	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
//	public void user_enters_and_and(String firstname, String lastname, String position) 
//	{
//		driver.findElement(By.id("first_name")).sendKeys(firstname);
//		driver.findElement(By.id("surname")).sendKeys(lastname);
//		driver.findElement(By.id("company_position")).sendKeys(position);
//		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
//	}
//
//
//	@Then("^user close the browser$")
//	public void user_close_the_browser()
//	{
//		driver.quit();
//	}
//
//
//}
