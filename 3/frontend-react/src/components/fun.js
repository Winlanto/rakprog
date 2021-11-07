import React from "react";

function Fun({magicNumber, setMagicNumber, amount=1, show, setShow}){

    const [counter, setCounter] = React.useState(0)


    const increaseMagicNumber = () => {
        setMagicNumber(magicNumber+amount)
    }

    const addNumber = () => {
        setCounter(counter+1)
    }

    return (
        <>
            <h1>Fun counter {counter}</h1>
            <button onClick={addNumber}>add 1</button>
            <button onClick={() => setCounter(counter-1)}>deduct 1</button>
            <button onClick={increaseMagicNumber}>add {amount} to magic number</button>
            <button onClick={() => setShow(!show)}>toggle magic number</button>

        </>
    )
}

export default Fun