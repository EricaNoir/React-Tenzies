import { useState } from "react";
import "./App.scss";
import Die from "./components/Die";


function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <main>
                <div className="dice-container">
                    <Die num="1" />
                    <Die num="2" />
                    <Die num="3" />
                    <Die num="2" />
                    <Die num="1" />
                    <Die num="3" />
                    <Die num="4" />
                    <Die num="5" />
                    <Die num="3" />
                    <Die num="2" />
                </div>
            </main>
        </>
    );
}

export default App;
