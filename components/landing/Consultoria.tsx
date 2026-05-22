'use client';

import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';

const SERVICES = [
  'Diagnóstico de Risco','Matriz de Risco','Revisão de Apólices','Gestão de Risco para Obras',
  'Planejamento Securitário','Planejamento Patrimonial','Estruturação de Proteção Empresarial',
  'Planejamento Sucessório','Gestão de Sinistros','Consultoria para Construtoras e Incorporadoras','Treinamentos e Palestras',
];

export default function Consultoria() {
  return (
    <section id="consultoria" className="section relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <SectionHeader
              marker="05"
              eyebrow="Serviços Consultivos"
              title="Inteligência <em>estratégica</em> em gestão de riscos."
              lead="A AGC Capital não vende apenas produtos — desenhamos a arquitetura completa de proteção, antecipando riscos e desenhando saídas antes da emergência."
            />
            <a href="#cta" className="btn-gold mt-4">
              Solicitar diagnóstico
              <Icon name="arrow-right" className="w-4 h-4" />
            </a>
          </Reveal>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-gold/10">
            {SERVICES.map((s, i) => (
              <Reveal key={s} delay={i * 50} className="bg-ink p-6 group hover:bg-deep transition-all">
                <div className="flex items-start gap-4">
                  <div className="marker pt-1 shrink-0">{String(i + 1).padStart(2, '0')}</div>
                  <div className="flex-1">
                    <div className="text-paper text-base font-medium leading-snug">{s}</div>
                    <div className="mt-2 h-px bg-gold/0 group-hover:bg-gold/40 transition-all"></div>
                  </div>
                  <Icon name="arrow-up-right" className="w-4 h-4 text-paper/20 group-hover:text-gold transition-all" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
