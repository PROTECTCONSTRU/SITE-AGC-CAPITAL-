'use client';

import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';

const CATEGORIES = [
  { title: 'Seguradoras Parceiras', items: ['Tokio Marine','Porto Seguro','Liberty','Akad','Yelum','Pottencial','Junto Seguros','Sompo','Mapfre','Excelsior','Austral','Berkley','Essor'] },
  { title: 'Investimentos', items: ['XP Investimentos','BTG Pactual','Dominium'] },
  { title: 'Consórcios', items: ['Porto Seguro Consórcio','Embracon','Itaú Consórcios','Canopus','Roma Consórcios'] },
  { title: 'Operadoras de Saúde', items: ['Omint','SulAmérica','Bradesco Saúde','Amil','Unimed','Porto Saúde','NotreDame Intermédica','Alice'] },
];

export default function Parceiros() {
  return (
    <section id="parceiros" className="section bg-night relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            marker="04"
            eyebrow="Empresas & Parceiros"
            title="As <em>maiores instituições</em><br/>do mercado — em uma só mesa."
            lead="Trabalhamos com mais de 30 parceiros estratégicos para entregar a melhor cotação, condição e estrutura para cada cliente."
            align="center"
          />
        </Reveal>

        <div className="space-y-12">
          {CATEGORIES.map((cat, idx) => (
            <Reveal key={cat.title} delay={idx * 100}>
              <div>
                <div className="flex items-center gap-4 mb-5 max-w-xs">
                  <Icon name="dot" className="w-3 h-3 text-gold" />
                  <span className="eyebrow">{cat.title}</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {cat.items.map((item) => (
                    <div key={item} className="logo-chip">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
