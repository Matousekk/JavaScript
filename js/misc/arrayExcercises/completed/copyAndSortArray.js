let arr = ["HTML", "JavaScript", "CSS"];

let sorted = arr.slice();

sorted.sort((a, b) => a.localeCompare(b));

console.log(arr);
console.log(sorted);