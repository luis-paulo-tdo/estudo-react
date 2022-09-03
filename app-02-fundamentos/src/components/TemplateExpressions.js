const TemplateExpressions = () => {

    const name = "Luis";
    const data = {
        age: 31,
        job: "Programador"
    };

    return (
        <div>
            <h2>Olá {name}, tudo bem?</h2>
            <p>Você tem {data.age} anos e atua como {data.job}!</p>
            <p>Ano que vem, você fará {data.age + 1} anos.</p>
        </div>
    )
}

export default TemplateExpressions;
