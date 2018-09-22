Feature: Free CRM Create Contacts
Scenario Outline:Free CRM create new Contact Scenario
Given User is already on login page
Then title of the login page is Free CRM
Then User enters "<username>" and "<password>"
Then user click on login button
Then user is on homepage
Then user moves to new Contacts page
Then user enters "<firstname>" and "<lastname>" and "<position>"
Then user close the browser

Examples:
|username	|password	|firstname|lastname	|position	|
|bharath1989|marchipoya	|mahesh	  |babu		|CEO		|	
|bharath1989|marchipoya	|pavan	  |samba	|actor		|	
