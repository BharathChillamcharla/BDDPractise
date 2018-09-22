$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Sample Work Space/BDDPractise/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Free CRM create new Contact Scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of the login page is Free CRM",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user moves to new Contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 13,
      "id": "free-crm-create-contacts;free-crm-create-new-contact-scenario;;1"
    },
    {
      "cells": [
        "bharath1989",
        "marchipoya",
        "mahesh",
        "babu",
        "CEO"
      ],
      "line": 14,
      "id": "free-crm-create-contacts;free-crm-create-new-contact-scenario;;2"
    },
    {
      "cells": [
        "bharath1989",
        "marchipoya",
        "pavan",
        "samba",
        "actor"
      ],
      "line": 15,
      "id": "free-crm-create-contacts;free-crm-create-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Free CRM create new Contact Scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of the login page is Free CRM",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User enters \"bharath1989\" and \"marchipoya\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user moves to new Contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters \"mahesh\" and \"babu\" and \"CEO\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.User_is_already_on_login_page()"
});
formatter.result({
  "duration": 9854551384,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_the_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 48639292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bharath1989",
      "offset": 13
    },
    {
      "val": "marchipoya",
      "offset": 31
    }
  ],
  "location": "LoginStepDefinition.User_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 516379305,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 7723938308,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_homepage()"
});
formatter.result({
  "duration": 2040643073,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_Contacts_page()"
});
formatter.result({
  "duration": 1982469785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mahesh",
      "offset": 13
    },
    {
      "val": "babu",
      "offset": 26
    },
    {
      "val": "CEO",
      "offset": 37
    }
  ],
  "location": "LoginStepDefinition.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 2846273497,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_close_the_browser()"
});
formatter.result({
  "duration": 700129260,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Free CRM create new Contact Scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of the login page is Free CRM",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "User enters \"bharath1989\" and \"marchipoya\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user moves to new Contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters \"pavan\" and \"samba\" and \"actor\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.User_is_already_on_login_page()"
});
formatter.result({
  "duration": 7671549507,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_the_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 17813595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bharath1989",
      "offset": 13
    },
    {
      "val": "marchipoya",
      "offset": 31
    }
  ],
  "location": "LoginStepDefinition.User_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1174423505,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 5986965092,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_homepage()"
});
formatter.result({
  "duration": 2022280963,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_new_Contacts_page()"
});
formatter.result({
  "duration": 1806551836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pavan",
      "offset": 13
    },
    {
      "val": "samba",
      "offset": 25
    },
    {
      "val": "actor",
      "offset": 37
    }
  ],
  "location": "LoginStepDefinition.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 2110084849,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_close_the_browser()"
});
formatter.result({
  "duration": 663597192,
  "status": "passed"
});
});