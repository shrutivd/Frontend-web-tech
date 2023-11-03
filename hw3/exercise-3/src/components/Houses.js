import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./Houses.css";

const backgroundColors = [
	"rgba(54, 162, 235, 0.8)", //targaryen
	"rgba(255, 206, 86, 0.8)", //tarly
	"rgba(255, 99, 132, 0.8)", //stark
	"rgba(75, 192, 192, 0.8)", //baratheon
	"rgba(153, 102, 255, 0.8)", // lannister
	"rgba(255, 159, 64, 0.8)", // grejoy
	"rgba(199, 199, 199, 0.8)", // clegane
	"rgba(83, 102, 255, 0.8)", //house belish
	"rgba(40, 159, 64, 0.8)", //seaworth
	"rgba(150, 150, 199, 0.8)", /// unknown
	"rgba(78, 52, 199, 0.8)", //tyrell
	"rgba(54, 54, 54, 0.8)", // free folk
	"rgba(255, 206, 186, 0.8)", //tarth
	"rgba(255, 99, 132, 0.8)", // naathi
	"rgba(75, 275, 275, 0.8)", // bolton
	"rgba(100, 70, 70, 0.8)", // naharis
	"rgba(255, 159, 64, 0.8)", // lorath
	"rgba(199, 100, 199, 0.8)", // Mormont
	"rgba(183, 255, 255, 0.8)", // sparrow
	"rgba(40, 259, 164, 0.8)", // viper
	"rgba(210, 200, 100, 0.8)", //sand
	"rgba(128, 0, 128, 0.8)", // worm
	"rgba(255, 15, 150, 0.8)", // qyburn
	"rgba(0, 128, 0, 0.8)", // bronn
];

const borderColors = [
	"rgba(54, 162, 235, 0.8)", //targaryen
	"rgba(255, 206, 86, 0.8)", //tarly
	"rgba(255, 99, 132, 0.8)", //stark
	"rgba(75, 192, 192, 0.8)", //baratheon
	"rgba(153, 102, 255, 0.8)", // lannister
	"rgba(255, 159, 64, 0.8)", // grejoy
	"rgba(199, 199, 199, 0.8)", // clegane
	"rgba(83, 102, 255, 0.8)", //house belish
	"rgba(40, 159, 64, 0.8)", //seaworth
	"rgba(150, 150, 199, 0.8)", /// unknown
	"rgba(78, 52, 199, 0.8)", //tyrell
	"rgba(54, 54, 54, 0.8)", // free folk
	"rgba(255, 206, 186, 0.8)", //tarth
	"rgba(255, 99, 132, 0.8)", // naathi
	"rgba(75, 275, 275, 0.8)", // bolton
	"rgba(100, 70, 70, 0.8)", // naharis
	"rgba(255, 159, 64, 0.8)", // lorath
	"rgba(199, 100, 199, 0.8)", // Mormont
	"rgba(183, 255, 255, 0.8)", // sparrow
	"rgba(40, 259, 164, 0.8)", // viper
	"rgba(210, 200, 100, 0.8)", //sand
	"rgba(128, 0, 128, 0.8)", // worm
	"rgba(255, 15, 150, 0.8)", // qyburn
	"rgba(0, 128, 0, 0.8)", // bronn
];

const Houses = () => {
	const [house, setHouse] = useState({ labels: [], values: [] });

	const url = "https://thronesapi.com/api/v2/Characters";
	const fetchData = () => {
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				mapToHouses(data);
			});
	};

	const mapToHouses=(data) => {
		
				const family = data.map((item) => item.family);
				let hashMap = new Map();
				for (let i = 0; i < family.length; ++i) {
					if (
						family[i].includes("Targaryan") ||
						family[i].includes("House Targaryen")
					) {
						console.log(family[i]);
						if (hashMap.has("House Targaryen")) {
							hashMap.set(
								"House Targaryen",
								hashMap.get("House Targaryen") + 1
							);
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
							hashMap.set(
								"House Baratheon",
								hashMap.get("House Baratheon") + 1
							);
						} else {
							hashMap.set("House Baratheon", 1);
						}
					} else if (
						family[i].includes("House Lannister") ||
						family[i].includes("Lannister") ||
						family[i].includes("House Lanister")
					) {
						if (hashMap.has("House Lannister")) {
							hashMap.set(
								"House Lannister",
								hashMap.get("House Lannister") + 1
							);
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

				const labels = [];
				const values = [];

				for (let [key, value] of hashMap) {
					labels.push(key);
					values.push(value);
				}
				setHouse({ labels, values });
	}

	useEffect(() => {
		fetchData();
	}, []);

	const donut_chart = {
		labels: house.labels,
		datasets: [
			{
				label: "houses",
				data: house.values,
				backgroundColor: backgroundColors,
				borderColor: borderColors,
			},
		],
	};

	const options = {};

	return (
		<div className="display">
			<h1>Donut Chart:</h1>
			<div className="donut">
				<Doughnut data={donut_chart} options={options} />
			</div>
		</div>
	);
};

export default Houses;
