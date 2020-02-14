// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
//function Declaration for addition
function addition(n) {
	return n+1;
};
// fuction Expression for addition
let addition = function(n) {
	return n+1;
};
//Arrow Function
let addition = n => return n+1;

// Arrow Function With Curly Bracket

let addition = n => {
  return n+1;
};
//function Invocation
addition(2); // 3
/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
//function Declaration for subtraction
function subtraction(n) {
	return n-1;
};
// fuction Expression for subtraction
let subtraction = function(n) {
	return n-1;
};
//Arrow Function
let subtraction = n => return n-1;

// Arrow Function With Curly Bracket

let subtraction = n => {
  return n-1;
};
//function Invocation
subtraction(5); // 4

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
//function Declaration for addition
function addition(x,y) {
	return x+y;
};
// fuction Expression for addition
let addition = function(x,y) {
	return x+y;
};
//Arrow Function
let addition = x,y => return x+y;

// Arrow Function With Curly Bracket

let addition = x,y => {
  return x+y;
};
//Function Invocation
addition(5,7); // 12
/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
//function Declaration for subtraction
function subtraction(x,y) {
	return x-y;
};
// fuction Expression for subtraction
let subtraction = function(x,y) {
	return x-y;
};
//Arrow Function
let subtraction = x,y => return x-y;

// Arrow Function With Curly Bracket

let subtraction = x,y => {
  return x-y;
};
//Function Invocation
subtraction(8-2); // 6


/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
//function Declaration for multiply
function multiply(x,y) {
	return x*y;
};
// fuction Expression for multiply
let multiply = function(x,y) {
	return x*y;
};
//Arrow Function
let subtraction = x,y => return x*y;

// Arrow Function With Curly Bracket

let subtraction = x,y => {
  return x*y;
};
//Function Invocation
multiply(8*2); // 16

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
//function for divide
let divide = function(x,y) {
	return x/y;
};
divide(20/2); // 10

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
//function Declaration for division
function division(x,y) {
	return x/y;
};
// fuction Expression for division
let division = function(x,y) {
	return x/y;
};
//Arrow Function
let division = (x,y) => return x/y;

// Arrow Function With Curly Bracket

let division = (x,y) => {
  return x/y;
};
//Function Invocation
multiply(8/2); // 4
/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
//function Declaration Calculator
function calc(x, y, operation) {
	switch (operation) {
	  case "add":
		console.log(`${x} + ${y} = ${x+y}`);
		return x + y;
	  case "subtract":
		console.log(`${x} - ${y} = ${x-y}`);
		return x - y;
	  case "multiply":
		console.log(`${x} * ${y} = ${x*y}`);
		return x * y;
	  case "divide":
		console.log(`${x} / ${y} = ${x/y}`);
		return x / y;
	}
  }
  calc(5, 2, "multiply");
  
