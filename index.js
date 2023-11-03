1.//***---------------for loop in javascript (0,1,2,3,-----100)
// for (let x = 0; x <= 100; x++) {
//     console.log(x);
// }
// //-------------- for loop in javascript (1,3,5,----99)
// for(let a = 1 ; a<=99 ; a=a+2){
//     console.log(a);
// }
// //--------------(2,4,6-----100)
// for (let index = 2; index <= 100; index = index+2) {
//    console.log(index);
// }
// //------------- for loop in javascript (10,9,8 ------0)
// for (let z=10 ; z>=0 ; z= z-1){;
//     console.log(z);
// }
//-----------for loop in javascript (1+2+3+-----10)
// sum = 0;
// for(let i= 1 ; i<=10 ; i++){
//    sum = sum + i;
// }
// console.log(sum);

//or,,,,,,,,,,
// let a= parseInt(prompt("Enter starting number"))
// let b = parseInt(prompt("Enter ending number"))
// let sum = 0;
// for (let i = a; i<=b ; i=i+1) {
//     sum = sum + i;
//     console.log(sum); 
//}
//----------for loop in javascript
// for (let x = 1; x <=5; x++) {
//     let num1 = parseInt(prompt("Enter first number"));
//     let num2 = parseInt(prompt("Enter second number"));
//     let num3 = parseInt(prompt("Enter third number"));
//     let sum = (num1 + num2 + num3);
//     console.log("Result =",sum);
// }

2.//***-------while loop in javascript(0,1,2,---100)
// let a= 0;
// while(a<=100){
//     console.log(a);
//     a++;
// }
//-------while loop in javascript(1,3,5,---99)
// let x = 1;
// while (x<=99) {
//     console.log(x);
//     x=x+2;
// }
//-------while loop in javascript(2,4,6,---100)
// let i = 2;
// while (i<=100) {
//     console.log(i);
//     i = i+2
// }
//-------while loop in javascript(1+2+3----10)
// let a = 1;
// let sum = 0;
// while (a<=100) {
//     sum = sum + a;
//     a = a+1;
// }
// console.log(sum);
//-------while loop in javascript(2+4+6----20)
// let x = 2;
// let sum = 0;
// while (x<=20) {
//     sum = sum + x;
//     x= x+2;
// }
// console.log(sum);
//
// ------------A program that will find sum of all numbers from 1 to 100 that are divisible by 3 and 5 
// let i = 1;
// let sum = 0;
// while (i<=100) {
//     if (i%3 == 0 && i%5==0) {
//         console.log(" " , i);
//         sum = sum + i;
//     }
//     i = i+1;
// }
// console.log(" " , sum);

3.//*** ----------------do-while loop in javascript(1,2,3----20)
// let x =1;
// do {
//     console.log(x);
//     x= x+2;
// } while (x<=20);

4.//*** -----------break and continue

// for (let i = 1; i<=100; i++) {
//     if (i==11) {
//         break;
//     }
//     console.log(i);
// }       //if condition ar moddhe ja dwa hbe ta true hlei break kaj korbe..tokhon pura loop thke ber hye jbe..

// for (let i = 1; i<=10; i++) {
//     if (i==8) {
//         continue;
//     }
//     console.log(i);
// }       //condition true hle sudhu tokhon continue kaj krbe and abaro loop check krbe..


//------continue(2,4,6,---100)
// for (let i = 1; i<=100; i++) {
//     if (i%2 !==0) {
//         continue;
//     }
//     console.log(i);
// }
//------continue(1,3,5,---99)
// for (let x = 1; x<=100; x++) {
//     if (x%2==0) {
//         continue;
//     }
//     console.log(x);
// }