const elem = document.querySelector("input");
const output = document.getElementById("output");

elem.addEventListener("input", handleInput);

function is_palindrome(num) {
	const myArr = String(num)
		.split("")
		.map((num) => {
			return Number(num);
		});
	//clone the array and reverse it
	const new_arr = [...myArr].reverse();
	if (myArr.toString() === new_arr.toString()) {
		return true;
	} else {
		return false;
	}
}

function handleInput(event) {
	const inputValue = event.target.value;
	const num = parseInt(inputValue);
	if (isNaN(num)) {
		//if user enters a character
		output.textContent = "Please enter a valid number";
	} else if (num > 0) {
		if (is_palindrome(num)) {
			//if user enters a palindromic number
			output.style.color = "Green";
			output.style.fontStyle = "bold";
			output.textContent = "Yes. This is a palidrome!";
		} else {
			//if user enters non palindromic number
			output.style.color = "Red";
			output.textContent = "No. Try again.";
		}
	} else if (num < 0) {
		//if user enters negative number
		output.style.color = "Red";
		output.textContent = "Negative numbers not allowed.";
	} else {
		//if the user enters 0
		output.style.color = "Red";
		output.textContent = "Enter number other than '0'.";
	}
}
