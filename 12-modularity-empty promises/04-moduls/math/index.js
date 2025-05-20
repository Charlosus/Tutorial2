// export const bajoJajo = () => {
//     console.log("Bajo jajo")
// }

// barrel export
// export { default as CustomMath } from "./math.js";
// export { default as CustomRandom } from "./random.js";

// other variariant 
import {add, divide,multiply,remainer,substract} from "./math.js"
import { random } from "./random.js"

export default { add, divide, multiply, remainer, substract, random}