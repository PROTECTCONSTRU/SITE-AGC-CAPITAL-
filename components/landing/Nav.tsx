'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/ui/Icon';

interface NavProps {
  onClientArea: () => void;
}

export default function Nav({ onClientArea }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#quem-somos', label: 'Quem Somos' },
    { href: '#ecossistema', label: 'Ecossistema' },
    { href: '#solucoes', label: 'Soluções' },
    { href: '#consultoria', label: 'Consultoria' },
    { href: '#protect-constru', label: 'Protect Constru' },
    { href: '#fabio', label: 'Fábio Santos' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-ink/85 backdrop-blur-xl border-b border-gold/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 relative">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <circle cx="20" cy="20" r="19" fill="none" stroke="url(#g1)" strokeWidth="1" />
              <path
                d="M12 28 L20 10 L28 28 M15 22 L25 22"
                fill="none"
                stroke="url(#g1)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stopColor="#F0C75A" />
                  <stop offset="100%" stopColor="#A87E1F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="leading-tight">
            <div className="font-serif text-paper text-lg tracking-wide">AGC Capital</div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-gold/70 font-mono">
              Risk · Capital · Patrimony
            </div>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-sm">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button onClick={onClientArea} className="btn-ghost">
            <Icon name="lock" className="w-4 h-4" />
            Área do Cliente
          </button>
          <a href="#cta" className="btn-gold">
            Risk Advisor
            <Icon name="arrow-right" className="w-4 h-4" />
          </a>
        </div>

        <button className="lg:hidden text-paper" onClick={() => setMobileOpen(!mobileOpen)}>
          <Icon name={mobileOpen ? 'x' : 'menu'} className="w-6 h-6" />
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-ink/95 backdrop-blur-xl border-b border-gold/10">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-paper/80 py-2 border-b border-steel/30"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                onClientArea();
                setMobileOpen(false);
              }}
              className="btn-ghost w-full justify-center mt-2"
            >
              <Icon name="lock" className="w-4 h-4" /> Área do Cliente
            </button>
            <a href="#cta" onClick={() => setMobileOpen(false)} className="btn-gold w-full justify-center">
              Falar com Risk Advisor
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
