import React, { useState, useEffect } from "react";

const InputedData = () => {
    const [field1, setField1] = useState("");
    const [field2, setField2] = useState("");

    const [data, setData] = useState([]);

    const [submitted, setSubmitted] = useState(false);

    const [brand, setBrand] = useState("");
    const [models, setModels] = useState([]);

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
                    <input
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
                        placeholder="Values of Left Field, csv"
                    ></input>
                    <button className="btn">Submit</button>
                </form>
                {submitted && (
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
                            {data.map((item) => {
                                console.log(item.brand);
                                return (
                                    <>
                                        <option value={item.brand}>
                                            {item.brand}
                                        </option>
                                    </>
                                );
                            })}
                        </select>
                        <select id="car-models" className="dropdowns">
                            <option value="Select">Select Model</option>
                            {data.map((item) => {
                                console.log(item.models);
                                if (item.brand === brand) {
                                    return item.models.map((model) => (
                                        <option value={model}>{model}</option>
                                    ));
                                }
                                return null;
                            })}
                        </select>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default InputedData;
