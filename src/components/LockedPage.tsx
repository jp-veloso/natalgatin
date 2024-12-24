import React from 'react';
import { Lock, Unlock, KeyRound } from 'lucide-react';

interface LockedPageProps {
  password: string;
  attempts: number;
  onPasswordChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  getHint: () => string;
}

export function LockedPage({
  password,
  attempts,
  onPasswordChange,
  onSubmit,
  getHint,
}: LockedPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <Lock className="w-12 h-12 text-pink-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800">
            Página Protegida com muitoooo Dengo
          </h1>
          <p className="text-gray-600 mt-2">
            Digite a senha para desbloquear seu presente
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <div className="relative">
              <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => onPasswordChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                placeholder="Digite a senha..."
              />
            </div>
            {attempts > 0 && (
              <p className="text-red-500 text-sm mt-2">
                Senha incorreta. Tente novamente!
              </p>
            )}
            {getHint() && (
              <p className="text-pink-600 text-sm mt-2">{getHint()}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <Unlock className="w-5 h-5" />
            Desbloquear
          </button>
        </form>
      </div>
    </div>
  );
}