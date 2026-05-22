'use client';

import { useState } from 'react';
import Icon from '@/components/ui/Icon';
import { storage, STORAGE_KEYS } from '@/lib/storage';
import type { User } from '@/types';

interface LoginScreenProps {
  onLogin: (u: User) => void;
  onClose: () => void;
}

export default function LoginScreen({ onLogin, onClose }: LoginScreenProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email.trim()) return;
    setLoading(true);
    const user: User = {
      name: name.trim() || email.split('@')[0],
      email: email.trim(),
      since: new Date().toISOString(),
    };
    storage.set(STORAGE_KEYS.user, user);
    setTimeout(() => {
      onLogin(user);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-[100] modal-backdrop flex items-center justify-center p-4">
      <div className="relative max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-paper/60 hover:text-gold flex items-center gap-2 text-sm"
        >
          <Icon name="x" className="w-4 h-4" /> Fechar
        </button>

        <div className="bg-night border border-gold/20 p-8 lg:p-10 relative">
          <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>

          <div className="flex items-center gap-3 mb-8">
            <svg viewBox="0 0 40 40" className="w-10 h-10">
              <circle cx="20" cy="20" r="19" fill="none" stroke="url(#lg)" strokeWidth="1" />
              <path
                d="M12 28 L20 10 L28 28 M15 22 L25 22"
                fill="none"
                stroke="url(#lg)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="lg" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stopColor="#F0C75A" />
                  <stop offset="100%" stopColor="#A87E1F" />
                </linearGradient>
              </defs>
            </svg>
            <div>
              <div className="font-serif text-paper text-lg">AGC Capital</div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-gold/70 font-mono">Área do Cliente</div>
            </div>
          </div>

          <h2 className="display text-paper text-3xl mb-3">Acesse sua área</h2>
          <p className="text-paper/60 text-sm mb-8">
            Gerencie apólices, vencimentos, contratos e documentos do seu ecossistema AGC.
          </p>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-paper/60 text-xs uppercase tracking-wider mb-2">Nome</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Como prefere ser chamado(a)"
                className="w-full bg-deep border border-gold/15 text-paper px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label className="block text-paper/60 text-xs uppercase tracking-wider mb-2">E-mail</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="seu@email.com"
                className="w-full bg-deep border border-gold/15 text-paper px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
              />
            </div>
          </div>

          <button
            onClick={handleLogin}
            disabled={!email.trim() || loading}
            className="btn-gold w-full justify-center disabled:opacity-50"
          >
            {loading ? (
              'Acessando...'
            ) : (
              <>
                Entrar <Icon name="arrow-right" className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="mt-6 text-center text-paper/40 text-xs">Ambiente seguro · dados criptografados</div>
        </div>
      </div>
    </div>
  );
}
