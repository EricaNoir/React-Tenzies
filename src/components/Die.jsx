// { num, isHeld, onDieClick }
function Die(props) {
    return (
        <div
            className={`die ${props.isHeld && "held"}`}
            onClick={props.onDieClick}
        >
            <h1 className="die-num">{props.num}</h1>
        </div>
    );
}

export default Die;
