import { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from '../../../components/UseForm';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    // Carregar usuários ao inicializar
    const loadUsers = async () => {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    };
    loadUsers();
  }, []);

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/users/${id}`);
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleCreateOrUpdateUser = async (user) => {
    if (editingUser) {
      // Atualizar usuário
      await axios.put(`/api/users/${editingUser.id}`, user);
      setUsers(users.map((u) => (u.id === editingUser.id ? user : u)));
    } else {
      // Criar novo usuário
      const response = await axios.post('/api/users', user);
      setUsers([...users, response.data]);
    }
    setEditingUser(null);
  };

  return (
    <div>
      <h1>Gerenciamento de Usuários</h1>
      <UserForm user={editingUser} onSubmit={handleCreateOrUpdateUser} />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.username} ({user.email})</span>
            <button onClick={() => handleEdit(user)}>Editar</button>
            <button onClick={() => handleDelete(user.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;