'use client';

import Image from 'next/image';
import Icon from '@/components/ui/Icon';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden hero-bg vignette">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2400&q=85&auto=format&fit=crop"
          alt="Arquitetura corporativa"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent"></div>
      </div>

      <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#D4A437" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32 lg:py-0 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-12 h-px bg-gold"></span>
              <span className="eyebrow">Est. · Risk Advisory & Capital Architecture</span>
            </div>

            <h1 className="display text-paper text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] mb-8">
              <span className="hero-title-line">
                <span style={{ animationDelay: '0.1s' }}>Proteção, crédito</span>
              </span>
              <span className="hero-title-line">
                <span style={{ animationDelay: '0.25s' }}>
                  e <em>inteligência</em>
                </span>
              </span>
              <span className="hero-title-line">
                <span style={{ animationDelay: '0.4s' }}>financeira.</span>
              </span>
            </h1>

            <p className="text-paper/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-4 font-light">
              Uma assessoria <span className="text-gold-light">full service</span> especializada em gestão de
              riscos, seguros, crédito, investimentos, consórcios e planejamento patrimonial — para empresas,
              famílias e a construção civil.
            </p>

            <p className="text-paper/50 text-sm md:text-base max-w-xl leading-relaxed mb-12 italic font-serif">
              Não somos uma corretora. Somos um ecossistema estratégico de proteção, crédito, patrimônio e
              gestão de riscos.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#solucoes" className="btn-gold">
                Conheça nossas soluções
                <Icon name="arrow-right" className="w-4 h-4" />
              </a>
              <a href="#cta" className="btn-ghost">
                Falar com um Risk Advisor
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="glass-dark p-8 relative">
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>

              <div className="eyebrow mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-dot"></span>
                Ecossistema AGC
              </div>

              <div className="space-y-7">
                <div>
                  <div className="display text-gold-gradient text-5xl tabular">04</div>
                  <div className="text-paper/60 text-xs uppercase tracking-widest mt-2">Verticais Integradas</div>
                  <div className="text-paper/40 text-xs mt-1">Seguros · Crédito · Investimentos · Saúde</div>
                </div>

                <div className="gold-rule"></div>

                <div>
                  <div className="display text-gold-gradient text-5xl tabular">30+</div>
                  <div className="text-paper/60 text-xs uppercase tracking-widest mt-2">Parceiros Estratégicos</div>
                  <div className="text-paper/40 text-xs mt-1">Seguradoras, bancos e operadoras de saúde</div>
                </div>

                <div className="gold-rule"></div>

                <div>
                  <div className="display text-gold-gradient text-5xl tabular">02</div>
                  <div className="text-paper/60 text-xs uppercase tracking-widest mt-2">Plataformas Proprietárias</div>
                  <div className="text-paper/40 text-xs mt-1">Protect Constru · Risco Zero</div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-paper/40 text-xs font-mono">
              <span>São Paulo · BR</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot"></span>
                Open for advisory
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-paper/40">
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Role para explorar</span>
        <Icon name="arrow-down" className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
