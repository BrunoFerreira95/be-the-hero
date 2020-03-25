import React, { useState } from 'react';

export default function Header(props) {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }
    return (
        <div>
            <header>
                Contador: {counter}
            </header>
            <button onClick={increment}>Incrementar</button>
        </div>
    );
}