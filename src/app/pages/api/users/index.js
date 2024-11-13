import { usersDB } from '../../../utils/database';

// Método GET - Listar todos os usuários
export const handler = async (req, res) => {
  if (req.method === 'GET') {
    return res.status(200).json(usersDB);
  }

  // Método POST - Criar um novo usuário
  if (req.method === 'POST') {
    const { username, email } = req.body;
    const newUser = { id: Date.now(), username, email };
    usersDB.push(newUser);
    return res.status(201).json(newUser);
  }

  res.status(405).json({ message: 'Método não permitido' });
};