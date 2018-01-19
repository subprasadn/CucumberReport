$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test1.feature");
formatter.feature({
  "id": "test-facebook-smoke-scenario",
  "tags": [
    {
      "name": "@FacebookSmokeTest",
      "line": 1
    }
  ],
  "description": "",
  "name": "Test Facebook smoke scenario",
  "keyword": "Feature",
  "line": 2
});
formatter.scenarioOutline({
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials",
  "description": "",
  "name": "Test login with valid credentials",
  "keyword": "Scenario Outline",
  "line": 4,
  "type": "scenario_outline"
});
formatter.step({
  "name": "Open firefox and start application",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I enter valid \"\u003cusername\u003e\" and valid \"\u003cpassword\u003e\"",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "user should be able to login successfully",
  "keyword": "Then ",
  "line": 7
});
formatter.step({
  "name": "Browser should be closed",
  "keyword": "Then ",
  "line": 8
});
formatter.examples({
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 10,
  "rows": [
    {
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;1",
      "cells": [
        "username",
        "password"
      ],
      "line": 11
    },
    {
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;2",
      "cells": [
        "testUser123",
        "pass123"
      ],
      "line": 12
    }
  ]
});
formatter.scenario({
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;2",
  "tags": [
    {
      "name": "@FacebookSmokeTest",
      "line": 1
    }
  ],
  "description": "",
  "name": "Test login with valid credentials",
  "keyword": "Scenario Outline",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "Open firefox and start application",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I enter valid \"testUser123\" and valid \"pass123\"",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "user should be able to login successfully",
  "keyword": "Then ",
  "line": 7
});
formatter.step({
  "name": "Browser should be closed",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "smokeTest.open_firefox_and_start_application()"
});
formatter.result({
  "duration": 35381931931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testUser123",
      "offset": 15
    },
    {
      "val": "pass123",
      "offset": 39
    }
  ],
  "location": "smokeTest.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "duration": 800673902,
  "status": "passed"
});
formatter.match({
  "location": "smokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 3209664581,
  "status": "passed"
});
formatter.match({
  "location": "smokeTest.browser_should_be_closed()"
});
formatter.result({
  "duration": 3546864168,
  "status": "passed"
});
});