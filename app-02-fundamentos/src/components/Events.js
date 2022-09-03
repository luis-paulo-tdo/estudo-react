const Events = () => {

    const handleMyEvent = (event) => {
        console.log("Ativou o Evento #1!");
        console.log(event);
    };

    const renderSomething = (x) => {
        if (x) {
            return <h2>Valor Verdadeiro</h2>
        }  else {
            return <h2>Valor Falso</h2>
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui #1</button>
            </div>
            <div>
                <button onClick={() => console.log("Ativou o Evento #2!")}>Clique Aqui #2</button>
                <button onClick={() => {
                    if (true) {
                        console.log("Este evento está muito complexo para ser colocado inline!")
                    }
                }}>Clique Aqui #3</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
};

export default Events;
