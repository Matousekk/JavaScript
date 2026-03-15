//Prime numbers printer
//Change n value to liking

let n = 10;
let result = 0;

for (let i = n - 1; i > 1; i--) { //increment n by 1 and assing to i
    for (let p = i - 1; p > 1; p--) { //start deviding i by everything above 2
        if (i % p == 0) result++;
    }
    if (result == 0) console.log(i); //if cannot be devided, print
    result = 0; //reset value for next round
}