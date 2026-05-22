'use client';

import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';

export default function CTAFinal() {
  return (
    <section id="cta" className="section relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2400&q=85&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-12 h-px bg-gold"></span>
            <span className="eyebrow">Próximo passo</span>
            <span className="w-12 h-px bg-gold"></span>
          </div>

          <h2 className="display text-paper text-4xl md:text-5xl lg:text-7xl leading-[1.05] mb-8">
            Antes de contratar
            <br />
            produtos financeiros,
            <br />
            <em>entenda os riscos</em>
            <br />
            que você está assumindo.
          </h2>

          <p className="text-paper/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 font-light">
            A AGC Capital ajuda empresas e famílias a tomarem decisões mais seguras, estruturadas e inteligentes
            — com visão consultiva e ecossistema integrado.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-base px-8 py-4"
            >
              Falar com um Risk Advisor
              <Icon name="arrow-right" className="w-5 h-5" />
            </a>
            <a href="#solucoes" className="btn-ghost text-base px-8 py-4">
              Explorar soluções
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
