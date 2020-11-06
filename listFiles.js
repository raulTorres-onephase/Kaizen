var fileData = {	
    dir: 'app',	
    files: [	
      'index.html',	
      {	
        dir: 'js',	
        files: [	
          'main.js',	
          'app.js',	
          'misc.js',	
          {	
            dir: 'vendor',	
            files: [	
              'jquery.js',	
              'underscore.js'	
            ]	
          }	
        ]	
      },	
      {	
        dir: 'css',	
        files: [	
          'reset.css',	
          'main.css'	
        ]	
      }	
    ]
}

console.log('keys', Object.keys(fileData))
console.log('values', Object.values(fileData))