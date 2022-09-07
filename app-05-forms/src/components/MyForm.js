import './MyForm.css';
import { useState } from 'react';

const MyForm = ({ user }) => {

    // 3 - Gerenciamento de Dados
    // 6 - Controlled Inputs
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Enviando o Formulário');
        console.log('Usuário: ', name);
        console.log('E-mail: ', email);
        console.log('Bio: ', bio);
        console.log('-');

        // 7 - Limpar formulário
        setName('');
        setEmail('');
        setBio('');
    };

    return (
        <div>
            {/* 1 - Criação de Formulário */}
            {/* 5 - Envio de form */}
            <form onSubmit={handleSubmit}>
                <div className="form-component">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" value={name} placeholder="Digite o seu nome" onChange={handleName} />
                </div>

                {/* 2 - Label envolvendo o input */}
                <label className="form-component">
                    <span>E-mail</span>
                    {/* 4 - Simplificando manipulação de state */}
                    <input type="email" name="email" value={email} placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} />
                </label>

                {/* 8 - Textarea */}
                <label className="form-component">
                    <span>Biografia</span>
                    <textarea name="bio" placeholder='Descrição do usuário' rows="5" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm