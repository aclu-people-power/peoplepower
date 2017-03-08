module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: ['src/css/*.css', '!src/css/normalize.css', '!src/css/bootstrap.css']
    },
    accessibility: {
      options: {
        accessibilityLevel: 'WCAG2A',
        reportLevels: {
          notice: false,
          warning: false,
          error: true
        }
      },
      src: ['src/**.html']
    },
    htmllint: {
      options: {
        'indent-style': 'spaces',
        'id-class-style': 'dash'
      },
      src: ['src/**.html']
    },
    jshint: {
      options: {
        'esversion': 3,
        'globals': {
          'jQuery': true
        }
      },
      src: ['gruntfile.js', 'src/js/**.js', '!src/js/**.min.js']
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-accessibility');
  grunt.loadNpmTasks('grunt-htmllint');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task
  grunt.registerTask('default', ['csslint', 'accessibility', 'htmllint', 'jshint']);

};
