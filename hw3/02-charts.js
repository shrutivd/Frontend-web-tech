const backgroundColors = [
	"rgba(54, 162, 235, 0.8)",
	"rgba(255, 206, 86, 0.8)",
	"rgba(255, 99, 132, 0.8)",
	"rgba(75, 192, 192, 0.8)",
	"rgba(153, 102, 255, 0.8)",
	"rgba(255, 159, 64, 0.8)",
	"rgba(199, 199, 199, 0.8)",
	"rgba(83, 102, 255, 0.8)",
	"rgba(40, 159, 64, 0.8)",
	"rgba(210, 199, 199, 0.8)",
	"rgba(78, 52, 199, 0.8)",
	"rgba(54, 162, 235, 0.8)",
	"rgba(255, 206, 86, 0.8)",
	"rgba(255, 99, 132, 0.8)",
	"rgba(75, 192, 192, 0.8)",
	"rgba(153, 102, 255, 0.8)",
	"rgba(255, 159, 64, 0.8)",
	"rgba(199, 199, 199, 0.8)",
	"rgba(83, 102, 255, 0.8)",
	"rgba(40, 159, 64, 0.8)",
	"rgba(210, 199, 199, 0.8)",
	"rgba(128, 0, 128, 0.8)",
	"rgba(255, 165, 0, 0.8)",
	"rgba(0, 128, 0, 0.8)",
];

const borderColors = [
	"rgba(54, 162, 235, 1)",
	"rgba(255, 206, 86, 1)",
	"rgba(255, 99, 132, 1)",
	"rgba(75, 192, 192, 1)",
	"rgba(153, 102, 255, 1)",
	"rgba(255, 159, 64, 1)",
	"rgba(199, 199, 199, 1)",
	"rgba(83, 102, 255, 1)",
	"rgba(40, 159, 64, 1)",
	"rgba(210, 199, 199, 1)",
	"rgba(78, 52, 199, 1)",
	"rgba(54, 162, 235, 1)",
	"rgba(255, 206, 86, 1)",
	"rgba(255, 99, 132, 1)",
	"rgba(75, 192, 192, 1)",
	"rgba(153, 102, 255, 1)",
	"rgba(255, 159, 64, 1)",
	"rgba(199, 199, 199, 1)",
	"rgba(83, 102, 255, 1)",
	"rgba(40, 159, 64, 1)",
	"rgba(210, 199, 199, 1)",
	"rgba(128, 0, 128, 1)",
	"rgba(255, 165, 0, 1)",
	"rgba(0, 128, 0, 1)",
];

//Algorithm:
//*fetched the data
//*mapped the family names of all the characters.
//*used hashmap to find unique family names and 
//group, the desired family names together.
//*stored the keys and values obtained from hashmap into 
//labels and values arrays.
//*Passed these arrays to the function generating donut chart
//*used these arrays to get the labels and data for donut chart


// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";

