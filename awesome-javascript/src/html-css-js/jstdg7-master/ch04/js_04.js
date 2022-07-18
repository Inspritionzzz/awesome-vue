let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr);

let arr2 = [1, , , ,5];
console.log(arr2);

let p = { x: 2.3, y: -1.2 };  // An object with 2 properties
let q = {};                   // An empty object with no properties
q.x = 2.3; q.y = -1.2;        // Now q has the same properties as p
console.log(q.x);

let rectangle = {
  upperLeft: { x: 2, y: 2 },
  lowerRight: { x: 4, y: 5 }
};
console.log(rectangle)

let squre = function (x) {
  return x * x;
}
console.log(squre(10));

let o = {x: 1, y: {z: 3}}; // An example object
let a = [o, 4, [5, 6]];    // An example array that contains the object
console.log(o.x, o.y.z, o["x"], a[1], a[2]["1"], a[0].x);

console.log("1" + 1);
