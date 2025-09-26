// function add(a: number, b: number): number {
function add(a, b) {
    // "noImplicitAny": false にすると警告無視できる
    return a + b;
}

//  "strictNullChecks": false すると警告無視できる
const x: number = null;
