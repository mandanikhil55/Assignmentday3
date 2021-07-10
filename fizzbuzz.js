/** 
 NUMBER divides by:
        3 - Fizz
        5 - Buzz
        15 - FizzBuzz
        else - Number
**/
for(i=1;i<=100;i++){
  if(Number.isInteger(i/15)){
    console.log("Fizz Buzz")
  }else if(Number.isInteger(i/3)){
    console.log("Fizz")
  }else if(Number.isInteger(i/5)){
    console.log("Buzz")
  }else{
    console.log(i);
  }
}