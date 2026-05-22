'use client';

import { useState } from 'react';
import Icon from '@/components/ui/Icon';
import { formatDate } from '@/lib/helpers';
import type { User } from '@/types';

interface ProfileViewProps {
  user: User;
  onLogout: () => void;
}

export default function ProfileView({ user, onLogout }: ProfileViewProps) {
  const [advisorMsg, setAdvisorMsg] = useState('');

  return (
    <div className="space-y-6">
      <div>
        <div className="text-paper/40 text-xs font-mono uppercase tracking-wider mb-1">Conta</div>
        <h1 className="display text-paper text-3xl md:text-4xl">Perfil</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-night border border-gold/10 p-6 text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold to-gold-deep mx-auto flex items-center justify-center text-ink text-3xl font-medium mb-4">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="font-serif text-paper text-xl">{user.name}</div>
          <div className="text-paper/50 text-sm mt-1">{user.email}</div>
          <div className="mt-4 pt-4 border-t border-gold/10 text-xs">
            <span className="pill pill-info">Cliente AGC desde {formatDate(user.since)}</span>
          </div>
        </div>

        <div className="lg:col-span-2 bg-night border border-gold/10 p-6">
          <div className="eyebrow mb-1">Seu Risk Advisor</div>
          <h3 className="font-serif text-paper text-2xl mb-1">Fábio Santos</h3>
          <p className="text-paper/55 text-sm mb-5">
            Especialista em proteção patrimonial e estruturação financeira.
          </p>

          <textarea
            value={advisorMsg}
            onChange={(e) => setAdvisorMsg(e.target.value)}
            rows={4}
            placeholder="Envie uma mensagem para seu advisor..."
            className="w-full bg-deep border border-gold/15 text-paper text-sm p-3 mb-3 focus:outline-none focus:border-gold/50 transition-colors resize-none"
          />
          <div className="flex flex-wrap gap-2">
            <a
              href={`https://wa.me/5511999999999?text=${encodeURIComponent(advisorMsg || 'Olá, gostaria de conversar.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Enviar via WhatsApp <Icon name="arrow-right" className="w-4 h-4" />
            </a>
            <a href={`mailto:fabio@agccapital.com.br?body=${encodeURIComponent(advisorMsg)}`} className="btn-ghost">
              Por e-mail
            </a>
          </div>
        </div>
      </div>

      <div className="bg-night border border-gold/10 p-6">
        <div className="eyebrow mb-4">Preferências de notificação</div>
        <div className="space-y-3">
          {[
            { l: 'Lembretes de vencimento de apólice', d: '30 dias antes' },
            { l: 'Avisos de pagamento', d: '5 dias antes' },
            { l: 'Resumo mensal do portfolio', d: 'Todo dia 1º do mês' },
            { l: 'Novidades e conteúdo AGC', d: 'Educacional' },
          ].map((o) => (
            <label
              key={o.l}
              className="flex items-center justify-between p-3 bg-deep border border-gold/10 cursor-pointer hover:border-gold/30"
            >
              <div>
                <div className="text-paper text-sm">{o.l}</div>
                <div className="text-paper/40 text-xs">{o.d}</div>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-gold" />
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={onLogout}
        className="w-full text-paper/60 hover:text-red-400 transition-colors py-3 text-sm flex items-center justify-center gap-2"
      >
        <Icon name="logout" className="w-4 h-4" /> Sair da área do cliente
      </button>
    </div>
  );
}
