var fs = require('fs');

//challenge 1
console.log(fs.readFileSync('./challenge1/info.txt', 'utf-8'));
//challenge 2
fs.writeFileSync('./challenge2/info.txt', 'Ryan');
// challenge 3
fs.rename('./challenge3/binfo.txt', './challenge3/info.txt', err => {
  // if (err) console.log(err);
});
// challenge 4
fs.mkdir('./challenge4/copyfolder', err => {
  // if (err) console.log(err);
  fs.copyFileSync('./challenge4/info.txt', './challenge4/copyfolder/info.txt');
});
// challenge 5
fs.readFile('./challenge5/info.txt', 'utf-8', (err, data) => {
  // if (err) console.log(err);
  const result = data.replace(/\-/g, ' ');
  fs.writeFileSync('./challenge5/info.txt', result);
});
// challenge 6
fs.readdir('./challenge6', (err, files) => {
  files.filter(file => {
    let filetype = file.split('.').pop();
    if (filetype === 'txt') {
      return file;
    }
  }).forEach(file => console.log(file));
})