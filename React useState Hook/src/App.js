import ArrayItems from "./components/ArrayItems";
import ChangeTitle from "./components/ChangeTitle";
import UseStateObject from "./components/UseStateObject"
import "./App.css"
import UseStateCounter from "./components/UseStateCounter";
const App = () => {
    return (
        <>
            <h1>React useState Hook: A Comprehensive Guide</h1>
            <ChangeTitle></ChangeTitle>
            <hr/>
            <ArrayItems></ArrayItems>
            <hr />
            <UseStateObject></UseStateObject>
            <hr />
            <UseStateCounter></UseStateCounter>
        </>
    );
};

export default App;
