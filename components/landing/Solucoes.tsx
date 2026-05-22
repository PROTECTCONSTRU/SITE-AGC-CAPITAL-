'use client';

import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';

const GROUPS = [
  {
    key: 'seguros',
    icon: 'shield',
    title: 'Seguros',
    desc: 'Soluções de proteção patrimonial, empresarial, operacional e pessoal estruturadas conforme o perfil de risco de cada cliente.',
    items: [
      'Seguro de Vida','Risco de Engenharia','Responsabilidade Civil Obras','Responsabilidade Civil Profissional',
      'Seguro Garantia','Garantia Judicial','Garantia Contratual','Seguro Patrimonial',
      'Seguro Empresarial','Seguro Residencial','Seguro Condomínio','Seguro Auto',
      'Seguro Cyber','Seguro D&O','Seguro E&O','Seguro Habitacional','Seguro Saúde','Seguro de Equipamentos'
    ],
  },
  {
    key: 'credito',
    icon: 'coins',
    title: 'Crédito & Estruturação',
    desc: 'Soluções financeiras estruturadas para expansão, liquidez, funding e crescimento sustentável.',
    items: ['Consórcios','Home Equity','Funding Imobiliário','Crédito Empresarial','Crédito com Garantia','Financiamento Habitacional','Capital para Obras','Estruturação Financeira'],
  },
  {
    key: 'investimentos',
    icon: 'trend',
    title: 'Investimentos & Patrimônio',
    desc: 'Estratégias voltadas à preservação patrimonial, sucessão, crescimento financeiro e proteção familiar.',
    items: ['Investimentos','Previdência Privada','Planejamento Sucessório','Organização Patrimonial','Proteção Familiar','Estratégias de Liquidez','Diversificação Patrimonial'],
  },
  {
    key: 'saude',
    icon: 'heart-pulse',
    title: 'Saúde & Benefícios',
    desc: 'Soluções corporativas e familiares para proteção da saúde e gestão inteligente de benefícios.',
    items: ['Convênio Médico Empresarial','Convênio Médico Familiar','Benefícios Corporativos','Planos Odontológicos','Revisão de Planos','Estratégias de Redução de Custos'],
  },
];

export default function Solucoes() {
  const [active, setActive] = useState('seguros');
  const current = GROUPS.find((g) => g.key === active)!;

  return (
    <section id="solucoes" className="section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            marker="03"
            eyebrow="Nossas Soluções"
            title="Quatro frentes. <em>Centenas</em> de combinações estratégicas."
            lead="Cada cliente é único. Por isso, estruturamos arquiteturas financeiras personalizadas que combinam seguros, crédito, investimentos e saúde conforme o momento, o risco e os objetivos."
          />
        </Reveal>

        <div className="flex flex-wrap gap-2 mb-12 border-b border-gold/10 pb-1">
          {GROUPS.map((g) => (
            <button
              key={g.key}
              onClick={() => setActive(g.key)}
              className={`flex items-center gap-2.5 px-5 py-3.5 transition-all border-b-2 -mb-px ${
                active === g.key ? 'border-gold text-gold-light' : 'border-transparent text-paper/50 hover:text-paper'
              }`}
            >
              <Icon name={g.icon} className="w-4 h-4" />
              <span className="text-sm tracking-wide">{g.title}</span>
            </button>
          ))}
        </div>

        <Reveal key={active}>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="text-paper/40 text-sm font-mono mb-3">— {current.title}</div>
              <h3 className="display text-paper text-3xl md:text-4xl mb-5">{current.title}</h3>
              <p className="text-paper/65 leading-relaxed mb-8">{current.desc}</p>
              <a href="#cta" className="inline-flex items-center gap-2 text-gold-light link-underline text-sm">
                Solicitar análise personalizada
                <Icon name="arrow-up-right" className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
                {current.items.map((item, i) => (
                  <div key={item} className="bg-ink p-5 group hover:bg-deep transition-all duration-300 cursor-pointer">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span className="marker">{String(i + 1).padStart(2, '0')}</span>
                      <Icon name="arrow-up-right" className="w-3.5 h-3.5 text-paper/30 group-hover:text-gold transition-colors" />
                    </div>
                    <div className="text-paper text-sm leading-snug font-medium">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
