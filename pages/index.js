import { useState } from 'react';

function Home(){
    return (
        <div>
            <h4>Home 3</h4>
            <Contador />
            <div>Teste</div>
        </div>
        )
}

function Contador(){
    const [contador, setContador] = useState(1);

    function adicionarContador (){
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar número</button>
        </div>
    )
}


export default Home
