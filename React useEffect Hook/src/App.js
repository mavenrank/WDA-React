import "./App.css";
import FetchData from "./components/FetchData";
import MousePointer from "./components/MousePointer";
import ResizeWindowwithCleanup from "./components/ResizeWindowwithCleanup";
import UseEffectBasics from "./components/UseEffectBasics";

function App() {
    return (
        <div className="App">
            <div className="headingDiv">
                <h1>React useEffect Hook</h1>
                <div>
                    {/* <img
                        src="/images/github-mark/github-mark.svg"
                        alt="GitHub Logo"
                        style={{
                            width: "46px",
                            height: "50px",
                        }}
                    ></img> */}
                    <button className="btn" onClick={""}>
                        <img
                            src="images/GitHub-Logos/GitHub_Logo.png"
                            alt="GitHub Logo"
                            style={{
                                width: "130px",
                                height: "50px",
                            }}
                        ></img>
                    </button>
                </div>
            </div>
			<UseEffectBasics></UseEffectBasics>
			<ResizeWindowwithCleanup></ResizeWindowwithCleanup>
			<MousePointer></MousePointer>
			<FetchData></FetchData>
        </div>
    );
}

export default App;
