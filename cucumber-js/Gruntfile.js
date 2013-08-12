
module.exports = function(grunt) {
	"use strict";

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-exec');

	grunt.initConfig({

		exec: {
			cucumberjs: {
				command: './node_modules/cucumber/bin/cucumber.js --format <%= cucumberjs.outputFormat %> features'
			}
		},

		clean: {
			tmp: ['tmp.js']
		}

	});


	grunt.registerTask('cucumber', function() {
		var done = this.async();

		var seleniumLauncher = require('selenium-launcher');

		seleniumLauncher(function(err, selenium) {

			grunt.registerTask('killSelenium', function(){
				selenium.kill();
				grunt.task.run('clean:tmp');
			});

			selenium.stderr.on('data', function(data) {
				data = data.toString();
				console.log('\n' + 'Error: \n' + data + '\n');
			});

			var conf = {
				port: selenium.port
			};

			var config = 'exports.port = ' + conf.port + ';';

			function writeConfig() {
				var fs = require('fs');
				fs.writeFileSync('./tmp.js', config);
			}

			writeConfig();

			var format = grunt.option('format');

			if (!format) {
				console.log('To specify output format, use --format=<json,pretty>');
			}

			grunt.config.set('cucumberjs.outputFormat', format || 'pretty');
			grunt.task.run('exec:cucumberjs');
			grunt.task.run('killSelenium');
			done();
		});

	});

	grunt.registerTask('default', ['cucumber']);
};
