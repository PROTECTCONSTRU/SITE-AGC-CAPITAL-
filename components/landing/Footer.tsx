'use client';

import Icon from '@/components/ui/Icon';

interface FooterProps {
  onClientArea: () => void;
}

export default function Footer({ onClientArea }: FooterProps) {
  return (
    <footer className="bg-night border-t border-gold/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <svg viewBox="0 0 40 40" className="w-12 h-12">
                <circle cx="20" cy="20" r="19" fill="none" stroke="url(#fg)" strokeWidth="1" />
                <path
                  d="M12 28 L20 10 L28 28 M15 22 L25 22"
                  fill="none"
                  stroke="url(#fg)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="fg" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#F0C75A" />
                    <stop offset="100%" stopColor="#A87E1F" />
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <div className="font-serif text-paper text-2xl">AGC Capital</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold/70 font-mono">
                  Risk · Capital · Patrimony
                </div>
              </div>
            </div>
            <p className="text-paper/55 leading-relaxed max-w-md mb-6 text-sm">
              Ecossistema estratégico de proteção, crédito, patrimônio e gestão de riscos para empresas,
              famílias e construção civil.
            </p>
            <div className="flex gap-3">
              {[
                { name: 'instagram', href: 'https://instagram.com/fabiosantos.protectconstru' },
                { name: 'linkedin', href: '#' },
                { name: 'youtube', href: '#' },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gold/20 flex items-center justify-center text-paper/60 hover:text-gold hover:border-gold transition-all"
                >
                  <Icon name={s.name} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="eyebrow mb-5">Soluções</div>
            <ul className="space-y-3 text-sm">
              <li><a href="#solucoes" className="text-paper/60 hover:text-gold-light link-underline">Seguros</a></li>
              <li><a href="#solucoes" className="text-paper/60 hover:text-gold-light link-underline">Crédito</a></li>
              <li><a href="#solucoes" className="text-paper/60 hover:text-gold-light link-underline">Investimentos</a></li>
              <li><a href="#solucoes" className="text-paper/60 hover:text-gold-light link-underline">Saúde</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="eyebrow mb-5">Ecossistema</div>
            <ul className="space-y-3 text-sm">
              <li><a href="#protect-constru" className="text-paper/60 hover:text-gold-light link-underline">Protect Constru</a></li>
              <li><a href="#protect-constru" className="text-paper/60 hover:text-gold-light link-underline">Risco Zero</a></li>
              <li><a href="#livros" className="text-paper/60 hover:text-gold-light link-underline">Livros</a></li>
              <li><a href="#ipc" className="text-paper/60 hover:text-gold-light link-underline">IPC</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="eyebrow mb-5">Contato</div>
            <ul className="space-y-3 text-sm">
              <li className="text-paper/60">contato@agccapital.com.br</li>
              <li className="text-paper/60">+55 (11) 9 9999-9999</li>
              <li className="text-paper/60">São Paulo · Brasil</li>
              <li className="pt-2">
                <button
                  onClick={onClientArea}
                  className="inline-flex items-center gap-2 text-gold-light hover:text-gold link-underline text-sm"
                >
                  <Icon name="lock" className="w-4 h-4" />
                  Acessar Área do Cliente
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-rule mb-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-paper/40 text-xs">
          <div>© {new Date().getFullYear()} AGC Capital. Todos os direitos reservados.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold-light">Política de Privacidade</a>
            <a href="#" className="hover:text-gold-light">Termos de Uso</a>
            <a href="#" className="hover:text-gold-light">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
