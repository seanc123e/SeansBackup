console.log("Hello World")
let test="toast"
console.log(test)
//=> let, const, and var are was to declare a variable. var can create scope issues;
//=> let catches if you try to declare the same variable twice;
//=> const should be go-to. it cannot be redeclared or reassigned;
//=> let is possible to declare a variable without assigning a value, but const must be assigned right away;
//=> numbers, strings, booleans, objects, null, undefined and symbols.
console.log(`soggy ${test}`)
console.log("soggy " + test)
if(test=="toasty"){
    console.log("yes")
}else{
    console.log("no")
}