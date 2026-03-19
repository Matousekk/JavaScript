let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

const totalAge = arr.reduce((total, person) => {
    return total + person.age / arr.length;
}, 0);

console.log(totalAge);

//alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28