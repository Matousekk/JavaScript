function toUpper(string) {
    return string.toUpperCase();
}

const cats = ["Leopard", "Jaguar", "Tiger"];

const upperCats = cats.map(toUpper);

console.log(upperCats);