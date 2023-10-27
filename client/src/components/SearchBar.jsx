import classes from "./styles/SearchBar.module.css";
import { Input, Button } from "../UI";
import { useState } from "react";

const SearchBar = ({ searchBooks }) => {

	const [searchInput, setSearchInput] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(`Searching for ${searchInput}...`);
		setSearchInput("")
		searchBooks(searchInput)
	};

	return (
		<form className={classes.form} onSubmit={handleSubmit}>

			<div className={classes.input}>
				<Input
					htmlFor="search"
					label="Search Book by Genre: "
					type="text"
					name="search"
					value={searchInput}
					onChange={e=>setSearchInput(e.target.value)}
				></Input>
			</div>

			<div className={classes.btn}>
				<Button type="submit">Search</Button>
			</div>



		</form>
	);
};

export default SearchBar;