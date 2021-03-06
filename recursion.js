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
          files: ['jquery.js', 'underscore.js'],
        },
      ],
    },
    {
      dir: 'css',
      files: ['reset.css', 'main.css'],
    },
  ],
};
//11. You should be able to return a list of files from the fileData, which can be found at tab Recursion Json

const getFiles = (
  { dir, files },
  dirToSearch,
  allFiles = [],
  firstIter = false
) => {
  let appendDir = firstIter || dir === dirToSearch;
  files.forEach((file) => {
    if (typeof file === 'string') {
      if (appendDir) {
        allFiles.push(file);
      }
    } else {
      getFiles(file, dirToSearch, allFiles, appendDir);
    }
  });
  return allFiles;
};

console.log(getFiles(fileData));
