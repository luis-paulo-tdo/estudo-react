const UserDetails = ({ user }) => {
  return (
    <div>
        <p><b>Nome:</b> {user.name}</p>
        <p><b>Idade:</b> {user.age}</p>
        <p><b>Profissão:</b> {user.job}</p>
        <p>
            <b>Pode tirar CNH:</b>
            {user.age >= 18 ?
                (<p style={{color:'green'}}>Sim</p>)
                : (<p style={{color:'red'}}>Não</p>)}
        </p>
    </div>
  )
}

export default UserDetails