document.getElementById("title").innerHTML = "Adesh";
document.getElementById("title").style.color = "red";
function show() {
  console.log("Button Clicked");
}
function test() {
  console.log("Test function called");
}

// auto-run Test when the script loads
test();

document.getElementById("title").style.color = "red";
document.getElementById("title").style.fontSize = "24px";
document.getElementById("title").style.fontFamily = "Arial, sans-serif";
document.getElementById("title").style.backgroundColor = "yellow";

function showmsg() {
  alert("Hello, welcome to my website!");
}
function showname() {
  //function to show an alert with the user's name
  let text = document.getElementById("name").value; //get the value of the input field with id "name"
  alert("Hello " + text + ", welcome to my website!"); //show an alert with the user's name
}
