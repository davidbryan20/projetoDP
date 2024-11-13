import React from 'react';

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">User Login</h1>
        <form className="space-y-4">
          <div>
            <label className="text-white">Username:</label>
            <input type="text" placeholder="Enter username" className="w-full px-4 py-2 bg-gray-700 rounded-md text-white" />
          </div>
          <div>
            <label className="text-white">Password:</label>
            <input type="password" placeholder="Enter password" className="w-full px-4 py-2 bg-gray-700 rounded-md text-white" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Login</button>
        </form>
        <p className="text-white mt-4 text-center">
          Don’t have an account? <a href="/register" className="text-blue-500">Sign up</a>
        </p>
      </div>
    </div>
  );
}
