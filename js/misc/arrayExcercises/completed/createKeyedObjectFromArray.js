let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

//let usersById = users.reduce((curr, keyValue) => {
//    const key = keyValue.id;
//    curr[key] = keyValue;
//    return curr;
//}, {});

console.log(usersById(users));

function usersById(arr) {
    const sortedUsers = arr.reduce((curr, keyValue) => {
        const key = keyValue.id;
        curr[key] = keyValue;
        return curr;
    }, {});
    return sortedUsers;
};

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/