let arr = [5, 3, 8, 1];

function filter(array, a, b) {
    for (let i = 0; i < array.length; i++) {
        let value = array[i];

        if(value < a || value > b) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}

console.log(filter(arr, 1, 4));

//looked at answer, gave me trouble