module.exports = {
    options: {
        spawn: false,
        livereload: true
    },

    html:{
        files:[
            '*.html',
            '*.ascx',
            '*.aspx', 
            '*.cshtml'
        ],
        tasks:[
            //'copy'
        ]
    },
    scripts: {
        files: [
			'assets/js/*.js',
            'assets/js/**/*.js'
        ],
        tasks: [            
			'jshint',
            'concat',
            //'copy'
        ]
    },
    css: {
        files: [
            'assets/**/less/main.less',
            'assets/**/less/**/*.less'
        ],
        tasks: [            
            'less',
            'postcss', // autoprefixer
            //'cssmin'
            //'copy'
        ],
    }
};