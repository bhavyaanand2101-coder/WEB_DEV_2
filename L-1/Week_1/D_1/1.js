// Array
// 1. Collection of different elements
// 2. Ordered list of items
// 3. index-based access
// 4. dynamic sizing
// 5. mutable
// 6.non-primitive


/*// 1. Creation
let arr1 = new Array(); // using Array constructor
let arr2 = []; // using array literal

// 2. Accessing elements
let firstElement = arr2[0]; // access first element
let secondElement = arr2[1]; // access second element

// 3. Modifying elements
arr2[0] = 'Hello'; // modify first element
arr2[1] = 'World'; // modify second element

// 4. Adding elements
arr2.push('!'); // add element at the end
arr2.unshift('Greetings'); // add element at the beginning

// 5. Removing elements
arr2.pop(); // remove last element
arr2.shift(); // remove first element

// 6. Iterating over elements
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]); // traditional for loop
}

arr2.forEach(element => {
    console.log(element); // forEach method
});

for (let element of arr2) {
    console.log(element); // for...of loop
}

// 7. Common methods
let length = arr2.length; // get length of array
let index = arr2.indexOf('World'); // find index of an element
let slicedArray = arr2.slice(0, 2); // slice array from index 0 to 2
let splicedArray = arr2.splice(1, 1, 'Everyone'); // remove 1 element at index 1 and add 'Everyone'

// 8. Multidimensional arrays
let multiArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let elementAtRow1Col2 = multiArr[1][2]; // access element at row 1, column 2 (value: 6) 
*/

// CRUD Operations on Array
// 1. create 
let array = [10, 20, 30, 40, 50];
// 2. read
console.log(array[2]); // Output: 30
// 3. update
array[2] = 35;
console.log(array); // Output: [10, 20, 35, 40, 50]
// Rhs- push
// Lhs- pop

// 4. delete
array.splice(1, 1); // removes element at index 1
console.log(array); // Output: [10, 35, 40, 50]
// shift- remove from start
// unshift- add from start
