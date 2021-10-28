// Function Declarations

function calc1(a, b) {
    c = ((a * a) + (b * b))
    return (c * c)
}

console.log(calc1(2, 3));

// Function Expressions

const calc2 = function (a, b) {
    c = ((a * a) + (b * b))
    return (c * c)
};

console.log(calc2(2, 3));

//Arrow functions

const calc3 = (a, b) => {
    c = ((a * a) + (b * b))
    return (c * c)
};

console.log(calc3(2, 3));