module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          livereload: true,
          port: 8010,
          base: '',
        },
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      html: {
        files: ['index.html',
          'app/**/*.html']
      },
      js: {
        files: [
          'app/**/*.js',
          'app.js'
        ]
      },
      css: {
        files: [
          '.tmp/styles/build.css'
        ]
      },
      sass: {
        files: 'app/**/*.scss',
        tasks: ['buildcss']
      }
    },

    concat: {
      dist: {
        src: [
          'app/**/*.scss'
        ],
        dest: '.tmp/styles/build.scss'
      }
    },
    sass: {
      dist: {
        files: {
          '.tmp/styles/build.css':'.tmp/styles/build.scss'
        }

      }
    }
  });

  grunt.registerTask('build', ['jshint']);
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('buildcss', ['concat', 'sass']);

  grunt.registerTask('serve', [
    'buildcss',
    'connect',
    'watch'
  ]);
};
