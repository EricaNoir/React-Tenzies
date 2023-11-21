import { useState } from "react";
import "./App.scss";
import Die from "./components/Die";

/**
 * Challenge:
 *
 * Write a function (allNewDice) that returns an array
 * of 10 random numbers between 1-6 inclusive.
 *
 * Log the array of numbers to the console for now
 */

function App() {
    const [count, setCount] = useState(0);

    function allNewDice() {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random() * 6) + 1);
        }
        return arr;
    }

    console.log(allNewDice());

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
