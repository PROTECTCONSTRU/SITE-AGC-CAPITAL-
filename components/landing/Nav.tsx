'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

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
    { href: '#quem-somos',    label: 'Quem Somos' },
    { href: '#ecossistema',   label: 'Ecossistema' },
    { href: '#solucoes',      label: 'Soluções' },
    { href: '#consultoria',   label: 'Consultoria' },
    { href: '#protect-constru', label: 'Protect Constru' },
    { href: '#fabio',         label: 'Fábio Santos' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0D2137]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-xl flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image src="/logo-agc.svg" alt="AGC Capital" fill className="object-contain" />
          </div>
          <span className="text-white font-bold text-lg hidden sm:block">AGC Capital</span>
        </a>
        <ul className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[#4FC3F7]/80 hover:text-white text-sm font-medium transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex items-center gap-3">
          <button onClick={onClientArea} className="text-[#4FC3F7] text-sm font-medium hover:text-white transition-colors">
            Área do Cliente
          </button>
          <a href="#contato" className="bg-[#2196F3] hover:bg-[#4FC3F7] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
            Falar com Especialista
          </a>
        </div>
        <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-[#0D2137] border-t border-[#2196F3]/20 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block text-[#4FC3F7]/80 hover:text-white text-sm py-1" onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#2196F3]/20 flex flex-col gap-2">
            <button onClick={onClientArea} className="text-[#4FC3F7] text-sm font-medium text-left">Área do Cliente</button>
            <a href="#contato" className="bg-[#2196F3] text-white text-sm font-semibold px-4 py-2 rounded-lg text-center">Falar com Especialista</a>
          </div>
        </div>
      )}
    </nav>
  );
}
