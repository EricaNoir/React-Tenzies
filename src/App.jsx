import React, { useEffect } from "react";
import "./App.scss";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
    const [numArr, setNumArr] = React.useState(allNewDice());
    const [tenzies, setTenzies] = React.useState(false);

    // Check win or not
    React.useEffect(() => {
        const allHeld = numArr.every((die) => die.isHeld);
        const firstValue = numArr[0].value;
        const allSameValue = numArr.every((die) => die.value === firstValue);
        setTenzies(allHeld && allSameValue);
    }, [numArr]);

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

    function resetGame() {
        setNumArr(allNewDice());
        setTenzies(false);
    }

    // Roll all unhold dice
    function rollDice() {
        setNumArr((oldDice) =>
            oldDice.map((die) => (die.isHeld ? die : generateNewDie()))
        );
    }

    // Make the clicked die unchangeable
    function toggleDice(id) {
        setNumArr((oldDice) =>
            oldDice.map((die) =>
                die.id === id ? { ...die, isHeld: !die.isHeld } : die
            )
        );
    }

    // Dies in the dice-container
    const diceElements = numArr.map((num) => (
        <Die
            key={num.id}
            num={num.value}
            isHeld={num.isHeld}
            onDieClick={() => toggleDice(num.id)}
        />
    ));

    // Button element
    const rollButtonElement = tenzies ? (
        <button className="roll-dice" onClick={resetGame}>
            New Game
        </button>
    ) : (
        <button className="roll-dice" onClick={rollDice}>
            Roll
        </button>
    );

    return (
        <>
            <main>
                {tenzies && <Confetti />}
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
