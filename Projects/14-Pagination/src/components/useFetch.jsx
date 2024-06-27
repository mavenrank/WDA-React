import { useState, useEffect } from "react";
import paginate from "./Utils";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getProducts = async () => {
        console.log(`Inside useFetch => getProducts()`)
        const response = await fetch(url);
        const data = await response.json();
        setData(paginate(data));
        setLoading(false);
        console.log(data)
    };

    useEffect(() => {
        getProducts();
    }, []);
    return { loading, data };
};
