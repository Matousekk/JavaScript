//Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
//camelize("background-color") == 'backgroundColor';
//split string into an array
//transform it
//join it back


let defaultWord = "background-color";

//capitalizes first letters
function capitalizeWord(str) {
    const strCapitalized = str[0].toUpperCase() + str.slice(1);
    return strCapitalized;
};

//splits the string into array
function camelize(str) {
    let arr = str.split('-').map(capitalizeWord);
    return arr;
};

//transforms the first letter to lower case
function deCapitalizeWord(str) {
    let joinedString = str.join('');
    console.log(joinedString[0].toLowerCase() + joinedString.slice(1));
}

const split = camelize(defaultWord);

const lowerCase = deCapitalizeWord(split);

//damn I hope I'll improve with time, this looks sloppy