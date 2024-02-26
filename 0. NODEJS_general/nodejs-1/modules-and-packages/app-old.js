// MODULE: main
console.log("App starting ...");

let config = require("./config.json");

// console.log( config.__proto__ )

console.log("Supported formats: ");
config.forEach((option) => console.log(" --> ", option));

console.log("App finished .");
