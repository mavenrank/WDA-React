import React from "react";
import { useGlobalContext } from "../context";
import { useEffect } from "react";

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
    const searchValue = React.useRef("");

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    useEffect(() => {
        searchValue.current.focus();
    }, [])
    return (
        <section className="section search">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Search your Favourite Cocktail</label>
                    <input type="text" id="name" ref={searchValue} onChange={searchCocktail}/>
                </div>
            </form>
        </section>
    );
};

export default SearchForm;
