#Acceptance Testing

A look at various frameworks to help with acceptance testing. See [webpro/Automated-SPA-Testing](https://github.com/webpro/Automated-SPA-Testing) for unit and functional testing.

## Criteria to consider
- Ability to use [Feature files](https://github.com/cucumber/cucumber/wiki/Feature-Introduction) with the framework.
- Some form of Given When Then syntax in [Step Definitions](https://github.com/cucumber/cucumber/wiki/Step-Definitions).
- Can easily be used in a Continuous integration environment ([exit codes](http://en.wikipedia.org/wiki/Exit_status) should be handled correctly)
- Decent reporting out of the box in formats that [Jenkins](http://jenkins-ci.org/)/[TeamCity](http://www.jetbrains.com/teamcity/) would support ([TAP](http://en.wikipedia.org/wiki/Test_Anything_Protocol), [JUnit XML](http://ant.apache.org/manual/Tasks/junitreport.html)).
- Preference for JavaScript based frameworks however this is not a requirement
	- For JavaScript test frameworks/runners, the [JavaScript client](https://github.com/admc/wd) for WebDriver would most likely be used.
- [SauceLabs](https://saucelabs.com/) support is a plus.

## Frameworks

---

### [Cucumber.js](https://github.com/cucumber/cucumber-js)

#### Pros
- Feature files follow the proper [Gherkin](https://github.com/cucumber/cucumber/wiki/Gherkin) syntax.
- 
- 
- 

#### Cons
- Reporting wasn't amazing. Looks like it's still a work in progress. No colouring in the output ([issue: 104](https://github.com/cucumber/cucumber-js/pull/104)).
- Slow progress on a number of a issues.
- Due to the async nature, neglecting to call the [callback](https://github.com/jbpros/cucumber-js-example/blob/4e24470e80718235aba9364b1dadd7db3a8be446/features/step_definitions/google_steps.js#L8) passed to each method in a step def doesn't actually fail. This means failing steps can appear to pass when actually they weren't run at all.

#### Links
- **Example:** [/cucumber-js](cucumber-js)
- **Github:** [https://github.com/cucumber/cucumber-js](https://github.com/cucumber/cucumber-js)
- **Introductory Slides:** [http://www.slideshare.net/jbpros/cucumberjs-cuke-up-your-javascript](http://www.slideshare.net/jbpros/cucumberjs-cuke-up-your-javascript)
- **Twitter:** [https://twitter.com/cucumber_js](https://twitter.com/cucumber_js)


#### Extra example
The repo [RageMaion/node-bdd-example](https://github.com/RageMaion/node-bdd-example) contains a working example of cucumber.js along with a number of useful techniques:

- Uses **Grunt** as a task runner: [Gruntfile.js](https://github.com/RageMaion/node-bdd-example/blob/master/Gruntfile.js)
- **Cucumber** feature files: [New_Office_Search.feature](https://github.com/RageMaion/node-bdd-example/blob/master/test/features/New_Office_Search.feature)
- Concept of a "**World**": [World.js](https://github.com/RageMaion/node-bdd-example/blob/master/test/features/support/World.js) which hooks into the Cucumber BeforeScenario event to nullify the browser reference
- **Promises** compatible "browser factory" for actually starting up the browser: [browserFactory.js](https://github.com/RageMaion/node-bdd-example/blob/master/test/features/support/commands/browserFactory.js)
- "Friendly" page names in feature files which map actual **page interfaces** in code via: [getNamedPageCmd.js](https://github.com/RageMaion/node-bdd-example/blob/master/test/features/support/commands/getNamedPageCmd.js)
- **Generalised step definitions**: [generalizedDefinitions.js](https://github.com/RageMaion/node-bdd-example/blob/62a412e769c92a80fc9ebe314e166826d99079b8/test/features/step_definitions/generalizedDefinitions.js#L30)
- **Page** specific **interface**: [HomePage.js](https://github.com/RageMaion/node-bdd-example/blob/master/test/features/interfaces/HomePage.js)
- **Configuration** for cloud based testing or local testing: [testConfig.js](https://github.com/RageMaion/node-bdd-example/blob/master/test/features/config/testConfig.js)



---
