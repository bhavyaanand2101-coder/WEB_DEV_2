// object 
// 1. combination of key-value pairs
// 2. key is always string data only and value dtata can be of any type
// 3. keys are unique, values can be duplicate
// 4. dynamic in nature
// 5. mutable
// 6. non-primitive


 let person = {
    name: "Alice",
    age: 30,
    isStudent: false,
    name: "Bhavya",
 };
 
 console.log(person.name); // Accessing property
 person.age = 31; // Modifying property
 person.city = "New York"; // Adding new property
 delete person.isStudent; // Deleting property
 Object.age = 55; // Incorrect way to modify property
 console.log(person);
    console.log(Object.age); // dot notation
    console.log(person["name"]); // bracket notation

// CRUD Operations on Object
// 1. create
let obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
};
// 2. read
console.log(obj.key2); // Output: value2
// 3. update
obj.key2 = "newValue2";
console.log(obj); // Output: { key1: 'value1', key2: 'newValue2', key3: 'value3' }
// 4. delete
delete obj.key3;
console.log(obj); // Output: { key1: 'value1', key2: 'newValue2' }
// Note: In objects, we don't have built-in methods like push/pop as in arrays.
