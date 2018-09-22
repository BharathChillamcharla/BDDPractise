package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features="F:\\Sample Work Space\\BDDPractise\\src\\main\\java\\Features\\deals.feature",
		glue={"StepDefinitions"},
		format={"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
		monochrome=true,
		dryRun=false
		
		)



public class TestRunner {

}
