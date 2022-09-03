const Events = () => {

    const handleMyEvent = (event) => {
        console.log("Ativou o Evento #1!");
        console.log(event);
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
        </div>
    )
};

export default Events;
