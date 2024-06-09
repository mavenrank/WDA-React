import React, { useState } from "react";
import "./App.css";
import ControlledInputs from "./components/ControlledInputs";
import MultipleInputs from "./components/MultipleInputs";
import UseRefBasics from "./components/UseRefBasics";

function App() {
    const [count, setCount] = useState(0);
    return (
        <React.Fragment>
            <h1>React Forms</h1>
            <ControlledInputs></ControlledInputs>
            <MultipleInputs></MultipleInputs>
            <UseRefBasics></UseRefBasics>
        </React.Fragment>
    );
}

export default App;
