// console.log("SRIT")
// data types in js
// primitive data types
// num=40;
// str="ji";
// bool=true;
// bigint=9007199254740991n;
// undef;
// nulll=null;

// //var let const
// var name1="srit";
// console.log(name1);
// var name2="sri";
// console.log(name2);
// let name3="bindu";
// console.log(name3);
// name3="hema";
// console.log(name3);
// const name4="raji";
// console.log(name4);
// // name4="bargavi";//error
// // console.log(name4);

// //funtions
// function generateWelcomeMessage(name){
//     return "Welcome "+name;
// }
// let msg=generateWelcomeMessage("Sresta");
// console.log(msg);
// console.log("Create with",name4,"and",name3);
// function mydata(name,rollno){
//     return "My name is "+name+" and my rollno is "+rollno;
// }
// console.log(mydata("bindu",23));

// //operators
// function player(name,score){
//     console.log("Player name",name,"\naddscore:",score+23, "\nsubscore:",score-23);
// }
// player("tae",100);
// //calculate area using a function
// function area(length,breadth){
//     return length*breadth;
// }
// console.log(area(40,20));
// // let heading=document.getElementById("heading");
// // console.log(heading);
// //factorial of a number

// let fact=1;
// function factorial(num){
//     for(let i=1;i<=num;i++){
//         fact=fact*i;
//     }
//     return fact;
// }
// console.log("Factorial ", factorial(5));
// //develop a calculator for addition, subtraction,multiplicayion,division using functions
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// function mul(a,b){
//     return a*b;
// }
// function div(a,b){
//     if(b===0){
//         return "Division by zero is not possible";
//     }
//     return a/b;
// }
// function mod(a,b){
//     return a%b;
// }
// console.log("Addition:",add(40,20));
// console.log("Subtraction:",sub(40,20));
// console.log("Multiplication:",mul(40,20));
// console.log("Division:",div(40,20));
// console.log("Modulus:",mod(40,20));

// //compound interest
// function compound(p,r,t){
//     return p*(Math.pow((1+r/100),t));
// }
// console.log("Compound Interest:",compound(10000,10,2));
// //simple interest
// function simple(p,r,t){
//     return (p*r*t)/100;
// }
// console.log("Simple Interest:",simple(10000,10,2));
// age=21;
// if(age>18){
//     console.log("Eligible to vote");
// }else{
//     console.log("your are not eligible");
// }
// //calculator using only if conditions
// let num1=40;
// let num2=20;
// let operator="+";
// if(operator==="+"){
//     console.log("Addition:",num1+num2);
// }else if(operator==="-"){
//     console.log("Subtraction:",num1-num2);
// }else if(operator==="*"){
//     console.log("Multiplication:",num1*num2);
// }else if(operator==="/"){
//     console.log("Division:",num1/num2);
// }
// else if(operator==="%"){
//     console.log("Modulus:",num1%num2);
// } else{
//     console.log("Invalid operator");
// }

// let heading=document.querySelectorAll(".heading");
// console.log(heading);
// console.dir(heading);
// let marks=99;
// let grade;
// if(marks>=90 && marks<=100){
//     grade="A";
// }else if(marks>=80 && marks<90){
//     grade="B";
// }else if(marks>=70 && marks<80){
//     grade="C";
// }else if(marks>=60 && marks<70){
//     grade="D";
// }else if(marks>=50 && marks<60){
//     grade="E";
// }else if(marks>=0 && marks<50){
//     grade="F";
// }else{
//     grade="Invalid marks";
// }
// console.log("Grade:",grade);

//A person is travelling from A to B,  at a speed of 30, speed is doubled at every 10 minutes,he travelled for 96 minutes,maximum speed is 120,what will be the distance between A to B and the answer is 167 km ,now write in the form of code
// speed=30 kmph
// every 10 km speed=speed*2
// max speed=120 kmph
// time travelled =96 minutes

//A person is travelling from A to B with a speed of 30 kmph. The speed is doubled every 10 minutes, and the maximum speed is capped at 120 kmph. If the person travels for a total of 96 minutes, calculate the distance between A and B.The answer is 168 km. Write a code to solve this problem.
let speed=30;
let distance=0;
for(i=10;i<=90;i+=10){
    distance=distance+speed/6;
    if(speed<120){
        speed=speed*2;
    }
    
}
distance=distance+speed/10;
    console.log(distance);
//basic pay of auto is 30 rupees for 4 km ,for the next 5 km the price is 10 rupees,for the next 10 km the price is 15 rupees,if km are more than that the price will be 20 rupees,user travelled for 19.5 km , what will be the total price
let travelledDistance=19.5;
let totalPrice=0;
if(travelledDistance<=4){
    totalPrice=30;
}else if(travelledDistance<=9){
    totalPrice=30+(travelledDistance-4)*10;
}else if(travelledDistance<=19){
    totalPrice=30+50+(travelledDistance-9)*15;
}else{
    totalPrice=30+50+150+(travelledDistance-19)*20;
}
console.log("Total price:",totalPrice);
//while loop 
let j=1;
while(j<=10){
    console.log("5 x",j,"=",5*j);
    j++;
}
//DOM manipulation
let heading=document.getElementById("heading");
heading.textContent="This is a new heading";
const newParagraph=document.createElement("p");
newParagraph.textContent="This is a new paragraph added using js";
heading.appendChild(newParagraph);
heading.addEventListener("click",()=>{
    alert("heading clicked");
})
