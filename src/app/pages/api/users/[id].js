import { usersDB } from '../../../utils/database';

// Método GET, PUT, DELETE para um usuário específico
export const handler = async (req, res) => {
  const { id } = req.query;
  const user = usersDB.find((user) => user.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  if (req.method === 'GET') {
    return res.status(200).json(user);
  }

  if (req.method === 'PUT') {
    const { username, email } = req.body;
    user.username = username;
    user.email = email;
    return res.status(200).json(user);
  }

  if (req.method === 'DELETE') {
    const index = usersDB.indexOf(user);
    usersDB.splice(index, 1);
    return res.status(204).end();
  }

  res.status(405).json({ message: 'Método não permitido' });
};
