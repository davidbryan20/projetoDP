"use client";
import React, { use, useState } from 'react';
import "../../../styles/global.css";

interface UserData {
  id: string;
  name: string;
  rm: string;
  cpf: string;
  rg: string;
  profession: string;
  image: File | null;
}

interface RegisterProps {
  addUser: (user: UserData) => void;
}

export default function Register({ addUser }: RegisterProps) {
  const [userData, setUserData] = useState<UserData>({
    id: '',
    name: '',
    rm: '',
    cpf: '',
    rg: '',
    profession: '',
    image: null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setUserData((prevData) => ({ ...prevData, image: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addUser(userData); 
    setUserData({
      id: '',
      name: '',
      rm: '',
      cpf: '',
      rg: '',
      profession: '',
      image: null,
    }); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">User Registration</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-white">ID:</label>
            <input
              type="text"
              placeholder="Enter ID"
              className="w-full px-4 py-2 bg-gray-700 rounded-md text-white"
              value={userData.id}
              onChange={(e) => setUserData({ ...userData, id: e.target.value })}
            />
          </div>
          <div>
            <label className="text-white">Name:</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full px-4 py-2 bg-gray-700 rounded-md text-white"
              value={userData.name}
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="text-white">RM:</label>
            <input
              type="text"
              placeholder="Enter RM"
              className="w-full px-4 py-2 bg-gray-700 rounded-md text-white"
              value={userData.rm}
              onChange={(e) => setUserData({ ...userData, rm: e.target.value })}
            />
          </div>
          <div>
            <label className="text-white">CPF:</label>
            <input
              type="text"
              placeholder="Enter CPF"
              className="w-full px-4 py-2 bg-gray-700 rounded-md text-white"
              value={userData.cpf}
              onChange={(e) => setUserData({ ...userData, cpf: e.target.value })}
            />
          </div>
          <div>
            <label className="text-white">RG:</label>
            <input
              type="text"
              placeholder="Enter RG"
              className="w-full px-4 py-2 bg-gray-700 rounded-md text-white"
              value={userData.rg}
              onChange={(e) => setUserData({ ...userData, rg: e.target.value })}
            />
          </div>
          <div>
            <label className="text-white">Profession:</label>
            <input
              type="text"
              placeholder="Enter Profession"
              className="w-full px-4 py-2 bg-gray-700 rounded-md text-white"
              value={userData.profession}
              onChange={(e) => setUserData({ ...userData, profession: e.target.value })}
            />
          </div>
          <div>
            <label className="text-white">Image:</label>
            <input
              type="file"
              className="w-full px-4 py-2 bg-gray-700 rounded-md text-white"
              onChange={handleFileChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
