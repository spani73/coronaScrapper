const fs =require("fs");
console.log("before");
fs.readFile("abc.txt",cb);
function cb(err,data){
    console.log( "" + data);
    console.log("" + err);
}
console.log("after");