// fuction Expression for Calculator
```js
let calc2 = function(x, y, operation) {
	switch (operation) {
	  case "add":
		console.log(`${x} + ${y} = ${x+y}`);
		return x + y;
	  case "subtract":
		console.log(`${x} - ${y} = ${x-y}`);
		return x - y;
	  case "multiply":
		console.log(`${x} * ${y} = ${x*y}`);
		return x * y;
	  case "divide":
		console.log(`${x} / ${y} = ${x/y}`);
		return x / y;
	}
  }
  calc2(5, 2, "multiply");
  ```
  // Arrow Function With Curly Bracket
  ```js
  let calc3 = (x, y, operation) => {
	switch (operation) {
	  case "add":
		console.log(`${x} + ${y} = ${x+y}`);
		return x + y;
	  case "subtract":
		console.log(`${x} - ${y} = ${x-y}`);
		return x - y;
	  case "multiply":
		console.log(`${x} * ${y} = ${x*y}`);
		return x * y;
	  case "divide":
		console.log(`${x} / ${y} = ${x/y}`);
		return x / y;
	}
  };
  calc3(5, 2, "multiply");
  ```
  /**
   * Returns true if `
  a ` is greater than `
  b `.
   * @param {number} a
   * @param {number} b
   * @return {boolean} `
  a ` is larger than `
  b `
   */
  ```js
  //Function Declaration for greater value
  function greater(x, y) {
	if (x > y) {
	  console.log(`${x} is greater than ${y}`);
	  return true;
	} else {
	  console.log(`${y} is greater than ${x}`);
	  return (false);
	}
  }
  greater(6, 8);
  
  // fuction Expression for greater
  let greater = function(x, y) {
	if (x > y) {
	  console.log(`${x} is greater than ${y}`);
	  return true;
	} else {
	  console.log(`${y} is greater than ${x}`);
	  return (false);
	}
  }
  greater(6, 8);
  
  // Arrow Function With Curly Bracket
  let greater = (x, y) => {
	if (x > y) {
	  console.log(`${x} is greater than ${y}`);
	  return true;
	} else {
	  console.log(`${y} is greater than ${x}`);
	  return (false);
	}
  };
  greater(6, 8);
  
  ``
  `
  /**
   * Returns true if `
  a ` is less than `
  b `.
   * @param {number} a
   * @param {number} b
   * @return {boolean} `
  a ` is smaller than `
  b `
   */
  
  `
  ``
  js
  //Function Declaration for greater value
  function greater(x, y) {
	if (x < y) {
	  console.log(`${x} is greater than ${y}`);
	  return true;
	} else {
	  console.log(`${y} is greater than ${x}`);
	  return false;
	}
  }
  greater(6, 8);
  
  // fuction Expression for greater value
  let greater = function(x, y) {
	if (x < y) {
	  console.log(`${x} is greater than ${y}`);
	  return true;
	} else {
	  console.log(`${y} is greater than ${x}`);
	  return false;
	}
  }
  greater(6, 8);
  
  // Arrow Function With Curly Bracket
  let greater = (x, y) => {
	if (x < y) {
	  console.log(`${x} is greater than ${y}`);
	  return true;
	} else {
	  console.log(`${y} is greater than ${x}`);
	  return false;
	}
  };
  greater(6, 8);
  
  ``
  `
  
  /**
   * Returns true if `
  a ` and `
  b ` are equal.
   * @param {number} a
   * @param {number} b
   * @return {boolean} the numbers are equal
   */
  
  `
  ``
  js
  
  //Function Declaration for greater value
  function greater(x, y) {
	if (x === y) {
	  console.log(`the numbers are equal`);
	  return true;
	} else {
	  console.log(`the numbers are not equal`);
	  return false;
	}
  }
  greater(5, 5);
  
  // fuction Expression for greater
  let greater = function(x, y) {
	if (x === y) {
	  console.log(`the numbers are equal`);
	  return true;
	} else {
	  console.log(`the numbers are not equal`);
	  return false;
	}
  }
  greater(5, 5);
  
  // Arrow Function With Curly Bracket
  let greater = (x, y) => {
	  if (x === y) {
		if (x === y) {
		  console.log(`the numbers are equal`);
		  return true;
		} else {
		  console.log(`the numbers are not equal`);
		  return false;
		}
	  };
	  greater(5, 5);
  
	  ``
	  `
  
  
  /**
   * Returns the smallest value of two numbers.
   * @param {number} x
   * @param {number} y
   * @return {number} the smallest number
   */
  
  `
	  ``
	  js
  
	  //Function Declaration for smaller number
	  function smaller(x, y) {
		if (x > y) {
		  console.log(`${y}`);
		  return $ {
			y
		  };
		} else {
		  console.log(`${x}`);
		  return $ {
			x
		  };
		}
	  }
	  smaller(6, 8);
  
	  // fuction Expression for smaller number
	  let smaller = function(x, y) {
		if (x < y) {
		  console.log(`${x}`);
		  return $ {
			x
		  };
		} else {
		  console.log(`${y}`);
		  return $ {
			y
		  };
		}
	  }
	  smaller(6, 8);
  
	  // Arrow Function With Curly Bracket
	  let smaller = (x, y) => {
		if (x < y) {
		  console.log(`${x}`);
		  return $ {
			x
		  };
		} else {
		  console.log(`${y}`);
		  return $ {
			y
		  };
		}
	  };
	  smaller(6, 8);
  
	  ``
	  `
  
  /**
   * Returns the largest value of two numbers.
   * @param {number} x
   * @param {number} y
   * @return {number} the largest number
   */
  
  `
	  ``
	  js
	  //Function Declaration for larger number
	  function larger(x, y) {
		if (x > y) {
		  console.log(`${x}`);
		  return $ {
			x
		  };
		} else {
		  console.log(`${y}`);
		  return $ {
			y
		  };
		}
	  }
	  larger(6, 8);
  
	  // fuction Expression for larger number
	  let larger = function(x, y) {
		if (x > y) {
		  console.log(`${x}`);
		  return $ {
			x
		  };
		} else {
		  console.log(`${y}`);
		  return $ {
			y
		  };
		}
	  }
	  larger(6, 8);
  
	  // Arrow Function With Curly Bracket
	  let larger = (x, y) => {
		if (x > y) {
		  console.log(`${x}`);
		  return $ {
			x
		  };
		} else {
		  console.log(`${y}`);
		  return $ {
			y
		  };
		}
	  };
	  larger(6, 8);
  
	  ``
	  `
  
  /**
   * Returns true if `
	  n ` is even.
   * @param {number} n
   * @return {boolean} the number is even
   */
  `
	  ``
	  js
  
	  //Function Declaration for even
	  function even(n) {
		if (n % 2 === 0) {
		  alert(`Even`);
		  return true;
		}
	  }
	  even(6);
	  // fuction Expression for even
	  let even = function(n) {
		if (n % 2 === 0) {
		  alert(`Even`);
		  return true;
		}
	  }
	  even(8);
	  // Arrow Function With Curly Bracket
  
	  let even = (n) => {
		if (n % 2 === 0) {
		  alert(`Even`);
		  return true;
		}
	  };
	  even(22);
  
	  ``
	  `
  
   
  /**
   * Returns true if `
	  n ` is odd.
   * @param {number} n
   * @return {boolean} the number is odd
   */
  
  `
	  ``
	  js
	  //Function Declaration for odd
  
	  function odd(n) {
		if (n % 2 === 1) {
		  alert(`Odd`);
		  return true;
		}
	  }
	  even(5);
	  // fuction Expression for odd
	  let odd = function(n) {
		if (n % 2 === 1) {
		  alert(`Odd`);
		  return true;
		}
	  }
	  even(9);
	  // Arrow Function With Curly Bracket
  
	  let odd = (n) => {
		if (n % 2 === 1) {
		  alert(`Odd`);
		  return true;
		}
	  };
	  even(21);
	  ``
	  `
  
  /**
   * Returns a letter grade.
   * "A": 90-100%
   * "B": 80-89%
   * "C": 70-79%
   * "D": 60-69%
   * "F": 0-59%
   * @param {number} score
   * @param {number} total maximum possible score
   * @return {string} the score represented as a letter grade
   */
  ```js
//function declaration for grade  
	  function grade(score, maxMarks) {
		let percent = score / maxMarks * 100;
		switch (true) {
		  case (percent >= 90 && percent < 100):
			alert(`A`);
			break;
		  case (percent >= 80 && percent <= 89):
			alert(`Your grade is B`);
			break;
		  case (percent >= 70 && percent <= 79):
			alert(`Your grade is C`);
			break;
		  case (percent >= 60 && percent <= 69):
			alert(`Your grade is D`);
			break;
		  default:
			alert(`F`);
		}
	  }
	  grade(287, 400);
  
//function expression for grade
	  let grade = function(score, maxMarks) {
		let percent = score / maxMarks * 100;
		switch (true) {
		  case (percent >= 90 && percent < 100):
			alert(`A`);
			break;
		  case (percent >= 80 && percent <= 89):
			alert(`Your grade is B`);
			break;
		  case (percent >= 70 && percent <= 79):
			alert(`Your grade is C`);
			break;
		  case (percent >= 60 && percent <= 69):
			alert(`Your grade is D`);
			break;
		  default:
			alert(`F`);
		}
	  }
	  grade(287, 400);
  
// Arrow function with curly brackets
	  let grade = (score, maxMarks) => {
		let percent = score / maxMarks * 100;
		switch (true) {
		  case (percent >= 90 && percent < 100):
			alert(`A`);
			break;
		  case (percent >= 80 && percent <= 89):
			alert(`Your grade is B`);
			break;
		  case (percent >= 70 && percent <= 79):
			alert(`Your grade is C`);
			break;
		  case (percent >= 60 && percent <= 69):
			alert(`Your grade is D`);
			break;
		  default:
			alert(`F`);
		}
	  };
	  grade(287, 400);
  
	  /**
	   * Joins two strings with a space.
	   * @param {string} word1
	   * @param {string} word2
	   * @return {string} joined the words joined with a space
	   */
  
	  ``
	  `js
//function declaration for concatinate
  
  function concat(word1, word2) {
	  let fullWord = String(word1 + " " + word2);
	  console.log(fullWord);
	}	
	concat("bat", "man");
	
//function expression for concatinate
  let concat = function(word1, word2) {
	  let fullWord = String(word1 + " " + word2);
	  console.log(fullWord);
	}
	concat("bat", "man");
}
  
//Arrow Function with curly brackets
  let concat = (word1, word2) => {
	  let fullWord = String(word1 + " " + word2);
	  console.log(fullWord);
	};
	
	concat("bat", "man");  
```