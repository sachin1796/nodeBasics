// child process is a node module used to create sub process within a script

const cp = require('child_process');

// we can pass commands in execSync
// opens chrome
// cp.execSync('start chrome') 

console.log("output >" + cp.execSync('node demo.js'))

