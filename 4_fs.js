const fs = require('fs')

// reading a file

// let fileContent = fs.readFileSync('f1.txt');
// console.log("Data of File One > " + fileContent)

// writing a file

// replaces old data
// fs.writeFileSync('f2.txt' , 'hello Node')
// if we dont have a file named f2.txt  > it wont throw an error rather it will create a new file
// console.log('file has been written')

// append file sync

// fs.appendFileSync('f3.txt' , 'this is the updated data')
// console.log('file appended')

//delete a file

// fs.unlinkSync('f2.txt')
// console.log('file deleted')


// creation of Directory/folder

// fs.mkdirSync('myDirectory')

// let folderPath = 'D:\Node\myDirectory'

// let folderContent =fs.readdirSync(folderPath)

// console.log('folder content:' + folderContent)


// CHECK WHETHER DIRECTORY EXIST OR NOT

// let doesExist = fs.existsSync('myDirectory')


// console.log(doesExist);

// fs.rmdirSync('myDirectory')

// console.log('file removed')


