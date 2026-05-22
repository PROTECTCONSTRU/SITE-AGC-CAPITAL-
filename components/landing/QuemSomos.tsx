'use client';

import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';

const PILLARS = [
  { icon: 'shield', title: 'Proteção', desc: 'Estruturação de seguros sob medida para riscos empresariais, patrimoniais, operacionais e pessoais.' },
  { icon: 'coins', title: 'Liquidez', desc: 'Crédito estruturado, consórcios, home equity e funding imobiliário para crescimento sustentável.' },
  { icon: 'trend', title: 'Patrimônio', desc: 'Investimentos, previdência, sucessão e estratégias de preservação e diversificação.' },
  { icon: 'compass', title: 'Continuidade', desc: 'Gestão integrada de risco, planejamento sucessório e blindagem operacional para o longo prazo.' },
];

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            marker="01"
            eyebrow="Quem Somos"
            title="Estruturamos <em>proteção</em>, liquidez e<br/> continuidade — em um único ecossistema."
            lead="A AGC Capital nasceu para ir além da venda de produtos financeiros. Atuamos de forma consultiva, estratégica e integrada, unindo seguros, crédito, investimentos, planejamento patrimonial e gestão de riscos."
          />
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative">
              <div className="absolute -left-4 -top-4 text-gold/15 font-serif text-9xl leading-none">&ldquo;</div>
              <p className="display text-paper text-2xl md:text-3xl leading-snug relative">
                Nosso objetivo é estruturar{' '}
                <em className="text-gold-light not-italic font-light italic">
                  proteção, liquidez, continuidade e segurança
                </em>{' '}
                para empresas, famílias e operações.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-px bg-gold"></div>
                <div>
                  <div className="text-paper text-sm font-medium">Fábio Santos</div>
                  <div className="text-paper/50 text-xs uppercase tracking-wider">Risk Advisor — AGC Capital</div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-gold/10">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="bg-ink p-8 lg:p-10 group hover:bg-night transition-colors duration-500">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/30 text-gold shrink-0 group-hover:border-gold group-hover:bg-gold/5 transition-all">
                    <Icon name={p.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="marker mb-2">{String(i + 1).padStart(2, '0')}</div>
                    <h3 className="font-serif text-paper text-2xl mb-3">{p.title}</h3>
                    <p className="text-paper/60 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
