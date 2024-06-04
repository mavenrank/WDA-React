import React from "react";
const List = ({ people, clickHandler }) => {
    return (
        <article>
            {people.map((person) => {
                const { id, name, age, image } = person;
                return (
                    <article key={id} className="person">
                        <img src={image}></img>
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                            <button
                                onClick={() => {
                                    {
                                        clickHandler(id);
                                    }
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    </article>
                );
            })}
        </article>
    );
};

export default List;
