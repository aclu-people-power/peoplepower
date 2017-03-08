module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: ['src/css/*.css', '!src/css/normalize.css', '!src/css/skeleton.css']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-csslint');

  // Default task(s).
  grunt.registerTask('default', ['csslint']);

};
