import React, { useState, useEffect } from "react";
import cars from "../../data";

const FetchedData = () => {
    const [field1, setField1] = useState("");
    const [field2, setField2] = useState("");

    const [data, setData] = useState([]);

    const [brand, setBrand] = useState("");
    const [models, setModels] = useState([]);
    // const data = [
    //     {
    //         "skoda": ["rapid", "dlfj","osdh"]
    //     }
    // ]

    const dataBrands = cars.map((car) => {
        return car.brand;
    });
    const dataModels = cars.map((car) => {
        return car.models;
    });

    console.log(dataBrands);
    console.log(dataModels);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(field1);
        const arr = field2.split(",");
        console.log(arr);
        setData([...data, { brand: field1, models: arr }]);
        setSubmitted(true);
        setField1("");
        setField2("");
    };

    useEffect(() => {
        console.log("Updated data:", data);
    }, [brand]);

    return (
        <React.Fragment>
            <div className="inputs">
                <form onSubmit={handleSubmit}>
                    {/* <input
                        type="text"
                        className="text-input"
                        placeholder="Enter Field"
                        value={field1}
                        onChange={(e) => {
                            setField1(e.target.value);
                        }}
                    ></input>
                    <input
                        type="text"
                        value={field2}
                        className="text-input"
                        onChange={(e) => setField2(e.target.value)}
                        placeholder="Values in Field1, csv"
                    ></input>
                    <button className="btn">Submit</button> */}
                </form>
                <div>
                    <select
                        className="dropdowns"
                        id="car-company"
                        value={brand}
                        onChange={(e) => {
                            setBrand(e.target.value);
                        }}
                    >
                        <option value="Select">Select Brand</option>
                        {cars.map((car) => {
                            return (
                                <option value={car.brand}>{car.brand}</option>
                            );
                        })}
                    </select>
                    <select id="car-models" className="dropdowns">
                        <option value="Select">Select Model</option>
                        {cars.map((car) => {
                            if (car.brand === brand) {
                                console.log(`Car models ${car.models}`);
                                return car.models.map((model) => {
                                    return (
                                        <option value={model}>
                                            {model} {console.log(model)}
                                        </option>
                                    );
                                });
                            }
                            return null;
                        })}
                    </select>
                </div>
            </div>
        </React.Fragment>
    );
};

export default FetchedData;
