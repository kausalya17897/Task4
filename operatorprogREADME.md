//Square of a number
var a=5;
console.log(Math.pow(a,2));//inbulid method
console.log(a*a);//primitive method
//Swapping 2 numbers
function swap(x,y)
{
    console.log("before swap");
    console.log(x,y)
    let temp=x;
    x=y;
    y=temp;
    console.log("after swap");
    console.log(x,y);
}
swap(3,4);
//Addition of 3 numbers
let b=1,c=2,d=3;
console.log("add",b+c+d);
//Celsius to Fahrenheit conversion
var deg=32;
console.log("deg",deg*1.8+32);
//Meter to miles
//1mile=1600meter
var mile=2;
console.log("miles",mile/1600);
//Pounds to kg
var pound=2;
console.log("pounds",pound*0.45359237);
//Calculate Batting Average
var runs=50;
var out=2;
console.log("batting avg",runs/out);
//Calculate five test scores and print their average
var test_scores=[10,34,89,44,33]
console.log(test_scores.reduce((curr,sum)=>sum+curr,0));
//Power of any number x ^ y.
console.log(Math.pow(2,3));
//Calculate Simple Interest
let pi=100,n=2,r=2;
console.log((pi*n*r)/100);
//Calculate area of an equilateral triangle
var side=2;
console.log((Math.pow(3,0.5)/2)*side*side);
//Area Of Isosceles Triangle
let base=5,height=2;
console.log((base*height)/2);
//Volume Of Sphere
var r=2;
console.log((4/3)*3.14*r*r*r);
//Volume Of Prism
var basee=2,heightt=3;
console.log(basee*heightt);
//Find area of a triangle
var bse=3,hgt=2;
console.log((bse*hgt)/2);
//16)Give the Actual cost and Sold cost, Calculate Discount Of Product
//using func
var discperc=function(cp,sp){
    return (cp-sp)*100/cp;
}
console.log(disperc(100,90));
//Given their radius of a circle and find its diameter, circumference and area.
var dia=function(r){
    console.log(2*r);
}
var circum=function(r){
    console.log(Math.pi*r);
}
var area=function(r){
    console.log(Math.pi*r*r);
}
//Given two numbers and perform all arithmetic operations.
var arith=function(a,b){
    console.log("+",a+b);
    console.log("-",a-b);
    console.log("*",a*b);
    console.log("/",a/b);
}
arith(10,2);

//Display the asterisk pattern as shown below(No loop needed):
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");

//with loop
for(var i=0;i<5;i++){
    var sum="";
  for(var j=0;j<5;j++){
    sum=sum+"*"
}console.log(sum);

}

//Calculate electricity bill?
var bill=function(wph,days){
    return((wph*24*days)/1000)*10;
};
console.log(bill(100,30));

//Program To Calculate CGPA
var cgpa=function(marks){
    var tot=0;
    for(let val of marks){
        tot+=val;
    }
    return tot/marks.length;
};
console.log(cgpa([1,2,3,4]));
