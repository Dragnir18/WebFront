import React, { useState } from 'react';
import { useAuthStore } from '../../stores/authStore';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const signIn = useAuthStore(state => state.signIn);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-neutral-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2"
          required
        />
      </div>
      {error && (
        <div className="text-red-600 text-sm">{error}</div>
      )}
      <button
        type="submit"
        className="w-full bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
      >
        Se connecter
      </button>
    </form>
  );
};