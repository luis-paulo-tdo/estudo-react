import {useState} from 'react'

const ListRender = () => {

    const [list] = useState(['Matheus', 'Pedro', 'Josias', 'Maria']);
    const [users] = useState([
        { id: 1, name: 'Matheus', age: 31 },
        { id: 3687163, name: 'João', age: 28 },
        { id: 3719837, name: 'Pedro', age: 44 }
    ]);

    return (
        <div>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <b>Usuário:</b> {user.name} - <b>Idade:</b> {user.age}
                    </li>   
                ))}
            </ul>
        </div>
    )
};

export default ListRender;
