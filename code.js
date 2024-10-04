
// ----------------------------------------------------
// Question:1
// --------------------------------------------------------
var num=prompt("enter number:")
var sum=0
var result=" "
for(var i=0;i<num.length; i++){
    if(i<num.length-1){
        result=result+num[i]+"+"
    }
    else{
        result=result+num[i]
    }
    sum=sum+ +num[i]
}
console.log("sum of given numbers"+result+"="+sum)
// -------------------------------------------------
// Question:2
// ----------------------------------------------------
var num=prompt('enter number')
var np=0
var prime=0
for(var i of num){
    if(i==1){
        np=np+1
    }
    for(var j=2; j<=i; j++){
        if(i%j==0 && i>2){
            np=np+1
            break
        }
        else{
            prime=prime+1
            break
        }
    }
}
if(np>prime){
    console.log("non prime numbers are more")
}
else if(np<prime){
    console.log("prime numbers are more")
}
else{
    console.log("non prime and prime numbers are equall")
}
// ------------------------------------------------------------
// Question:3
// ------------------------------------------------------------
var num=prompt("enter number=")
var sum=1
var result=" "
for(var j of num)
for(var i=j; i>0; i--){
    if(i>1){
        result=result+i+"*"
    }
    else{
        result=result+i
    }
    sum=sum*i
}
console.log("factorial of given number:"+result+"="+sum)

