const Events = () => {

    const handleMyEvent = (event) => {
        console.log("Ativou o evento!");
        console.log(event);
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
        </div>
    )
};

export default Events;
