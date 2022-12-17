// TODO
var addBinary = function (a, b) {
    let binaryStaring = a.concat(b)
    return parseInt(binaryStaring, 2).toString();
};

console.log(addBinary('1010', '1011'));