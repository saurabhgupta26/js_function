1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.

```js
// your code goes here
function calculateDogAge(puppyAge, humanAge) {
  let dogYears = puppyAge*7;
  let humanYears = humanAge/7;
  console.log(dogYears);
  console.log(humanYears);
  alert(`Your doggie is ${dogYears} years old in dog years!`);
}
calculateDogAge(5,56);

```
2. 🎖Write a function named calculateSupply that:
  * [ ] takes 2 arguments: age, amount per day.
  * [ ] calculates the amount consumed for rest of the life (based on a constant max age).
  * [ ] outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
  * [ ] Accept floating point values for amount per day, and round the result to a round number.

```js
// your code goes here
let calculateSupply = function (age, amountPerDay) {
  let totalCalorie = ((80-age)*365) *amountPerDay;
  let roundCalorie = Math.round(totalCalorie);
  console.log( `You will need ${roundCalorie} to last you until the ripe old age of 80`);
  alert(`You will need ${roundCalorie} to last you until the ripe old age of 80`);
  }

calculateSupply(25, 25.65);

```
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Store a celsius temperature into a variable.
  * [ ] Convert it to fahrenheit and output "NN°C is NN°F".
  * [ ] Create a function called fahrenheitToCelsius:
  * [ ] Now store a fahrenheit temperature into a variable.
  * [ ] Convert it to celsius and output "NN°F is NN°C."

```js
// your code goes here
let celsiusToFahrenheit = function(temp){
  let tempChange = (temp * 9/5) + 32;
  alert(`${temp}°C is ${tempChange}°F`);
}
celsiusToFahrenheit(37);

let fahrenheitToCelsius = function(temp){
  let tempChange = (temp - 32) * 5/9;
  alert(`${temp}°F is ${tempChange}°C`);
}
celsiusToFahrenheit(99);

```
4. 🎖The function below returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result:

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}
```
  4.1 🎖Convert the above function using ternary operator.
  ```js
  // your code goes here
  function checkAge(age) {
  return age > 18 ? true : "Did your parents allowed you?";
}
checkAge(22);



  ```

  4.2 🎖Convert the above function using `||` operator.
  ```js
  // your code goes here
  function checkAge(age) {
  return (age > 18) || "Did your parents allowed you?";
}
checkAge(22);

  ```
Will the function work differently if else is removed like below?

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}

No, the function will work normally. 
```
Is there any difference in the behavior of these two variants? If there is what is that?


5. 🎖 Write a function pow(x,n) that returns x in power n.

  * [ ] Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
  * [ ] In this task the function should support only natural values of n: integers greater then 1.

```js
// Your code goes here

// After writing code uncomment to check the answer.
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

let x = prompt("Enter the number");
x = Number(x);
let n = prompt("Enter the power");
n = Number(n);

let pow = function(x,n) {
x < 0 ? "The number below 1 is not allowed" : x ** n;
}
alert( pow(x,n) );


```

6. 🎖Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n. Return the result accordingly.

```js
// your code goes here
let n = prompt(`Provide with a number`);
n = Number(n);
let total = 0;
let totalProduct = 1;
let possibility = prompt(`What do you want to do? Sum or computing the product`, `sum or product`);
let i = 1;
if (possibility === "sum") {
  for (i = 1; i <= n; i++) {
    total = total + i;
  }
  console.log(total);
} else {
  for (i = 1; i <= n; i++) {
    totalProduct = totalProduct * i;
  }
  console.log(totalProduct);
}



```
6. 🎖Write a program that asks the user for a number n using prompt and prints the sum of the numbers 1 to n

```js
// your code goes here
let n = prompt(`Provide with a number`);
n = Number(n);
let total = 0;
for (let i = 1; i <= n; i++) {
    total = total + i;
  }
  console.log(total);


```
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

```js
// your code goes here
let n = prompt(`Provide with a number`);
n = Number(n);
let total = 0;
for (let i = 1; i <= n; i++) {
  if (i % 5 === 0 || i % 7 === 0) {
    total = total + i;
  }
  console.log(total);
}


```

8. 🎖Write a function `min` that takes two arguments and returns their minimum.

```js
// Your code here.
let n = prompt(`Provide with 1st number`);
n = Number(n);
let m = prompt(`Provide with 2nd number`);
m = Number(m); 
function min (n,m) {
  if (n>m) {
  console.log(m);
}
else console.log(n);
}
min(m,n);
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
```