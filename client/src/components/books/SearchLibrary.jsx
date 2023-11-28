import React from 'react';
import { Input } from "../../ui"
const SearchLibrary = ({ query, setQuery }) => {
    return (
        <Input
            type="text"
            name="search"
            placeholder="SEARCH LIBRARY"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
        ></Input>
    );
};

export default SearchLibrary;