Feature: Deal data creation

Scenario: Deal data creation sceanario using datatables


Given User is already on login page
Then title of the login page is Free CRM
Then User enters username and password
|bharath1989	|	marchipoya	|
Then user click on login button
Then user is on homepage
Then user moves to new Deals page
Then user enters deal details
| test deal | 1000 | 50 | 10|
Then user close the browser
