const input = document.getElementById("userip");
const searchText = document.getElementById("search-text");

input.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
	if (event.key === "Enter") {
		const userInput = input.value.trim();

		if (userInput) {
			// used innerText instead of textContent to just get the text content of an element
			//as it is visually rendered on the web page
			const text = searchText.innerText;
			// regex constructor consisting user text and global and case-insensitive flag
			//const regex = new RegExp(userInput, "gi");
		    const regex = new RegExp(`\\b${userInput}\\b`, "gi");

			const highlightedText = text.replace(
				regex,
				(match) => `<span class="highlight">${match}</span>`
			);
			searchText.innerHTML = highlightedText;

			// Clear the input field
			input.value = "";
		}
	}
}
