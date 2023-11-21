import { useState } from "react";
import "./App.scss";
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {
    const [numArr, setNumArr] = useState(allNewDice());

    function generateNewDie() {
        return {
            value: Math.floor(Math.random() * 6) + 1,
            isHeld: false,
            id: nanoid(),
        };
    }

    // Initialize dice
    function allNewDice() {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(generateNewDie());
        }
        return arr;
    }

    // Roll all unhold dice
    function rollDice() {
        setNumArr((oldDice) =>
            oldDice.map((die) => (die.isHeld ? die : generateNewDie()))
        );
    }

    // Make the clicked die unchangeable
    function holdDice(id) {
        setNumArr((oldDice) =>
            oldDice.map((die) =>
                die.id === id ? { ...die, isHeld: true } : die
            )
        );
    }

    // Dies in the dice-container
    const diceElements = numArr.map((num) => (
        <Die
            key={num.id}
            num={num.value}
            isHeld={num.isHeld}
            onDieClick={() => holdDice(num.id)}
        />
    ));

    // Button element
    const rollButtonElement = (
        <button className="roll-dice" onClick={rollDice}>
            Roll
        </button>
    );

    return (
        <>
            <main>
                <h1 className="title">Tenzies</h1>
                <p className="instructions">
                    Roll until all dice are the same. Click each die to freeze
                    it at its current value between rolls.
                </p>
                <div className="dice-container">{diceElements}</div>
                {rollButtonElement}
            </main>
        </>
    );
}

export default App;
