const input = require("readline-sync");
 let a = input.questionInt("enter first number: ");
 let b = input.questionInt("enter second number: ");
 let c = input.questionInt("enter third number: ");
 if(a>b ){
    l=a;
 }
 else{l=b;}
 if(l>c){
    l1=l;
 }
 else{
    l1=c
 }
 console.log("l1 is greater",l1);