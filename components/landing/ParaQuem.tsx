'use client';

import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';

const PERSONAS = [
  { i: 'briefcase', l: 'Empresas' },
  { i: 'user', l: 'Famílias' },
  { i: 'building', l: 'Construtoras' },
  { i: 'building', l: 'Incorporadoras' },
  { i: 'compass', l: 'Engenheiros' },
  { i: 'spark', l: 'Arquitetos' },
  { i: 'briefcase', l: 'Empresários' },
  { i: 'user', l: 'Profissionais Liberais' },
  { i: 'building', l: 'Síndicos' },
  { i: 'briefcase', l: 'Administradoras' },
  { i: 'book', l: 'Escolas e Educacionais' },
];

const DIFERENCIAIS = [
  { t: 'Atendimento Consultivo', d: 'Cada cliente é tratado como caso único — não como cotação de mercado.' },
  { t: 'Visão Integrada', d: 'Risco e patrimônio analisados em conjunto, não em silos.' },
  { t: 'Especialização Construção', d: 'Domínio técnico da cadeia da construção civil — riscos, normas, contratos.' },
  { t: 'Arquitetura Personalizada', d: 'Estruturação financeira sob medida, não pacote de prateleira.' },
  { t: 'Educação Antes da Venda', d: 'Conteúdo, livros e imersões formam decisores conscientes.' },
  { t: 'Gestão Estratégica de Proteção', d: 'Antecipação de riscos, monitoramento e revisão contínua.' },
];

export default function ParaQuem() {
  return (
    <section className="section bg-night">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            marker="08"
            eyebrow="Para Quem Atendemos"
            title="Decisores que <em>protegem</em> o<br/>que importa — pessoa e patrimônio."
            align="center"
          />
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-gold/10 mb-24">
          {PERSONAS.map((p, i) => (
            <Reveal key={p.l} delay={i * 40} className="bg-ink p-6 group hover:bg-deep transition-all">
              <Icon name={p.i} className="w-6 h-6 text-gold mb-3" />
              <div className="text-paper text-sm">{p.l}</div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <SectionHeader marker="09" eyebrow="Diferenciais" title="O que nos torna <em>únicos</em>." align="center" />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
          {DIFERENCIAIS.map((d, i) => (
            <Reveal key={d.t} delay={i * 60} className="bg-ink p-7 lg:p-9 group hover:bg-deep transition-all">
              <div className="marker mb-4">+{String(i + 1).padStart(2, '0')}</div>
              <h4 className="font-serif text-paper text-xl mb-3">{d.t}</h4>
              <p className="text-paper/55 text-sm leading-relaxed">{d.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
