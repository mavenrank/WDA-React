import "./App.css";
import MultipleReturns from "./components/MultipleReturns";
import ShortCircuitEvaluation from "./components/ShortCircuitEvaluation";
import ShowHide from "./components/ShowHide";

function App() {
    return (
        <div className="App">
            <h1>Conditional Rendering</h1>
            <MultipleReturns></MultipleReturns>
            <hr/>
            <ShortCircuitEvaluation></ShortCircuitEvaluation>
            <hr/>
            <ShowHide></ShowHide>
        </div>
    );
}

export default App;
