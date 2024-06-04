import React, { useEffect, useState } from "react";

const FetchData = () => {
    const url = "https://api.github.com/users";

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <div className="section">
            <h2 className="sectionHeading">Github Users</h2>
            <div className="sectionedDiv" id="githubusers">
                {users.map((user) => {
                    const { id, login, avatar_url, html_url } = user;
                    return (
                        <div id="eachUser">
                            <li id={id} style={{listStyleType:"none"}}>
                                <img
                                    src={avatar_url}
                                    alt={login}
                                    style={{ width: "150px", height:"150px", borderRadius:"50%"}}
                                ></img>
                                <h3>{login}</h3>
                                <a href={html_url} target="_blank">
                                    Profile
                                </a>
                            </li>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FetchData;
