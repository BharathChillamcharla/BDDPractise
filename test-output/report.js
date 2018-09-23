$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Sample Work Space/BDDPractise/src/main/java/Features/dealsMap.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Deal data creation sceanario using datatables",
  "description": "",
  "id": "deal-data-creation;deal-data-creation-sceanario-using-datatables",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of the login page is Free CRM",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9
    },
    {
      "cells": [
        "bharath1989",
        "marchipoya"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user moves to new Deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal1",
        "1000",
        "50",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "test deal2",
        "2000",
        "20",
        "20"
      ],
      "line": 17
    },
    {
      "cells": [
        "test deal3",
        "3000",
        "30",
        "30"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "dealStepdefinitionwithMap.User_is_already_on_login_page()"
});
formatter.result({
  "duration": 29432278746,
  "status": "passed"
});
formatter.match({
  "location": "dealStepdefinitionwithMap.title_of_the_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 364833744,
  "status": "passed"
});
formatter.match({
  "location": "dealStepdefinitionwithMap.User_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 3325317349,
  "status": "passed"
});
formatter.match({
  "location": "dealStepdefinitionwithMap.user_click_on_login_button()"
});
formatter.result({
  "duration": 10961214576,
  "status": "passed"
});
formatter.match({
  "location": "dealStepdefinitionwithMap.user_is_on_homepage()"
});
formatter.result({
  "duration": 2017522803,
  "status": "passed"
});
formatter.match({
  "location": "dealStepdefinitionwithMap.user_moves_to_new_Deals_page()"
});
formatter.result({
  "duration": 2057278674,
  "status": "passed"
});
formatter.match({
  "location": "dealStepdefinitionwithMap.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 10911480538,
  "status": "passed"
});
formatter.match({
  "location": "dealStepdefinitionwithMap.user_close_the_browser()"
});
formatter.result({
  "duration": 770437141,
  "status": "passed"
});
});