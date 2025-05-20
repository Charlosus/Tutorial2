// import * as CustomMath from "./math/math.js";
// import {random} from "./math/random.js"


// import * as modules from "./math/index.js";
// console.log(modules);

// const { CustomMath, CustomRandom } = modules;
// console.log("CustomRandom:", CustomRandom); /

import MathModule from "./math/index.js"
const {add, substract, multiply, divide, remainer, random} = MathModule

// const x = 5, y = 2
const x = random(100), y = random(100);
// \n in console mean new line
console.log(`X = ${x} \nY = ${y}`)
console.log(`Add(${x}, ${y}):`, add(x,y))
console.log(`Substract(${x}, ${y}):`, substract(x,y))
console.log(`Multiply(${x}, ${y}):`,multiply(x,y))
console.log(`Divide(${x}, ${y}):`, divide(x,y))
console.log(`Rmainer(${x}, ${y}):`,remainer(x,y))

// console.log(`X = ${x} \nY = ${y}`)
// console.log(`Add(${x}, ${y}):`, CustomMath.add(x,y))
// console.log(`Substract(${x}, ${y}):`, CustomMath.substract(x,y))
// console.log(`Multiply(${x}, ${y}):`, CustomMath.multiply(x,y))
// console.log(`Divide(${x}, ${y}):`, CustomMath.divide(x,y))
// console.log(`Rmainer(${x}, ${y}):`, CustomMath.remainer(x,y))