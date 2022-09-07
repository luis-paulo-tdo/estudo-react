import './MyForm.css';
import { useState } from 'react';

const MyForm = ({ user }) => {

    // 3 - Gerenciamento de Dados
    // 6 - Controlled Inputs
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role : '');

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Enviando o Formulário');
        console.log('Usuário: ', name);
        console.log('E-mail: ', email);
        console.log('Bio: ', bio);
        console.log('Role: ', role);
        console.log('-');

        // 7 - Limpar formulário
        setName('');
        setEmail('');
        setBio('');
        setRole('');
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
                    <textarea name="bio" placeholder='Descrição do usuário' rows="5" onChange={(e) => setBio(e.target.value)} value={bio}>
                        {bio}
                    </textarea>
                </label>

                {/* 9 - Select */}
                <label>
                    <span>Função no Sistema</span>
                    <select name="role" value={role} onChange={ (e) => setRole(e.target.value) }>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm