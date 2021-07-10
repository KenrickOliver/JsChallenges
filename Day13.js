// Day #13 of JS

/* #1 Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers 
that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers 
less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
    let arr = []
    if (num > 2){
      arr.push(1)
      arr.push(1)
      for(let i = 2; i < 50; i++){
        arr[i] = arr[i-1] + arr[i-2]
      }
    }
    
    let ans = arr.filter((item)=>{
      if(item <= num && item%2 !== 0){
        return item;
      }
    }).reduce((a,b)=> {
      return a+b;
    },0);
    
    return ans;
  }
  
  sumFibs(75025);

  /* #2 Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 and 2. 
In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
Rewrite sumPrimes so it returns the sum of all prime numbers 
that are less than or equal to num.  
*/

function sumPrimes(num) {
    let numbers = []; //empty numbers array to store values
  
  // Function to test if a given number is prime or not
    function isPrime(num) {
      for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
      return num > 1;
  }
  
  //for loop to num and push prime numbers into numbers array
    for(let i=2; i < num+1; i++){
      numbers.push(isPrime(i) === true ? i : 0)
    }
  
    // Sum all the values in numbers array 
    let ans = numbers.reduce((a,b) =>{
      return a+b;
    },0)
    
    return ans;
  }
  
  sumPrimes(10);