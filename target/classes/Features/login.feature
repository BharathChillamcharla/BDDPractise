Feature: Free CRM login Feature

#without examples keyword
#Scenario:
#Given User is already on login page
#Then title of the login page is Free CRM
#Then User enters "bharath1989" and "marchipoya"
#Then user click on login button
#Then user is on homepage

#with examples keyword 
Scenario Outline:
Given User is already on login page
Then title of the login page is Free CRM
Then User enters "<username>" and "<password>"
Then user click on login button
Then user is on homepage
Then user close the browser


Examples:
   | username 	 | password 	|
   | bharath1989 | marchipoya 	|
   | Tom	     | test123		|			


