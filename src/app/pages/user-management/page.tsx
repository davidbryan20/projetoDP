"use client";
import React, { useState } from 'react';
import "../../../styles/global.css";
import Register from '../../pages/register/page';

export default function UserManagement() {
  const [users, setUsers] = useState<any[]>([]);

  const addUser = (user: any) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const deleteUser = (id: string) => {
    setUsers((prevUsers) => prevUsers.filter(user => user.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">User Management</h1>
        
        {/* Pass the addUser function to Register */}
        <Register addUser={addUser} />
        
        <table className="w-full text-white mt-6">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>RM</th>
              <th>CPF</th>
              <th>RG</th>
              <th>Profession</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.rm}</td>
                <td>{user.cpf}</td>
                <td>{user.rg}</td>
                <td>{user.profession}</td>
                <td>
                  <button onClick={() => deleteUser(user.id)} className="text-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
