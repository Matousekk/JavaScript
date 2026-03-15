// take the numbers
// find even numbers
// *3 every even number
// sum them

const arr = [1, 2, 3, 4, 5, 6];

function isEven(num) {
    return(num % 2 == 0);
}

const evenNumbers = arr.filter(isEven)
const multipliedNumbers = evenNumbers.map((num) => num * 3);
const summedNumbers = multipliedNumbers.reduce((total, currentItem) => {
    return total + currentItem;
});

console.log(summedNumbers);