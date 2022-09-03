// Arquivos de estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {

    // Esta função exibe o primeiro componente criado para o projeto

    return (
        <div>
            { /* JSX do primeiro componente da aplicação */ }
            { /* O compilador não irá expor os comentários para a Dev Tools */ }

            <h2>Meu Primeiro Componente</h2>
            <p className="texto">Meu texto</p>
            <MyComponent/>
        </div>
    )
}

export default FirstComponent;
