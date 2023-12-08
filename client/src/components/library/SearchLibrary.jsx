import React from 'react';
import { Input } from "../../ui"
const SearchLibrary = ({ query, setQuery }) => {
    return (
        <Input
            type="text"
            name="search"
            placeholder="Search Library"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
        ></Input>
    );
};

export default SearchLibrary;