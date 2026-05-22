'use client';

import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0D2137] via-[#1A3A5C] to-[#2196F3]"
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(79,195,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(79,195,247,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-xl relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-32 pb-20">
        {/* Left column — text */}
        <div className="space-y-8">
          <Reveal>
            <p className="eyebrow text-[#4FC3F7]">EST. &middot; RISK ADVISORY &amp; CAPITAL ARCHITECTURE</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="heading-xl text-white">
              Prote&ccedil;&atilde;o,{' '}
              <span className="text-[#4FC3F7]">Cr&eacute;dito</span>
              <br />
              &amp; Intelig&ecirc;ncia
              <br />
              <span className="text-[#2196F3]">Financeira</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="body-lg text-[#4FC3F7]/80 max-w-lg">
              Conectamos empresas e pessoas a solu&ccedil;&otilde;es de prote&ccedil;&atilde;o patrimonial,
              cr&eacute;dito estrat&eacute;gico e educa&ccedil;&atilde;o financeira com curadoria especializada.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contato"
                className="btn-primary bg-[#2196F3] hover:bg-[#4FC3F7] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Falar com Especialista
              </a>
              <a
                href="#ecossistema"
                className="btn-secondary border-2 border-[#4FC3F7]/40 text-[#4FC3F7] hover:bg-[#4FC3F7]/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Conhe&ccedil;a o Ecossistema
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right column — logo */}
        <Reveal delay={0.4}>
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80 drop-shadow-2xl">
              <Image
                src="/logo-agc.svg"
                alt="AGC Capital"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Gradient fade bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D2137] to-transparent" />
    </section>
  );
}
