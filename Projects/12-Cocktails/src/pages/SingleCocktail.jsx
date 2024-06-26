import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);

    const getCocktail = async () => {
        try {
            const response = await fetch(`${url}${id}`);
            const data = await response.json();
            console.log(data);

            if (data.drinks) {
                const {
                    strDrink: name,
                    strDrinkThumb: img,
                    strAlcoholic: info,
                    strCategory: category,
                    strInstructions: instructions,
                    strGlass: glass,
                    strIngredient1: ingredients1,
                    strIngredient2: ingredients2,
                    strIngredient3: ingredients3,
                    strIngredient4: ingredients4,
                    strIngredient5: ingredients5,
                } = data.drinks[0];
                const ingredients = [
                    ingredients1,
                    ingredients2,
                    ingredients3,
                    ingredients4,
                    ingredients5,
                ];
                console.log(ingredients);
                const cocktail = {
                    name,
                    img,
                    info,
                    category,
                    glass,
                    instructions,
                    ingredients,
                };
                setCocktail(cocktail);
            } else {
                setCocktail(null);
            }
            setLoading(false);
        } catch (error) {
            console.log("Error fetching cocktail details");
        }
    };

    useEffect(() => {
        setLoading(true);

        getCocktail();
    }, [id]);

    if (loading) {
        return <Loading />;
    }
    if (!cocktail) {
        return <h1 className="section-title">No Cocktail to Display</h1>;
    }

    const { name, img, category, info, glass, instructions, ingredients } =
        cocktail;
    return (
        <section className="section cocktail-section">
            <Link to="/" className="btn btn-primary">
                Back Home
            </Link>
            <h2 className="section-title">{name}</h2>
            <div className="drink">
                <img src={img} alt={name} />
                <div className="drink-info">
                    <p>
                        <span className="drink-data">name :</span>
                        {name}
                    </p>
                    <p>
                        <span className="drink-data">category :</span>
                        {category}
                    </p>
                    <p>
                        <span className="drink-data">info :</span>
                        {info}
                    </p>
                    <p>
                        <span className="drink-data">glass :</span>
                        {glass}
                    </p>
                    <p>
                        <span className="drink-data">instructions :</span>
                        {instructions}
                    </p>
                    <p>
                        <span className="drink-data">Ingredients :</span>
                        {ingredients.map((item, index) => {
                            return item ? <span key={index}>{item}</span> : null;
                        })}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SingleCocktail;
