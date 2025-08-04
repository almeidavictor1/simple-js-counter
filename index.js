//document.getElementById("myh1").textContent = "hello";
//document.getElementById("mypp").textContent = "QUALQUER COISA";

//let x;
//x = 100;
//console.log(x);

// let age = 18;
//let price = 10.99;

//let firstName = "Vic";
//console.log(firstName);
//console.log(`your name is ${firstName}`);

// console.log (typeof age);
// console.log (`Max is ${age} years old`);
// console.log (`the price is $${price}`);

//arithmetic operators


//let online = true;

//console.log(`vic is online: ${online}`);

//let fullname = "victor a";
//let age = 25
//let isstudent = false;

// document.getElementById("p1").textContent = `your name is ${fullname}`; 
// document.getElementById("p2").textContent = `your age is ${age}`; 
// document.getElementById("p3").textContent = `are you a student? ${isstudent}`; 

//let students = 30;

//students = students **2;
//let extraStudents = students % 3;   

//students += 2

//let result =  2 + 2

// console.log(result);

// How to accept user imput?

//let username;

// username = window.prompt("what is your name?");

// console.log(username);

//let username;

//document.getElementById("mysub").onclick = function(){
   // username = document.getElementById("mypp").value;
      //  document.getElementById("myh3").textContent = `Hello ${username}`;

//let x ; 
//let y ;
//let z ;

//x = Number(x);
//y = String(y);
//z = Boolean(z);

//console.log(x, typeof x);
//console.log(y, typeof y);
//console.log(z, typeof z);


//const PI = 3.14159;
//let radius;
//let circumference;

//document.getElementById("mysubmit").onclick = function(){
  //radius = document.getElementById("mytext").value;
  //radius = Number(radius);
  //circumference = 2 * PI * radius;
  //document.getElementById("myh4").textContent = circumference + "cm";
//}

const decreaseBtn = document.getElementById("decreaseBtn");
const ResetBtnBtn = document.getElementById("ResetBtn");
const IncreaseBtn = document.getElementById("IncreaseBtn");
const CountLabel = document.getElementById("CountLabel");
let count = 0

IncreaseBtn.onclick = function(){
  count++;
  CountLabel.textContent = count;
}
decreaseBtn.onclick = function(){
  count--;
  CountLabel.textContent = count;
}
ResetBtn.onclick = function(){
  count = 0;
  CountLabel.textContent = count;
}
