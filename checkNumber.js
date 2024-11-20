function check(num1,num2){
if(num1%2==0&&num2%2==0)
    console.log("both is even");
else if(num2%2==0&&num1%2!=0)
    console.log("num2 is even and num1 is odd");
else if(num1%2==0&&num2%2!=0)
console.log("num1 is even and num2 is odd ");
else 
console.log("both is odd")
}
check(4,5);