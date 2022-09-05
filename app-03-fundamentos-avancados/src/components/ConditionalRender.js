import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(true);

    return (
        <div>
            <h1>Exibição Condicional</h1>
            {x && <p>True</p>}
            {!x && <p>True</p>}
        </div>
    )
}

export default ConditionalRender