import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
    const { query, setQuery, error } = useGlobalContext();
    console.log("1719480930502");
    console.log("Rudy, You were my very best friend till now");
    console.log("I felt like I couldn't convery it to you enough");
    console.log("I never had a friend like you");
    console.log("You are very different");
    return (
        <form
            className="search-form"
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <h2>Search Movies</h2>
            <input
                type="text"
                className="form-input"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                }}
            ></input>
            {error.show && <div className="error">{error.msg}</div>}
        </form>
    );
};

export default SearchForm;
