// function greet() {
//   console.log("Hello!");
// }
// greet();

// function greet(name) {
//   console.log(name);
// }
// greet("adesh")
// let fruits = ["Apple", "Mango","Banana", "Grapes"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// let i=1;
// while(i<=5){
//   console.log(i);
//   i++;
// }

// let name = "Adesh";
// console.log("hello", name);

// let car = [ {
//   name: "BMW",
//   model: "X5",
// } ];
// console.log(car[0].name);
function checkAge(age) {
  //function to check if a person is an adult or minor based on age
  if (age >= 18) {
    //if age is greater than or equal to 18, return "Adult"
    return "Adult"; //else return "Minor" if age is less than 18, return "Minor"
  }
  return "Minor";
}
console.log(checkAge(16)); //Output: "Minor"

//function + array

function getFirstEven(arr) {
  //function to get the first even number from an array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return arr[i];
    }
  }
  return null;
}

//function +  length
function count(arr) {
  //function to count the number of elements in an array
  return arr.length;
}
console.log(count([1, 2, 3, 4, 5])); //Output: 5

//function + includes
function hasfruit(arr, fruit) {
  //function to check if an array includes a specific fruit
  return arr.includes("mango");
}
console.log(hasfruit(["apple", "banana", "mango"])); //Output: true
console.log(hasfruit(["apple", "banana", "grapes"])); //Output: false

//function + loop
function printsum(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printsum();

//final logic check
function test() {
  for (let i = 1; i <= 4; i++) {
    if (i === 1) {
      console.log("one");
    } else if (i === 2) {
      console.log("two");
    } else if (i === 3) {
      console.log("three");
    } else {
      console.log("four");
    }
  }
}
test();
