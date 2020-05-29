// kata 01
//Write a function named "add" which takes two arguments (as input variables) and returns their sum.
//You may use built-in operators in order to finish this kata.
//For example, calling add(2, 4) should return a result of 6.


function add (x, y) {
    return x + y
  }
 console.log(add(2,4))


 //Kata 02
 //Write a function named "multiply" which takes two arguments (as input variables) and returns their product.
//You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will use a FOR loop which calls your add function from the first kata.For example, calling multiply(6, 4) should return a result of 24, which could be expressed by adding 6 to itself 4 times:


function multiply (x,y) {
    let total = 0
    for (let index = 0; index < y; index +=1) {
        total = add(x,total)

    }
    return total
}
    
    console.log(multiply(6,4))
//function multiply(a, b){
    //return ("i").repeat(a).repeat(b).length    


  //  kata 03
  //Write a function named "power" which takes two arguments ( x and n) and returns the the result of raising x to the nth power.
//You may not use built-in math operators or functions (such as the * multiplication operator), or the ** operator for power/exponentiation). Instead, you will re-use functions you wrote in earlier katas to write this function.
//For example, if we called power(2, 8), we should return 256 by multiplying 2 by itself 8 times:
    
   // function math.pow(x, n) 
   
   function power (x,n) {
    let total = 1
    for (let index = 0; index < n; index +=1) {
        total = multiply(x,total)

    }
    return total
}
    
    console.log(power(2,8))


    function power (x,n) {
        let total = 1
        for (let index = 0; index < n; index +=1) {
            total = multiply(x,total)
    
        }
        return total
    }
        
        console.log(power(3,4))



    //Write a function named "factorial" which takes a single argument and returns the factorial of that value.
//You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will re-use functions you wrote in earlier katas to write this function.
//A factorial multiplies a given number by every number below it. For example, "5 factorial" (usually symbolized by 5! in Mathematics) would be:
//5 * 4 * 3 * 2 * 1 = 120
//For example, calling factorial(4) should return a result of 24.

function factorialize(x){
    let result = 1;
    if (x == 0 || x == 1){
      return result;
    }else{
      for(let index = x; index >= 1; index--){
        result = multiply (result,index);
      }
      return result;
    }
}


 
    console.log(factorialize(5))
