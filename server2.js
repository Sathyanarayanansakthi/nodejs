//impoting readfile function
const { readFile } = require('node:fs');

readFile('./files/note.txt1', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data); // No need for data.toString() because 'utf8' returns a string
});


//throw error in correct fileanmme enter in above code 
//  eg.readFile('./files/note.txt1',

process.on("error" , err =>{  //process is an object and its global object
 console.log('enter the correct file ')
 process.exit(1)
})

