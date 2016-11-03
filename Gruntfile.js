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
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/style.css': 'css/style.scss'
        }
      }
    },
    cssmin: {
      css:{
        src: 'css/style.css',
        dest: 'css/style.min.css'
      }
    },
    watch: {
      files: ['src/modules/**/*.js', 'css/modules/**/*.scss'],
      tasks: ['concat', 'uglify', 'sass', 'cssmin']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};