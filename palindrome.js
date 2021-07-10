/** 
 check the given words of a given sentance  are palindrome or not
**/
str="madam is driving a racecar"
str+=" "
word=""
reverse=""
for(i of str){
  if(i!=" "){
    reverse=i+reverse
    word+=i
  }else{
    if(word == reverse){
      console.log(word+"---is a palindrome..")
    }else{
      console.log(word+"---is not a palindrome..")
    }
    word=""
    reverse=""
  }
}