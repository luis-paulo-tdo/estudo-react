import {useState} from 'react';

const ManageData = () => {

    let someData = 10;
    const [number, setNumber] = useState(15); 

    return (
        <div>
            <div>
                <p><b>Valor:</b> {someData}</p>
                <button onClick={() => (someData = 15)}>Alterar Variável #1</button>
            </div>
            <div>
                <p><b>Valor:</b> {number}</p>
                <button onClick={() => setNumber(25)}>Alterar Variável #2</button>
            </div>
        </div>
    )
}

export default ManageData;
