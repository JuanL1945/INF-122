import React, { useState } from 'react';
import '../style/Tablero.css';
import CuadroB from './CuadroB';

function TableroB() {
    const [valor, setValor] = useState;
    const click = () => {
        if (valor === "X") {
            setValor("O");
        } else {
            setValor("X")
        }
    }
    return (
        <div className="tablero">
            <CuadroB valor={0} funcion={valor} />
            <CuadroB valor={1} funcion={valor} />
            <CuadroB valor={2} funcion={valor} />
            <CuadroB valor={3} funcion={valor} />
            <CuadroB valor={4} funcion={valor} />
            <CuadroB valor={5} funcion={valor} />
            <CuadroB valor={6} funcion={valor} />
            <CuadroB valor={7} funcion={valor} />
            <CuadroB valor={8} funcion={valor} />
        </div>

    );
}
export default TableroB;