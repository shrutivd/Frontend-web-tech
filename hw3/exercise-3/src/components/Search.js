import React, { useState} from "react";
//import {FaSearch} from "react-icons/fa"
import "./search.css";

const Search = () => {
	const [character, setCharacter] = useState("");
	const [selected, setSelected] = useState(null);

	const url = "https://thronesapi.com/api/v2/Characters";
	const fetchData = (value) => {
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const results = data.find((character) => {
					return (
						value &&
						character.fullName.toLowerCase().includes(value.toLowerCase())
					);
				});
				if (results) {
					setSelected(results);
				} else {
					setSelected(null);
				}
			});
	};

	let inputHandler = (value) => {
		setCharacter(value);
		fetchData(value);
	};

	return (
		<div>
			<div className="searchBar">
				<div className="user-input">
					<input
						placeholder="Type to search..."
						value={character}
						onChange={(e) => inputHandler(e.target.value)}
					/>
				</div>
				{selected !== null ? (
					<div>
						<h2>Character Information</h2>
						<p>Name: {selected?.fullName}</p>
						{selected?.image && <img src={selected.imageUrl} alt={`Image`}/>}
					</div>
				) : (
					<p>No details found for this character.</p>
				)}
			</div>
		</div>
	);
};

export default Search;
