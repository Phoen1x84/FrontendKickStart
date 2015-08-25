module.exports = {
    browserSync: {
	    files:{
	    	src: [
	    		'assets/less/**/*.less',
	    		'assets/js/**/*.js',
	    		'*.html',
	    		'*.ascx',
	    		'*.aspx',
	    		'*.cshtml'
	    	]
	    },
	    options:{
    		watchTask: true,
    		proxy:'/'
	    }
	}
}