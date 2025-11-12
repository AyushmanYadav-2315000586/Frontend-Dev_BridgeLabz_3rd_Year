//Global Scope- Define one function and access global variable inside and outside the function

let globalVar="Global Variable";
function globalScope(){
    console.log(globalVar);
}
globalScope();

// Function Scope- Define one function and access function variable inside and outside the function

function functionScope(){
    let functionVar="Function Variable";
    console.log(functionVar);
}
functionScope();
//console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined


//Block Scope- Define one block and access block variable inside and outside the block

{
    let blockVar="Block Variable";
    console.log(blockVar);
}
//console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined

//Lexical Scope- Define inner function inside outer function and access outer function variable inside inner function call inner fucntion inside outer function scope
function outerFunction(){
    let outerVar="Outer Variable";
    function innerFunction(){
        console.log(outerVar);
    }
    innerFunction();
}
outerFunction();
