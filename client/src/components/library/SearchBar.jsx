import classes from "../../pages/styles/Discover.module.css";
import {Input, Button, Form, FormRow} from "../../ui/index.js";
import { useState } from "react";

const SearchBar = ({ searchBooks, setSearch, buttonText }) => {

	const [searchInput, setSearchInput] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchInput("")
		setSearch(searchInput)
		searchBooks(searchInput)
	};

	return (
		<Form onSubmit={handleSubmit}>
			<div className={classes.form}>
				<Input
					htmlFor="search"
					placeholder="Search Books by Genre"
					type="text"
					name="search"
					value={searchInput}
					onChange={e=>setSearchInput(e.target.value)}
				></Input>
				<Button type="submit">{buttonText}</Button>
			</div>
		</Form>
	);
};

export default SearchBar;