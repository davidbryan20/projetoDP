import React from 'react';
import "../../../styles/global.css"; 

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">User Registration</h1>
        <form className="space-y-4">
          <div>
            <label className="text-white">ID:</label>
            <input type="text" placeholder="Enter ID" className="w-full px-4 py-2 bg-gray-700 rounded-md text-white" />
          </div>
          <div>
            <label className="text-white">Name:</label>
            <input type="text" placeholder="Enter Name" className="w-full px-4 py-2 bg-gray-700 rounded-md text-white" />
          </div>
          <div>
            <label className="text-white">RM:</label>
            <input type="text" placeholder="Enter RM" className="w-full px-4 py-2 bg-gray-700 rounded-md text-white" />
          </div>
          <div>
            <label className="text-white">CPF:</label>
            <input type="text" placeholder="Enter CPF" className="w-full px-4 py-2 bg-gray-700 rounded-md text-white" />
          </div>
          <div>
            <label className="text-white">RG:</label>
            <input type="text" placeholder="Enter RG" className="w-full px-4 py-2 bg-gray-700 rounded-md text-white" />
          </div>
          <div>
            <label className="text-white">Profession:</label>
            <input type="text" placeholder="Enter Profession" className="w-full px-4 py-2 bg-gray-700 rounded-md text-white" />
          </div>
          <div>
            <label className="text-white">Image:</label>
            <input type="file" className="w-full px-4 py-2 bg-gray-700 rounded-md text-white" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Register</button>
        </form>
        <p className="text-white mt-4 text-center">
          Already have an account? <a href="/pages/login" className="text-blue-500">Log in</a>
        </p>
      </div>
    </div>
  );
}
