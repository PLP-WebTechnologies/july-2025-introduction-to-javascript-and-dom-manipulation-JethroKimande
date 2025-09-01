// Part 1: Variable declarations and conditionals
let number = 10;
let message;
if (number % 2 === 0) {
    message = "Even";
} else {
    message = "Odd";
}
console.log(`Number ${number} is ${message}`);

// Part 2: At least 2 custom functions
function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

function sumNumbers(a, b) {
    return a + b;
}
console.log(sumNumbers(5, 7));

// Part 3: At least 2 loop examples
// For loop
for (let i = 1; i <= 5; i++) {
    console.log(`For loop: ${i}`);
}

// While loop
let j = 1;
while (j <= 5) {
    console.log(`While loop: ${j}`);
    j++;
}

// Part 4: At least 3 DOM interactions
document.getElementById("btn1").addEventListener("click", () => {
    let randomNum = Math.floor(Math.random() * 100);
    document.getElementById("result1").textContent = `${randomNum} is ${checkEvenOdd(randomNum)}`;
});

document.getElementById("btn2").addEventListener("click", () => {
    document.getElementById("result2").textContent = "Loops executed. Check console for output.";
});

let itemCount = 0;
document.getElementById("btn3").addEventListener("click", () => {
    itemCount++;
    let li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;
    document.getElementById("list").appendChild(li);
});