import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(false);
    const [name, setName] = useState('Matheus');

    return (
        <div>
            <h1>Exibição Condicional</h1>
            {x && <p>True</p>}
            {!x && <p>True</p>}
            <h1>Condição Ternária</h1>
            {name === 'Matheus' ? (
                <div>
                    <p>O nome é João</p>
                </div>
            ) : (
                <div>
                    <p>O nome não foi encontrado</p>
                </div>
            )}
            <button onClick={() => setName('João')}>Alterar Nome</button>
        </div>
    )
}

export default ConditionalRender