const getData = async () => {

	await fetch(url)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		const family = data.map((item) => item.family);

		let hashMap = new Map();
		for (let i = 0; i < family.length; ++i) {
			if (
				family[i].includes("Targaryan") ||
				family[i].includes("House Targaryen")
			) {
				if (hashMap.has("House Targaryen")) {
					hashMap.set("House Targaryen", hashMap.get("House Targaryen") + 1);
				} else {
					hashMap.set("House Targaryen", 1);
				}
			} else if (family[i].includes("House Tarly")) {
				if (hashMap.has("House Tarly")) {
					hashMap.set("House Tarly", hashMap.get("House Tarly") + 1);
				} else {
					hashMap.set("House Tarly", 1);
				}
			} else if (
				family[i].includes("House Stark") ||
				family[i].includes("Stark")
			) {
				if (hashMap.has("House Stark")) {
					hashMap.set("House Stark", hashMap.get("House Stark") + 1);
				} else {
					hashMap.set("House Stark", 1);
				}
			} else if (
				family[i].includes("House Baratheon") ||
				family[i].includes("Baratheon")
			) {
				if (hashMap.has("House Baratheon")) {
					hashMap.set("House Baratheon", hashMap.get("House Baratheon") + 1);
				} else {
					hashMap.set("House Baratheon", 1);
				}
			} else if (
				family[i].includes("House Lannister") ||
				family[i].includes("Lannister") ||
				family[i].includes("House Lanister")
			) {
				if (hashMap.has("House Lannister")) {
					hashMap.set("House Lannister", hashMap.get("House Lannister") + 1);
				} else {
					hashMap.set("House Lannister", 1);
				}
			} else if (
				family[i].includes("House Greyjoy") ||
				family[i].includes("Greyjoy")
			) {
				if (hashMap.has("House Greyjoy")) {
					hashMap.set("House Greyjoy", hashMap.get("House Greyjoy") + 1);
				} else {
					hashMap.set("House Greyjoy", 1);
				}
			} else if (
				family[i].includes("House Clegane") ||
				family[i].includes("Clegane")
			) {
				if (hashMap.has("House Clegane")) {
					hashMap.set("House Clegane", hashMap.get("House Clegane") + 1);
				} else {
					hashMap.set("House Clegane", 1);
				}
			} else if (
				family[i].includes("House Baelish") ||
				family[i].includes("Baelish")
			) {
				if (hashMap.has("House Baelish")) {
					hashMap.set("House Baelish", hashMap.get("House Baelish") + 1);
				} else {
					hashMap.set("House Baelish", 1);
				}
			} else if (
				family[i].includes("House Seaworth") ||
				family[i].includes("Seaworth")
			) {
				if (hashMap.has("House Seaworth")) {
					hashMap.set("House Seaworth", hashMap.get("House Seaworth") + 1);
				} else {
					hashMap.set("House Seaworth", 1);
				}
			} else if (
				family[i].includes("House Tyrell") ||
				family[i].includes("Tyrell")
			) {
				if (hashMap.has("House Tyrell")) {
					hashMap.set("House Tyrell", hashMap.get("House Tyrell") + 1);
				} else {
					hashMap.set("House Tyrell", 1);
				}
			} else if (family[i].includes("Free Folk")) {
				if (hashMap.has("Free Folk")) {
					hashMap.set("Free Folk", hashMap.get("Free Folk") + 1);
				} else {
					hashMap.set("Free Folk", 1);
				}
			} else if (family[i].includes("Tarth")) {
				if (hashMap.has("Tarth")) {
					hashMap.set("Tarth", hashMap.get("Tarth") + 1);
				} else {
					hashMap.set("Tarth", 1);
				}
			} else if (family[i].includes("Naathi")) {
				if (hashMap.has("Naathi")) {
					hashMap.set("Naathi", hashMap.get("Naathi") + 1);
				} else {
					hashMap.set("Naathi", 1);
				}
			} else if (family[i].includes("Bolton")) {
				if (hashMap.has("Bolton")) {
					hashMap.set("Bolton", hashMap.get("Bolton") + 1);
				} else {
					hashMap.set("Bolton", 1);
				}
			} else if (family[i].includes("Naharis")) {
				if (hashMap.has("Naharis")) {
					hashMap.set("Naharis", hashMap.get("Naharis") + 1);
				} else {
					hashMap.set("Naharis", 1);
				}
			} else if (
				family[i].includes("Lorathi") ||
				family[i].includes("Lorath")
			) {
				if (hashMap.has("Lorath")) {
					hashMap.set("Lorath", hashMap.get("Lorath") + 1);
				} else {
					hashMap.set("Lorath", 1);
				}
			} else if (family[i].includes("Sand")) {
				if (hashMap.has("Sand")) {
					hashMap.set("Sand", hashMap.get("Sand") + 1);
				} else {
					hashMap.set("Sand", 1);
				}
			} else if (family[i].includes("Worm")) {
				if (hashMap.has("Worm")) {
					hashMap.set("Worm", hashMap.get("Worm") + 1);
				} else {
					hashMap.set("Worm", 1);
				}
			} else if (family[i].includes("Qyburn")) {
				if (hashMap.has("Qyburn")) {
					hashMap.set("Qyburn", hashMap.get("Qyburn") + 1);
				} else {
					hashMap.set("Qyburn", 1);
				}
			} else if (family[i].includes("Bronn")) {
				if (hashMap.has("Bronn")) {
					hashMap.set("Bronn", hashMap.get("Bronn") + 1);
				} else {
					hashMap.set("Bronn", 1);
				}
			} else if (family[i].includes("Sparrow")) {
				if (hashMap.has("Sparrow")) {
					hashMap.set("Sparrow", hashMap.get("Sparrow") + 1);
				} else {
					hashMap.set("Sparrow", 1);
				}
			} else if (family[i].includes("Mormont")) {
				if (hashMap.has("Mormont")) {
					hashMap.set("Mormont", hashMap.get("Mormont") + 1);
				} else {
					hashMap.set("Mormont", 1);
				}
			} else if (family[i].includes("Viper")) {
				if (hashMap.has("Viper")) {
					hashMap.set("Viper", hashMap.get("Viper") + 1);
				} else {
					hashMap.set("Viper", 1);
				}
			} else if (
				family[i].includes("Unknown") ||
				family[i].includes("None") ||
				family[i].includes("Unkown") ||
				family[i].includes("")
			) {
				if (hashMap.has("Unknown")) {
					hashMap.set("Unknown", hashMap.get("Unknown") + 1);
				} else {
					hashMap.set("Unknown", 1);
				}
			} 
		}

		let labels = [];
		let values = [];

		for (let [key, value] of hashMap) {
			labels.push(key);
			values.push(value);
		}
		renderChart(labels, values);
	});

};



const renderChart = (labels, values) => {
	const donutChart = document.querySelector(".donut-chart");
	new Chart(donutChart, {
		type: "doughnut",
		data: {
			labels: [...labels],
			datasets: [
				{
					label: "My First Dataset",
					data: [...values],
					backgroundColor: backgroundColors,
					borderColor: borderColors,
					borderWidth: 1,
				},
			],
		},
	});
};

getData();
