module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    jshint: {
      src: ['index.js'],
      options: {
        node: true
      }
    },

    simplemocha: {
      src: ['test/**/*test.js']
    }
  });
  grunt.registerTask('test', ['jshint', 'simplemocha']);
  grunt.registerTask('default', ['test']);
}
