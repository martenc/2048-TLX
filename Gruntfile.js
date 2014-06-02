module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/*.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
	sass: {      
        dev: {
            options: {
                includePaths: [
                    'style/fonts'
                ]
            },
            files: {
                'style/main.css': 'style/main.scss'
            }
        }
    }
  });

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-sass');
	
	grunt.registerTask('default', ['sass', 'uglify']);
};