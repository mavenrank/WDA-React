import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
    const { movies, isLoading } = useGlobalContext();

    if (isLoading) {
        return <div className="loading"></div>
    }
 
    useEffect(() => {
        
    }, [isLoading])
    return (
        <section className="movies">
            {movies.map((movie) => {
                const { imdbID: id, Poster: img, Title: title, Year: year } = movie;
                return (
                    <Link to={`/movies/${id}`} key={id} className="movie">
                        <article>
                            <img src={img === "N/A" ? url : img} alt={title}></img>
                            <div className="movie-info">
                                <h4 className="title">{title}</h4>
                                <p>{year}</p>
                            </div>
                        </article>
                    </Link>
                )
            })}
        </section>
    );
};

export default Movies;
