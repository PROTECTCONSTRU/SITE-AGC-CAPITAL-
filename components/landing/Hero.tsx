'use client';

import Reveal from '@/components/ui/Reveal';

interface HeroProps {
  onClientArea: () => void;
}

export default function Hero({ onClientArea }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0D2137] via-[#1A3A5C] to-[#2196F3]"
    >
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(79,195,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(79,195,247,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />
      <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-32 pb-20">
        <div className="space-y-8">
          <Reveal>
            <p className="eyebrow text-[#4FC3F7]">EST. &middot; RISK ADVISORY &amp; CAPITAL ARCHITECTURE</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading-xl text-white">
              Prote&ccedil;&atilde;o,{' '}
              <span className="text-[#4FC3F7]">Cr&eacute;dito</span>
              {' '}e Intelig&ecirc;ncia{' '}
              <span className="text-[#4FC3F7]">Financeira</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="body-lg text-blue-200 max-w-xl">
              Uma assessoria{' '}
              <strong className="text-white font-semibold">full service</strong>{' '}
              especializada em gest&atilde;o de riscos, seguros, cr&eacute;dito,
              investimentos, cons&oacute;rcios e planejamento patrimonial &mdash;
              para empresas, fam&iacute;lias e a constru&ccedil;&atilde;o civil.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-blue-300 italic text-sm max-w-lg">
              N&atilde;o somos uma corretora. Somos um ecossistema estrat&eacute;gico de
              prote&ccedil;&atilde;o, cr&eacute;dito, patrim&ocirc;nio e gest&atilde;o de riscos.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#solucoes"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2196F3] text-white font-semibold rounded hover:bg-[#1565C0] transition-colors"
              >
                Conhe&ccedil;a nossas solu&ccedil;&otilde;es &rarr;
              </a>
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20Risk%20Advisor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white font-semibold border border-white/40 rounded hover:bg-white/10 transition-colors"
              >
                Falar com um Risk Advisor
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 space-y-6">
              <p className="eyebrow text-[#4FC3F7]">&middot; ECOSSISTEMA AGC</p>
              <div className="border-b border-white/10 pb-5">
                <div className="stat-number text-white">04</div>
                <p className="text-white font-semibold mt-1">VERTICAIS INTEGRADAS</p>
                <p className="text-blue-200 text-sm mt-1">Seguros &middot; Cr&eacute;dito &middot; Investimentos &middot; Sa&uacute;de</p>
              </div>
              <div className="border-b border-white/10 pb-5">
                <div className="stat-number text-[#4FC3F7]">30+</div>
                <p className="text-white font-semibold mt-1">PARCEIROS ESTRAT&Eacute;GICOS</p>
                <p className="text-blue-200 text-sm mt-1">Seguradoras, bancos e operadoras de sa&uacute;de</p>
              </div>
              <div>
                <div className="stat-number text-white">02</div>
                <p className="text-white font-semibold mt-1">PLATAFORMAS PROPRIET&Aacute;RIAS</p>
                <p className="text-blue-200 text-sm mt-1">Protect Constru &middot; Risco Zero</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-blue-300 text-xs font-mono">
              <span>S&atilde;o Paulo &middot; BR</span>
              <span className="flex items-center gap-2">
                <span className="pulse-dot" />
                Open for advisory
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
