import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return (
    <div>
      <h2>Perfil do Usuário</h2>
      <p>ID do usuário: {id}</p>
    </div>
  );
}

export default User;