module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
// -----------------------------------------------------------------------------
// WATCH TASKS
//
// -----------------------------------------------------------------------------    
    watch: {
      css: {
        files: 'release/css/*.css',
        options: {
          livereload: true,
        }
      }
    },
// -----------------------------------------------------------------------------
// CSSLINT TASKS
//
// -----------------------------------------------------------------------------    
    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['uncompressed/css/*.css']
      },
      fullclf: {
        options: {
          import: false
        },
        src: ['original-css/*.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['uncompressed/css/*.css']
      }
    },
// -----------------------------------------------------------------------------
// LESSLINT TASKS
//
// -----------------------------------------------------------------------------    
    lesslint: {
      src: ['src/**/*.less']
      /*options: {
        csslint: {
          'known-properties': false
          csslintrc: '.csslintrc'
        }
      }*/
    },
// -----------------------------------------------------------------------------
// UNCSS TASKS
//
// -----------------------------------------------------------------------------
    uncss: {
      options: {
        report: 'gzip',
        // ignore these selectors so none are stripped by uncss regardless of which is in the markup
        ignore: ['#ubc7-okanagan-campus', '#ubc7-vancouver-campus', '#ubc7-centennial', '#ubc7-centennial a span', '.ubc7-single-element a', '#ubc7-global-utility button span.opened', '.open>.dropdown-menu', '.nav-collapse .open>.dropdown-menu','#ubc7-global-header', '#ubc7-global-header .row-fluid', '#ubc7-global-header ul', '#ubc7-global-header li', '#ubc7-global-header a', '#ubc7-ql-apom span', '#ubc7-ql-mobile span',  '.row-fluid .span8', '.row-fluid .offset2', '.row-fluid .offset2:first-child', '#ubc7-unit-menu .dropdown .btn-group.open button .ubc7-arrow', '#ubc7-unit-alternate-navigation .dropdown .btn-group.open button .ubc7-arrow', '#ubc7-global-menu #ubc7-global-header a', '#ubc7-global-menu.in #ubc7-global-header a', '#ubc7-global-header .row-fluid .offset2:first-child', '#ubc7-global-header .span8', '.row-fluid .span6', 'footer h3', 'footer h4', 'h3', 'h4', '#ubc7-unit .navbar .btn-navbar .icon-bar', '.navbar .btn-navbar .icon-bar', '.btn-navbar .icon-bar+.icon-bar']
      },
      dist: {
        files: {
          'uncompressed/css/minimal-clf-7.0.4.css': ['build.html'],
          'uncompressed/css/minimal-clf-7.0.4-bw.css': ['build-bw.html'],
          'uncompressed/css/minimal-clf-7.0.4-gw.css': ['build-gw.html'],
          'uncompressed/css/minimal-clf-7.0.4-wg.css': ['build-wg.html']
        }
      }
    },
  // -----------------------------------------------------------------------------
// GRUNT-CSS-WRAP TASKS: namespace clf css with .clf7
//
// -----------------------------------------------------------------------------
    css_wrap: {
      compile: {
        files: {
            'uncompressed/css/min-wrap-clf-7.0.4.css': [ 'uncompressed/css/minimal-clf-7.0.4.css'],
            'uncompressed/css/min-wrap-clf-7.0.4-bw.css' : [ 'uncompressed/css/minimal-clf-7.0.4-bw.css'],
            'uncompressed/css/min-wrap-clf-7.0.4-gw.css' : [ 'uncompressed/css/minimal-clf-7.0.4-gw.css'],
            'uncompressed/css/min-wrap-clf-7.0.4-wg.css' : [ 'uncompressed/css/minimal-clf-7.0.4-wg.css']
          },
          options: {
            selector: ".clf7"
          }
        }
    },
// -----------------------------------------------------------------------------
// CONCAT: add extra classes from wrap-root.css to wrapped files
//
// -----------------------------------------------------------------------------
    concat: {
      'uncompressed/css/min-wrap-clf-7.0.4.css': ['wrap-root.css', 'uncompressed/css/min-wrap-clf-7.0.4.css'],
      'uncompressed/css/min-wrap-clf-7.0.4-bw.css': ['wrap-root.css', 'uncompressed/css/min-wrap-clf-7.0.4-bw.css'],
      'uncompressed/css/min-wrap-clf-7.0.4-gw.css': ['wrap-root.css', 'uncompressed/css/min-wrap-clf-7.0.4-gw.css'],
      'uncompressed/css/min-wrap-clf-7.0.4-wg.css': ['wrap-root.css', 'uncompressed/css/min-wrap-clf-7.0.4-wg.css']
    },
// -----------------------------------------------------------------------------
// DOM_MUNGER: wrap .clf7 around clf page elements
//
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// COMBINE MEDIA QUERIES TASKS
//
// -----------------------------------------------------------------------------    
    cmq: {
        options: {
          log: false
        },
        your_target: {
          files: {
            'release/cmq': ['uncompressed/css/*.css']
          }
        }
      },

// -----------------------------------------------------------------------------
// CSSMIN TASKS
//
// -----------------------------------------------------------------------------
    cssmin: {
      options: {
        report: 'gzip'
      },
      target: {
        files: {
          'release/css/minimal-clf-7.0.4.css': ['uncompressed/css/minimal-clf-7.0.4.css'],
          'release/css/minimal-clf-7.0.4-bw.css': ['uncompressed/css/minimal-clf-7.0.4-bw.css'],
          'release/css/minimal-clf-7.0.4-gw.css': ['uncompressed/css/minimal-clf-7.0.4-gw.css'],
          'release/css/minimal-clf-7.0.4-wg.css': ['uncompressed/css/minimal-clf-7.0.4-wg.css'],
          'release/css/cmq/minimal-clf-7.0.4.css': ['release/cmq/minimal-clf-7.0.4.css'],

          'release/css/cmq/minimal-clf-7.0.4-bw.css': ['release/cmq/minimal-clf-7.0.4-bw.css'],
          'release/css/cmq/minimal-clf-7.0.4-gw.css': ['release/cmq/minimal-clf-7.0.4-gw.css'],
          'release/css/cmq/minimal-clf-7.0.4-wg.css': ['release/cmq/minimal-clf-7.0.4-wg.css'],

          'release/css/min-wrap-clf-7.0.4.css': ['uncompressed/css/min-wrap-clf-7.0.4.css'],
          'release/css/min-wrap-clf-7.0.4-bw.css': ['uncompressed/css/min-wrap-clf-7.0.4-bw.css'],
          'release/css/min-wrap-clf-7.0.4-gw.css': ['uncompressed/css/min-wrap-clf-7.0.4-gw.css'],
          'release/css/min-wrap-clf-7.0.4-wg.css': ['uncompressed/css/min-wrap-clf-7.0.4-wg.css']
        }
      }
    },
// -----------------------------------------------------------------------------
// CRITICAL CSS TASKS (generate critical css for inlining)
//
// -----------------------------------------------------------------------------    
  	criticalcss: {
  		custom: {
  			options: {
  				url: "http://localhost:3000",
  				width: 1200,
  				height: 220,
  				outputfile: "critical/critical.css",
  				filename: "release/css/minimal-clf-7.0.4.css", // Using path.resolve( path.join( ... ) ) is a good idea here 
  				buffer: 800*1024,
  				ignoreConsole: false
  			}
  		}
  	},
// -----------------------------------------------------------------------------
// CSSNANO TASKS
//
// -----------------------------------------------------------------------------    
    cssnano: {
      options: {
        sourcemap: false,
        discardComments: {
          removeAll: true
        },
      },
      dist: {
        files: {
          'release/optimized/minimal-clf-7.0.4.css': ['release/css/minimal-clf-7.0.4.css'],
          'release/optimized/minimal-clf-7.0.4-bw.css': ['release/css/minimal-clf-7.0.4-bw.css'],
          'release/optimized/minimal-clf-7.0.4-gw.css': ['release/css/minimal-clf-7.0.4-gw.css'],
          'release/optimized/minimal-clf-7.0.4-wg.css': ['release/css/minimal-clf-7.0.4-wg.css']
        }
      }
    },
// -----------------------------------------------------------------------------
// IMAGEMIN TASKS 
//
// -----------------------------------------------------------------------------     
    imagemin: {                          
        dynamic: {  
          options: {                       
            optimizationLevel: 3,
            svgoPlugins: [{ removeViewBox: false }]
          },
          files: [{
            expand: true,                   
            cwd: 'img/',                   
            src: ['**/*.{png,jpg,gif}'],   
            dest: 'release/img/'                  
          }]
        }
      },
// -----------------------------------------------------------------------------
// BROWSERSYNC TASKS
//
// -----------------------------------------------------------------------------    
    browserSync: {
        bsFiles: {
            src : 'release/css/*.css'
        },
        options: {
            server: {
                baseDir: "./",
                index: "output.html"
            }
        }
    }
  });
  

  // Load the plugins.
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-criticalcss');
  grunt.loadNpmTasks('grunt-lesslint');
  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-cssnano');
  grunt.loadNpmTasks('grunt-css-wrap');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s) - we bundle the tasks here with easily memorable names. Default is run when nothing else it specified [ie. 'grunt' as opposed to 'grunt lint'].
  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('optimize', ['uncss', 'cssmin']);
  grunt.registerTask('wrapped', ["uncss", "css_wrap", "concat", "cssmin"]);  // --> create namespaced CLF styles: use "wrapped" html.
  grunt.registerTask('remove-mq', ['cmq', 'cssmin']);
  grunt.registerTask('lint', ['csslint', 'lesslint']);
  grunt.registerTask('nano', ['cssnano']);

};