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
        <header
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                          scrolled
                            ? 'py-3 bg-white/95 backdrop-blur-xl border-b border-blue-100 shadow-sm'
                            : 'py-6 bg-transparent'
                }`}
              >
              <div className="container-xl flex items-center justify-between gap-8">
              
                {/* ── Logo ── */}
                      <a href="#" className="flex items-center gap-2 shrink-0">
                                <Image
                                              src="/logo-agc.svg"
                                              alt="AGC Capital"
                                              width={160}
                                              height={50}
                                              priority
                                              className="h-10 w-auto"
                                            />
                      </a>a>
              
                {/* ── Links desktop ── */}
                      <nav className="hidden lg:flex items-center gap-8">
                        {links.map(l => (
                            <a key={l.href} href={l.href} className="nav-link">
                              {l.label}
                            </a>a>
                          ))}
                      </nav>nav>
              
                {/* ── CTAs ── */}
                      <div className="hidden lg:flex items-center gap-3">
                                <button
                                              onClick={onClientArea}
                                              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#2196F3] border border-[#2196F3] rounded hover:bg-blue-50 transition-colors"
                                            >
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                                          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                            </svg>svg>
                                            Área do Cliente
                                </button>button>
                                <a
                                              href="https://wa.me/5511999999999?text=Olá%2C%20gostaria%20de%20falar%20com%20um%20Risk%20Advisor"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="btn-primary text-sm px-5 py-2 rounded"
                                            >
                                            Risk Advisor →
                                </a>a>
                      </div>div>
              
                {/* ── Mobile hamburger ── */}
                      <button
                                  className="lg:hidden flex flex-col gap-1.5 p-2"
                                  onClick={() => setMobileOpen(!mobileOpen)}
                                  aria-label="Menu"
                                >
                                <span className={`block h-0.5 w-6 bg-[#0D2137] transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}/>
                                <span className={`block h-0.5 w-6 bg-[#0D2137] transition-all ${mobileOpen ? 'opacity-0' : ''}`}/>
                                <span className={`block h-0.5 w-6 bg-[#0D2137] transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
                      </button>button>
              </div>div>
        
          {/* ── Mobile menu ── */}
          {mobileOpen && (
                        <div className="lg:hidden bg-white border-t border-blue-100 px-6 py-4 flex flex-col gap-4">
                          {links.map(l => (
                                      <a
                                                      key={l.href}
                                                      href={l.href}
                                                      className="text-sm text-[#0D2137] font-medium py-2 border-b border-blue-50"
                                                      onClick={() => setMobileOpen(false)}
                                                    >
                                        {l.label}
                                      </a>a>
                                    ))}
                                  <button
                                                onClick={() => { onClientArea(); setMobileOpen(false); }}
                                                className="btn-outline text-sm mt-2 rounded"
                                              >
                                              Área do Cliente
                                  </button>button>
                                  <a
                                                href="https://wa.me/5511999999999"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-primary text-sm rounded text-center"
                                              >
                                              Risk Advisor →
                                  </a>a>
                        </div>div>
              )}
        </header>header>
      );
}</header>
