module.exports = function (grunt) {    
	//require('time-grunt')(grunt); // Show task runner timings
    require('load-grunt-config')(grunt); // Load all grunt module components from /grunt folder

    // Default local tasks
    grunt.registerTask('default', ['browserSync', 'watch']);    
    //grunt.registerTask('default', ['watch']); 
    grunt.registerTask('dev', ['less', 'postcss', 'concat']);
    //grunt.registerTask('image', ['newer:imagemin']);    
};