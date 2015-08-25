module.exports = {  
   imagemin: {
      files: [{
          expand: true,
          cwd: 'assets/images',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/**/'
      }]
  }
};