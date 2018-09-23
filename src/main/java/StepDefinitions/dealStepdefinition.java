//package StepDefinitions;
//
//import java.util.List;
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
//import cucumber.api.DataTable;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import junit.framework.Assert;
//
//public class dealStepdefinition {
//	
//	
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
//	@Then("^User enters username and password$")
//	
//	public void User_enters_username_and_password(DataTable credentials)
//	{
//		//raw method will give list of list of strings
//		List<List<String>> data=credentials.raw();
//		driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
//		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
//		
//			
//	}
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
//	@Then("^user moves to new Deals page$")
//	public void user_moves_to_new_Deals_page() 
//	{
//		driver.switchTo().frame("mainpanel");
//		Actions action=new Actions(driver);
//		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
//		WebDriverWait wait=new WebDriverWait(driver,30);
//		wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("//a[contains(text(),'New Deal')]"))));
//		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
//		
//		
//	    
//	
//	}
//
//
//@Then("^user enters deal details$")
//public void user_enters_deal_details(DataTable dealdata) 
//{
//
//	List<List<String>> dealvalue=dealdata.raw();
//	driver.findElement(By.id("title")).sendKeys(dealvalue.get(0).get(0));
//	driver.findElement(By.id("amount")).sendKeys(dealvalue.get(0).get(1));
//	driver.findElement(By.id("probability")).sendKeys(dealvalue.get(0).get(2));
//	driver.findElement(By.id("commission")).sendKeys(dealvalue.get(0).get(3));
//}
//
//
//@Then("^user close the browser$")
//public void user_close_the_browser()
//{
//	driver.quit();
//}
//
//
//	
//
//
//
//}
