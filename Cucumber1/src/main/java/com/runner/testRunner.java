package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features="features",
plugin = {"pretty","html:target/cucumber-html-report","json:target/cucumber.json"},
glue={"com.stepDefinition"},
tags={"@FacebookSmokeTest"}
)
public class testRunner {
	

}
