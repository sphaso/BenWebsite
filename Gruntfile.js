module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.JSON'),
		uglify: {
			build: {
				src: ['www/app.js', 'www/home/*.*.js', 'www/writing/*.*.js', 'www/unlimited/*.*.js', 'www/links/*.*.js', 'www/seneca/*.*.js', 'www/gallery/*.*.js'],
				dest: 'www/benmantle.min.js'
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.registerTask('default', ['uglify']);
};