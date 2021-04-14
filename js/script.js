//1
function myFunction() {
  var txt;
  var person = prompt("Please enter your name:", "name");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Hello " + person ;
  }
  document.getElementById("demo").innerHTML = txt;
}


//2

function myFunction1() {
  var txt;
  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}
//3
function myFunction2() {
  alert("I am an alert box!");
}

//4
function myFunction3() {
 alert('Hello\nHow are you?');
}
//5

function myFunction4() {
  alert('Hello');
}

//6
function myFunction5() {
  alert("Hello");
}
//7,8

var myVar = setInterval(myTimer ,1000);
function myTimer() {
  var d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}
//9
document.getElementById("app").innerHTML = 
"Navigator.appName is " + navigator.appName;


//10


document.getElementById("code").innerHTML = 
"navigator.appCodeName is " + navigator.appCodeName;
//11
function newDoc() {
  window.location.assign("https://nusratjmim.com/")
}

//12
document.getElementById("size").innerHTML = 
"Screen width is " + screen.width;

//13