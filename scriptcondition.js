// let icecream = "chocolate";
// icecream = prompt("What is your favorite flavor of ice cream?");
// if (icecream === "vanilla") {
//   console.log("Vanilla is the best flavor!");
// } else if (icecream === "chocolate") {
//   console.log("Chocolate is the best flavor!");
// } else if (icecream === "strawberry") {
//   console.log("Strawberry is the best flavor!");
// } else {
//   console.log("That is a good flavor too!");
// }

// let age = 19;
// let nationality = "American";

// if (age > 18) {
//   console.log("You are eligible to vote");
// } else if (age === 18) {
//   console.log("You are just eligible to vote");
// } else {
//   console.log("You are not eligible to vote");
// }

let led = 1;
while (led <= 5) {
  console.log(led);
  led++;
}

let i = 10;

do {
  console.log("Hello");
} while (i < 5);

let students = {
  name: "Adesh",
  age: 20,
  grade: "A",
  college: "XYZ University",
};
for (let key in students) {
  console.log(students[key]);
}
