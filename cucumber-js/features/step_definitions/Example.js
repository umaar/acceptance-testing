
var assert = require('assert');
var config = require('../../tmp');

var wd = require('wd');
var browser = wd.promiseRemote( 'localhost', config.port );

function initialiseBrowserLogging() {
	browser.on('status', function(info){
		console.log('\x1b[36m%s\x1b[0m', info);
	});

	browser.on('command', function(meth, path, data){
		console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path, data || '');
	});
}

var urls = {
	"Google" : "http://www.google.com/"
};

function Example() {
	this.Given(/^I have an open browser$/, function(callback) {
		initialiseBrowserLogging();

		browser.init({
			browserName: 'chrome',
			tags: ["examples"],
			name: "This is an example test"
		}).done(function() {
			callback();
		});

	});

	this.When(/^I navigate to "([^"]*)"$/, function(page, callback) {
		browser.get(urls[page])

		.done(function() {
			callback();
		});

	});


	this.Then(/^The page title should be "([^"]*)"$/, function(title, callback) {
		browser.title()
		
		.then(function (actualTitle) {
			assert.ok(actualTitle === title, 'Wrong title!');
		})

		.done(function() {
			browser.quit(function() {
				callback();
			});
		});

	});

}

module.exports = Example;
