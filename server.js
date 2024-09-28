console.log('hi soilders')  //basics 

const os = require('os')  //require  means fucncion used to import module 
console.log(os.type())  //op Windows


console.log(__dirname)  //op display directory name

//how to import modules in node js
const path=require('path') ;console.log(path.dirname(__dirname))//display dir.name
console.log(path.basename(__filename)) //display basename
console.log(path.extname(__filename)) //display extension name

//using parse function
console.log(path.parse(__filename)) //it will display in  object formate


//math module import using reqire
const maths=require('./math');console.log(1+1)
console.log(100-10)

//another type to import
console.log(1*2)