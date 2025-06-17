var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('mySubjects.txt', 'Khadejeh \nCSIT 251 \nCSIT128', function (err) {
  if (err) throw err;
  console.log('file created');
});