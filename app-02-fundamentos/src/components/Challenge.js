const Challenge = () => {

    const valor1 = 8;
    const valor2 = 18;

    return(
        <div>
            <p><b>Valor #1:</b> {valor1}</p>
            <p><b>Valor #2:</b> {valor2}</p>
            <button onClick={() => console.log(`Soma: ${valor1 + valor2}`)}>Somar Valores</button>
        </div>
    )
};

export default Challenge;
