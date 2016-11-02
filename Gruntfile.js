module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      dist: {
        src: ['src/modules/**/*.js'],
        dest: 'src/main.js',
      },
    },
    uglify: {
      my_target: {
        files: {
          'src/main.min.js': 'src/main.js'
        }
      }
    },
    watch: {
      files: ['src/modules/*.js', 'src/main.js'],
      tasks: ['concat', 'uglify']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};