/************************************************************ 
Calculating with Functions

Task:
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

    seven(times(five())); // must return 35
    four(plus(nine())); // must return 13
    eight(minus(three())); // must return 5
    six(dividedBy(two())); // must return 3

Requirements:
* There must be a function for each number from 0 ("zero") to 9 ("nine")
* There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
*Each calculation consist of exactly one operation and two numbers
*The most outer function represents the left operand, the most inner function represents the right operand
*Division should be integer division. For example, this should return 2, not 2.666666...:
    eight(dividedBy(three()));
*************************************************************/

// Operations
let plus = (num=0) =>  ['+',num]
let minus = (num=0) => ['-',num]
let times = (num=1) => ['*',num]
let dividedBy = (num=1) => ['/',num]
 
// Numbers
let zero = (arr) => operator(0, arr)
let one = (arr) => operator(1, arr)
let two = (arr) => operator(2, arr)
let three = (arr) => operator(3, arr)
let four = (arr) => operator(4, arr)
let five = (arr) => operator(5, arr)
let six = (arr) => operator(6, arr)
let seven = (arr) => operator(7, arr)
let eight = (arr) => operator(8, arr)
let nine = (arr) => operator(9, arr)


// Calculation
function operator(num1, arr) {
    if ( arr === undefined) return num1
    
    let op = arr[0]
    let num2 = arr[1]
    switch (op) {
        case '+' :return num1 + num2
        case '-': return num1 - num2
        case '*': return num1 * num2
        case '/': return Math.floor(num1 / num2)
    }
}
