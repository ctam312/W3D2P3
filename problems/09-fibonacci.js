/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!
//array[]
Examples:

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(10); // 55
***********************************************************************/



function fibonacci(n, poop = [0,1]) {
<<<<<<< HEAD
  // Your code here
  if (poop.length === (n + 1)){
    return poop[n]
  } else {
    poop.push((poop[poop.length - 2]) + (poop[poop.length - 1]) )
    return fibonacci(n, poop)
=======
  // Your code here - with default parameters
  // debugger
  // if (poop.length === (n + 1)){
  //   debugger
  //   return poop[n]
  // } else {
  //   poop.push((poop[poop.length - 2]) + (poop[poop.length - 1]) )
  //   debugger
  //   return fibonacci(n, poop)
  // }

//without default parameters
  if (n<=2){
    debugger
    return 1
  }
  else {
  let num1 = fibonacci(n-1)
  debugger
  let num2 = fibonacci(n-2)
  debugger
  return num1+num2
>>>>>>> refs/remotes/origin/main
  }

}

fibonacci(4)
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = fibonacci;
