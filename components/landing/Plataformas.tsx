'use client';

import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';

function ProtectMockup() {
  return (
    <div className="relative">
      <div className="bg-night border border-gold/20 rounded-lg overflow-hidden shadow-2xl shadow-gold/10">
        <div className="bg-deep p-3 flex items-center gap-2 border-b border-gold/10">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
          </div>
          <div className="flex-1 text-center text-paper/40 text-xs font-mono">protectconstru.com.br/dashboard</div>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-paper/40 text-xs uppercase tracking-wider mb-1">Constru Coins</div>
              <div className="display text-gold-gradient text-3xl tabular">12.847</div>
            </div>
            <div className="text-right">
              <div className="text-paper/40 text-xs">Obras protegidas</div>
              <div className="text-paper text-2xl tabular">7</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {['Seguros', 'Cursos', 'Benefícios'].map((t) => (
              <div key={t} className="bg-deep border border-gold/10 p-3 rounded text-center">
                <div className="text-gold text-xs mb-1">●</div>
                <div className="text-paper text-xs">{t}</div>
              </div>
            ))}
          </div>
          <div className="bg-deep/60 p-4 rounded border border-gold/10">
            <div className="text-paper/60 text-xs mb-3 uppercase tracking-wider">Próximos vencimentos</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-paper/80">Obra Residencial Vila Olímpia</span>
                <span className="pill pill-warn">12 dias</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-paper/80">Garantia Contratual — Lote A</span>
                <span className="pill pill-ok">45 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RiscoMockup() {
  const risks = [
    { label: 'Patrimonial', val: 88 },
    { label: 'Operacional', val: 64 },
    { label: 'Contratual', val: 71 },
    { label: 'Cyber', val: 52 },
  ];
  return (
    <div className="relative">
      <div className="bg-night border border-gold/20 rounded-lg overflow-hidden shadow-2xl shadow-gold/10">
        <div className="bg-deep p-3 flex items-center gap-2 border-b border-gold/10">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60"></span>
          </div>
          <div className="flex-1 text-center text-paper/40 text-xs font-mono">riscozero.app/diagnostico</div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-paper/40 text-xs uppercase tracking-wider mb-1">Score de Risco</div>
              <div className="display text-paper text-3xl tabular">
                73<span className="text-paper/40 text-lg">/100</span>
              </div>
            </div>
            <div className="text-right text-xs">
              <span className="pill pill-warn">Atenção moderada</span>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            {risks.map((r) => (
              <div key={r.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-paper/70">{r.label}</span>
                  <span className="text-gold tabular">{r.val}</span>
                </div>
                <div className="h-1 bg-deep rounded overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-gold-deep to-gold-light" style={{ width: `${r.val}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-deep/60 p-3 rounded border border-gold/10 text-xs text-paper/60">
            <span className="text-gold">Bonfim:</span> recomenda revisar apólice de Cyber e elevar cobertura D&O.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Plataformas() {
  return (
    <section id="protect-constru" className="section bg-gradient-to-b from-ink via-deep to-ink relative overflow-hidden">
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <Reveal>
          <SectionHeader
            marker="06"
            eyebrow="Plataformas Proprietárias"
            title="<em>Tecnologia</em> a serviço<br/>da gestão de risco."
            lead="Duas plataformas desenvolvidas pela AGC Capital, integradas ao ecossistema, para construtoras, incorporadoras e profissionais que precisam de inteligência em proteção."
          />
        </Reveal>

        <Reveal className="mb-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center glass-dark p-8 lg:p-12 relative">
            <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>

            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/30 text-gold-light text-xs font-mono mb-5">
                <Icon name="building" className="w-3.5 h-3.5" />
                PROTECT CONSTRU
              </div>
              <h3 className="display text-paper text-3xl md:text-4xl mb-5">
                O ecossistema de proteção da <em>construção civil</em>.
              </h3>
              <p className="text-paper/65 leading-relaxed mb-7">
                Criado para construtores, incorporadores, engenheiros e arquitetos. Une seguros, gestão de risco,
                educação e benefícios em uma plataforma única — com gamificação via Constru Coins.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {['Seguros para obras', 'Gestão de risco', 'Cursos e treinamentos', 'Benefícios', 'Constru Coins', 'Soluções p/ construção civil'].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-paper/70">
                    <Icon name="check" className="w-4 h-4 text-gold shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <ProtectMockup />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid lg:grid-cols-12 gap-10 items-center glass-dark p-8 lg:p-12 relative">
            <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>

            <div className="lg:col-span-7 order-2 lg:order-1">
              <RiscoMockup />
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/30 text-gold-light text-xs font-mono mb-5">
                <Icon name="compass" className="w-3.5 h-3.5" />
                RISCO ZERO
              </div>
              <h3 className="display text-paper text-3xl md:text-4xl mb-5">
                Plataforma inteligente de <em>diagnóstico</em> e gestão de riscos.
              </h3>
              <p className="text-paper/65 leading-relaxed mb-7">
                Tecnologia que mapeia exposições, organiza documentação securitária e recomenda proteções — com
                apoio técnico do agente Bonfim.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {['Diagnóstico de risco', 'Relatórios técnicos', 'Matriz de exposição', 'Organização documental', 'Inteligência securitária', 'Apoio técnico Bonfim'].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-paper/70">
                    <Icon name="check" className="w-4 h-4 text-gold shrink-0" />
                    <span>{f}</span>
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
