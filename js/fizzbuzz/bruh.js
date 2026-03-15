// I need a program that takes a user input number,
//counts all the way up to the user number
//displays every number
//but every number that is % by 3 or 5 or 3 and 5,
//must output a certain word


//display the counting
//if %3 display fizz
//if %5 display buzz
//if %3 && %5 display fizzbuzz

let answer = parseInt(prompt("Please enter any number"))

for (let i = 1, i <= answer; i++) {
    if (i % 3 === 0 && i % 5 ===0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }

}