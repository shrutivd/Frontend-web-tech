const selectSection = document.querySelector("section");

// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";

fetch(url)
	.then((Response) => {
		return Response.json();
	})
	.then((data) => {
		data.forEach((item) => {
			let card = document.createElement("div");
			card.className = "card";

			let characterImage = document.createElement("img");
			characterImage.src = item.imageUrl;
			characterImage.alt = item.fullName;
			characterImage.className = "character-image";
			card.appendChild(characterImage);

			let characterDetails = document.createElement("div");
			characterDetails.className = "character-details";

			let characterName = document.createElement("h3");
			characterName.textContent = item.fullName;
			characterName.className = "character-name";
			characterDetails.appendChild(characterName);

			let characterTitle = document.createElement("p");
			characterTitle.textContent = item.title;
			characterTitle.className = "character-title";
			characterDetails.appendChild(characterTitle);

			card.appendChild(characterDetails);

			selectSection.appendChild(card);

			card.classList.add("div");

			selectSection.style.display = "flex";
			selectSection.style.flexWrap = "wrap";
			selectSection.style.gap = "20px";
			selectSection.style.justifyContent = "center";

			card.style.height = "350px";
			card.style.width = "230px";
			card.style.fontWeight = "bold";
			card.style.marginTop = "40px";

			characterDetails.fontSize = "34px";
			characterDetails.fontWeight = "bold";
			characterDetails.style.textAlign = "center";

			characterImage.style.display = "block";
			characterImage.style.height = "250px";
			characterImage.style.width = "200px";
			characterImage.style.margin = "auto";
			characterImage.style.marginTop = "10px";
		});
	})
	.catch((error) => {
		console.error(error);
	});
