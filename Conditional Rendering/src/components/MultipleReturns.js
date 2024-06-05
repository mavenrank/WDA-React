import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
    const [user, setUser] = useState("defaultUser");

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((resp) => {
                if (resp.status >= 200 && resp.status <= 299) {
                    return resp.json();
                } else {
                    setIsLoading(false);
                    setIsError(true);
                    throw new Error(resp.statusText);
                }
            })
            .then((user) => {
                setUser(user);
                console.log(user);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (isLoading) {
        return <div>Loading Data...</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }

    return (
        <div className="section">
            <h2 className="sectionHeading">Multiple Returns</h2>
            <div className="sectionedDiv">
                <img
                    src={user.avatar_url}
                    alt={user.login}
                    style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                    }}
                ></img>
                <p>{user.bio}</p>
                <button className="btn"
                    onClick={() => {
                        window.open(user.html_url);
                    }}
                >
                    GitHub ⤴
                </button>
            </div>
        </div>
    );
};

export default MultipleReturns;
