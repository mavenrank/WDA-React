import React, { useState, useEffect } from "react";
import { useFetch } from "./components/useFetch";
import Follower from "./components/Follower";

const App = () => {
    const { loading, data } = useFetch();
    let [page, setPage] = useState(0);
    const [followers, setFollowers] = useState([]);

    console.log(`Data \n${data}`);
    console.log(`Data Length\n${data.length}`);
    console.log(`Data of ${page} : ${data[page]}`);

    const handlePage = (index) => {
        console.log(`Index is ${index}`);
        setPage(index);
    };

    const handlePrev = () => {
        if (page > 0) {
            setPage(page - 1);
        }
        else {
            setPage(data.length-1);
        }
    };

    const handleNext = () => {
        if (page < data.length - 1) {
            setPage(page + 1);
        } else {
            setPage(0);
        }
    };

    useEffect(() => {
        if (loading) return;
        setFollowers(data[page]);
    }, [loading, page]);

    return (
        <main>
            <div className="section-title">
                <h1>{loading ? "loading..." : "pagination"}</h1>
                <div className="underline"></div>
            </div>
            <section className="followers">
                <div className="container">
                    {followers.map((follower) => {
                        return <Follower key={follower.id} {...follower} />;
                    })}
                </div>
                {!loading && (
                    <div className="btn-container">
                        <button className="prev-btn" onClick={handlePrev}>
                            Prev
                        </button>
                        {data.map((item, index) => {
                            return (
                                <button
                                    key={index}
                                    className={`page-btn ${
                                        index === page ? "active-btn" : null
                                    }`}
                                    onClick={() => handlePage(index)}
                                >
                                    {index + 1}
                                </button>
                            );
                        })}
                        <button className="prev-btn" onClick={handleNext}>
                            Next
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
};

export default App;
