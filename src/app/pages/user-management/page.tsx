import React from 'react';
import "../../../styles/global.css";

export default function UserManagement() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">User Management</h1>
        <table className="w-full text-white">
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
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>123456</td>
              <td>12345678901</td>
              <td>987654321</td>
              <td>Software Engineer</td>
              <td>Edit | Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
