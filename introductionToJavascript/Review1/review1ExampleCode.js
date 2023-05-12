// ---------------- Array in a for loop ---------------- \\
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let n = 0;

for (let i in x) {
console.log(n, x[n]);
  n++
}


// ---------------- Array in a while loop ---------------- \\
let y = [1, "xyz", 3, 4, 5, "xyz", 7, 8, 9, 0];
let index = 0;

while (typeof y[index] !== "string" && index < y.length) {
  j = y[index];
  index++;
}
console.log("String detected at index: ", index);


// ---------------- Object in a for loop ---------------- \\
const a = {
  d: 1,
  e: 2,
  f: 3,
  g: 4,
  h: 5,
}

for (let property in a) {
  console.log(property, a[property]);
}

// ---------------- Object in a while loop ---------------- \\
const b = {
  one: "q",
  two: 2,
  three: undefined,
  four: 4,
  five: "t",
}

keys = Object.keys(b);

let count = 0;
let k = keys[0];
while (count < keys.length && typeof b[k] !== "undefined") {
  k = keys[count];
  count++
}

  console.log("The value of the key:", k, "is undefined");




