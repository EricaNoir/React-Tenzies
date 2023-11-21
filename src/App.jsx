import { useState } from "react";
import "./App.scss";
import Die from "./components/Die";

/**
 * Challenge:
 *
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `allNewDice` function so it
 * loads all new dice as soon as the app loads)
 *
 * Map over the state numbers array to generate our array
 * of Die elements and render those in place of our
 * manually-written 10 Die elements.
 */

function App() {
    const [numArr, setNumArr] = useState(allNewDice());

    function allNewDice() {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random() * 6) + 1);
        }
        return arr;
    }

    // Dies in the dice-container
    const diceElements = numArr.map((num) => <Die num={num} />);

    return (
        <>
            <main>
                <div className="dice-container">{diceElements}</div>
            </main>
        </>
    );
}

export default App;
