function sum(a, b) {
    if (b === undefined) {
        return a;
    }
    return a + b;
}
var res = sum(5, 10);
console.log(res);
