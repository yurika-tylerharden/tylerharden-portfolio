import { useState } from 'react';

function Auth({ onAuthSuccess }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const hardcodedPassword = 'tyler123'; // <- change this to your secret

    if (password === hardcodedPassword) {
      onAuthSuccess();
    } else {
      setError('Incorrect password.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-80 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center">Restricted Access</h2>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded-lg w-full"
        />

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <button 
          type="submit"
          className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-all"
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Auth;