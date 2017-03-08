module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: ['src/css/*.css', '!src/css/normalize.css', '!src/css/skeleton.css']
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
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-accessibility');

  // Default task
  grunt.registerTask('default', ['csslint', 'accessibility']);

};
