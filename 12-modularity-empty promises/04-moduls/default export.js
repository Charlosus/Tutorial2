// default export
// export default function greet(name) {
//     console.log("Hello there, ${ name }!");
// };

//2. Exporting default to creat object 
export default{
    a: "abc", 
    b: 42, 
    c: true
};

// name export 
export function grantRankOfMaster(name) {
    return `Master ${name}`;
};

// export {
//     x,
//     y,
//     z
// };
