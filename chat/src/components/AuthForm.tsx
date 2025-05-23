import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, LogIn, UserPlus } from 'lucide-react';
import { saveUser, login } from '../lib/auth';

interface AuthFormProps {
  onLogin: () => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      if (login(username, password)) {
        localStorage.setItem('currentUser', username);
        onLogin();
      } else {
        setError('Invalid credentials');
      }
    } else {
      saveUser({ username, password });
      localStorage.setItem('currentUser', username);
      onLogin();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gray-900 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-purple-600/10"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        <div className="relative">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            {isLogin ? (
              <LogIn className="text-purple-500" />
            ) : (
              <UserPlus className="text-purple-500" />
            )}
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-gray-700 rounded-lg px-10 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-700 rounded-lg px-10 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-sm"
              >
                {error}
              </motion.p>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-2 font-medium transition-colors"
              type="submit"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </motion.button>

            <p className="text-center text-gray-400">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-purple-500 hover:text-purple-400 transition-colors"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};