// MODULE: main
console.log("App starting ...")

// ES destructurization
const { add, sub, mul, div } = require("./math")
const { isNumber } = require("./types")

const temperatures = require("./temperatures.json")

// IGNORING NaN values
const normTemp = temperatures.filter(isNumber)

// calculate average temperature
const sum = normTemp.reduce( (acc, temp) => add(acc, temp), 0 )
const averageTemp = div( sum, normTemp.length )
console.log( "Average temperature: ", averageTemp.toFixed(3) )

// calculate error (%)
const errorP = ( (temperatures.length - normTemp.length) / temperatures.length ) * 100
console.log( "Percentage Error: ", errorP + "%" )

// const add = math.add
// console.log( math )

// let result = add(20,30)
// console.log( result )

console.log("App finished .")