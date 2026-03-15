function lCat(cat) {
    return cat.startsWith("L");
}

const cats = ["Leopard", "Jaguar", "Tiger"];

const filtered = cats.filter(lCat);

console.log(filtered);