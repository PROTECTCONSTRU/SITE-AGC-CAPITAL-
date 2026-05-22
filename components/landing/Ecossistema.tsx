'use client';

import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';

const NODES = [
  { label: 'Protect Constru', angle: 0 },
  { label: 'Risco Zero', angle: 30 },
  { label: 'Seguros', angle: 60 },
  { label: 'Crédito', angle: 90 },
  { label: 'Investimentos', angle: 120 },
  { label: 'Consórcios', angle: 150 },
  { label: 'Saúde', angle: 180 },
  { label: 'Patrimônio', angle: 210 },
  { label: 'Educação', angle: 240 },
  { label: 'Livros', angle: 270 },
  { label: 'IPC', angle: 300 },
  { label: 'Gestão de Risco', angle: 330 },
];

export default function Ecossistema() {
  return (
    <section id="ecossistema" className="section bg-gradient-to-b from-ink via-night to-ink relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <Reveal>
          <SectionHeader
            marker="02"
            eyebrow="O Ecossistema"
            title="Doze frentes conectadas.<br/><em>Uma só</em> arquitetura de proteção."
            lead="Cada vertical do ecossistema AGC Capital conversa com as demais. A integração entre proteção, crédito, patrimônio e gestão de risco é o que torna cada estratégia mais inteligente que a soma das partes."
            align="center"
          />
        </Reveal>

        <Reveal className="relative">
          <div className="relative aspect-square max-w-[680px] mx-auto">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <defs>
                <radialGradient id="centerGlow" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#F0C75A" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#F0C75A" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="ringStroke" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#D4A437" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#D4A437" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              <circle cx="200" cy="200" r="180" fill="none" stroke="url(#ringStroke)" strokeWidth="0.5" strokeDasharray="2 4" />
              <circle cx="200" cy="200" r="150" fill="none" stroke="url(#ringStroke)" strokeWidth="0.5" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="url(#ringStroke)" strokeWidth="0.8" />

              <circle cx="200" cy="200" r="80" fill="url(#centerGlow)" />

              {NODES.map((n, i) => {
                const a = ((n.angle - 90) * Math.PI) / 180;
                const x2 = 200 + Math.cos(a) * 175;
                const y2 = 200 + Math.sin(a) * 175;
                return (
                  <line
                    key={i}
                    x1="200"
                    y1="200"
                    x2={x2}
                    y2={y2}
                    stroke="rgba(212,164,55,0.15)"
                    strokeWidth="0.5"
                  />
                );
              })}
            </svg>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-deep to-ink border border-gold/30 flex flex-col items-center justify-center shadow-2xl shadow-gold/10">
                <svg viewBox="0 0 40 40" className="w-8 h-8 md:w-10 md:h-10 mb-2">
                  <path
                    d="M12 30 L20 8 L28 30 M15 23 L25 23"
                    fill="none"
                    stroke="#F0C75A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="font-serif text-paper text-sm md:text-lg">AGC Capital</div>
                <div className="text-[8px] md:text-[9px] uppercase tracking-widest text-gold/70 mt-0.5 font-mono">
                  Núcleo
                </div>
              </div>
            </div>

            {NODES.map((n, i) => {
              const a = ((n.angle - 90) * Math.PI) / 180;
              const radius = 44;
              const x = 50 + Math.cos(a) * radius;
              const y = 50 + Math.sin(a) * radius;
              const isHero = i < 2;
              return (
                <div
                  key={n.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div
                    className={`px-3 py-2 md:px-4 md:py-2.5 rounded-full border text-[10px] md:text-xs whitespace-nowrap backdrop-blur-sm ${
                      isHero
                        ? 'bg-gold/15 border-gold text-gold-light font-medium'
                        : 'bg-ink/80 border-gold/20 text-paper/80'
                    }`}
                  >
                    {n.label}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="mt-16 grid sm:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
          <div>
            <div className="display text-gold-gradient text-4xl mb-2">12</div>
            <div className="text-paper/60 text-sm">Verticais conectadas</div>
          </div>
          <div>
            <div className="display text-gold-gradient text-4xl mb-2">2</div>
            <div className="text-paper/60 text-sm">Plataformas proprietárias</div>
          </div>
          <div>
            <div className="display text-gold-gradient text-4xl mb-2">1</div>
            <div className="text-paper/60 text-sm">Visão integrada de proteção</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
