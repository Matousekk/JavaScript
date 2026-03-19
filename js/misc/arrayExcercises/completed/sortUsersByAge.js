let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(a, b) {
    if(a.age < b.age) return -1;
    if(a.age == b.age) return 0;
    if(a.age > b.age) return 1;
}

console.log(arr.sort(sortByAge));

// now: [john, mary, pete]
//console.log(arr[0].name); // John
//console.log(arr[1].name); // Mary
//console.log(arr[2].name); // Pete