'use client';

import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';

const STATS = [
  { n: '15+', l: 'Anos de mercado' },
  { n: '500+', l: 'Clientes atendidos' },
  { n: '02', l: 'Livros publicados' },
];

export default function FabioSantos() {
  return (
    <section id="fabio" className="section relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-deep via-navy to-deep rounded-sm overflow-hidden relative border border-gold/20">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=85&auto=format&fit=crop"
                  alt="Fábio Santos"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover opacity-90 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-paper/40 text-[10px] uppercase tracking-[0.3em] font-mono mb-2">Risk Advisor</div>
                  <div className="font-serif text-paper text-2xl">Fábio Santos</div>
                  <div className="mt-3 w-12 h-px bg-gold"></div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gold text-ink px-4 py-2 font-serif italic text-lg">
                f. santos
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={150}>
            <div className="flex items-center gap-3 mb-6">
              <span className="marker">10</span>
              <span className="w-12 h-px bg-gold"></span>
              <span className="eyebrow">Fundador · Risk Advisor</span>
            </div>

            <h2 className="display text-paper text-4xl md:text-5xl lg:text-6xl mb-6">
              Fábio Santos.
              <br />
              <em>Especialista</em> em proteção e
              <br />
              estruturação financeira.
            </h2>

            <p className="text-paper/70 text-lg leading-relaxed mb-6 font-light">
              Atuação voltada principalmente ao mercado da construção civil, unindo conhecimento técnico de risco,
              leitura de contrato e visão patrimonial — para que decisões sobre seguro, crédito e proteção sejam
              tomadas com consciência, não por intuição.
            </p>

            <p className="text-paper/55 leading-relaxed mb-10 italic font-serif">
              &ldquo;Antes de contratar produtos financeiros, é preciso entender quais riscos você está assumindo.
              Esse é o meu trabalho — traduzir risco em estratégia.&rdquo;
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {STATS.map((s) => (
                <div key={s.l}>
                  <div className="display text-gold-gradient text-3xl tabular">{s.n}</div>
                  <div className="text-paper/50 text-xs uppercase tracking-wider mt-1">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://instagram.com/fabiosantos.protectconstru"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Icon name="instagram" className="w-4 h-4" />
                @fabiosantos.protectconstru
              </a>
              <a href="#cta" className="btn-gold">
                Agendar conversa
                <Icon name="arrow-right" className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
