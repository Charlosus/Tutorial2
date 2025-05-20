import { grantRankOfMaster as masterfy } from "./index-name.js";
// import { grantRankOfMaster, greetMeesa } from "./index-name.js";

// problem ocure if we already have function that is names as importet function 
// import { grantRankOfMaster as masterfy, greetMeesa } from "./index-name.js";
// now we can use it with new name 


// what we can also do can do is to import all 
import * as JediModul from "./index-name.js"
// now we can call function by JediModule.function name 


// const grantRankOfMaster = () => {
//     // somethign 
// }
// to solve it we can add import ... as new name 
const title = JediModul.grantRankOfMaster("Skywalker");
// normal import
// console.log(`hello there ${title}`);

// console.log(greetMeesa((title)))
// import all
console.log(`hello there ${title}`);

console.log(JediModul.greetMeesa((title)));


export const jediMasters = [
    masterfy("Skywalker"),
    masterfy("Kenobi"),
    masterfy("Yoda"),
    masterfy("Windu")
]