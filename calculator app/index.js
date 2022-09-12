let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

// ADD function
function AddFun(){
    sumEl.textContent = "Result:  "
    let addSum =num1 + num2
    sumEl.textContent += addSum
    
}
// Subtract function
function SubtractFun(){
      sumEl.textContent = "Result:  "
      
    let subtractSum = num1 - num2
    sumEl.textContent+= subtractSum
}

//Divide function
function divideFun(){
     sumEl.textContent = "Result:  "
     let divideSum = num1 / num2
     sumEl.textContent+=divideSum
}
// multiply functon
function multiplyFun(){
    sumEl.textContent ="Result:  "
    let multiplySum = num1 * num2
    sumEl.textContent+=multiplySum
}