/* 
//excercise 1: Reverse a String
let str = 'Welcome';
function reverseStr(str)
{
    let sub = str.split('').reverse().join('')//
    return sub;
}
console.log(reverseStr(str)); //output: "elcomeW"
//excercise 1
// ----------------------------------------------------
// excercise 2: Palindrome Checker
let str2 = 'racecar'
function isPlaindrome(str)
{
    let bool = false;
    if(str === reverseStr (str))
    {
        bool = true;
    }
    return bool;
}
console.log(isPlaindrome(str2));

// excercise 2 
// ----------------------------------------------------
// exercise 3:FizzBuzz
function checkFizzBuzz(x)
{
    let sub = x;
    if(x % 3 == 0 || x === 3 )
        sub = "Fizz";
    if(x % 5 == 0 || x === 5)
        sub = "Buzz";
    if(x % 3 == 0 && x % 5 == 0)
        sub = "FizzBuzz";
    return sub;
}
for (let i = 1; i <= 100; i++) {
   console.log(checkFizzBuzz(i));
}
// exercise 3
// ----------------------------------------------------
// Exercise 4:Sum of Multiples
let x = 33, sum = 0;
function checkMultiples(x)
{
    let bool = false;
    if(x % 3 == 0 || x % 5 == 0)
    {
        bool = true;
    }
    return bool;
}
for(let i=1;i < x; i++)
{
    if(checkMultiples(i) == true)
    {
        sum += i;
    }
}
console.log(sum);
// Excercise 4
// ----------------------------------------------------
// Exercise 5:Prime Number Checker
function isPrime(n)
{
    if (n <= 1)
        return false;
    if (n == 2 || n == 3)
        return true;
    if (n % 2 == 0 || n % 3 == 0)
        return false;
    for (var i = 5; i <= Math.sqrt(n); i = i + 6)
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    return true;
}
let x = 17;
console.log(isPrime(x));
// Exercise 5
// --------------------------------------------------------
// Exercise 6:Fibonacci Sequence
function fibonaci(n)
{
    let x=[];
    x[0] = 0;
    x[1] = 1;
    x[2] = 1;
    for(let i = 3;i < n;i++)
    {
        x[i]=x[i - 1] + x[i - 2];
    }
    for(let i = 0; i < n;i++)
    {
        console.log(x[i],' ');
    }
}
fibonaci(8);
// Exercise 6
//----------------------------------------------------
// Exercise 7: Array Manipulation
const newArray : n = [1,2,3,4];
newArray = newArray.map((element : n) => element * 2);
console.log(newArray);
// Exercise 7
//----------------------------------------------------


// Exercise 8:Object Manipulation

// Exercise 8
//Exercise 9: Find the Longest Word
function findLongestWord(str) {
    let longestWord = str.split(' ').reduce(function(longest, currentWord) {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord.length;
  }
  let str = "The quick brown fox jumped over the lazy dog"
  console.log(findLongestWord(str));
  
//Exercise 9

////Exercise 10:Temperature Conversion
function cToF(celsius) 
{
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
    console.log(message);
}
cToF(22); 
// exercise 10
*/
