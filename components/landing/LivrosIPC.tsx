'use client';

import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';

const BOOKS = [
  {
    title: 'O ABC da Educação Financeira',
    desc: 'Conscientização financeira, organização patrimonial e construção de inteligência financeira.',
    bg: 'from-deep to-navy',
  },
  {
    title: 'Seguro é Dinheiro — Basta Ter Estratégia',
    desc: 'Como seguros podem ser utilizados como ferramentas estratégicas de proteção, continuidade e preservação patrimonial.',
    bg: 'from-navy to-steel',
  },
];

const IPC_STATS = [
  { n: '04', l: 'Edições / ano' },
  { n: '120+', l: 'Participantes' },
  { n: '20+', l: 'Especialistas' },
  { n: '100%', l: 'Curadoria AGC' },
];

export default function LivrosIPC() {
  return (
    <section id="livros" className="section">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <SectionHeader
            marker="07"
            eyebrow="Educação & Conteúdo"
            title="<em>Educação</em> antes da venda.<br/>Conteúdo antes da decisão."
            lead="Livros, eventos e imersões que formam consciência financeira e securitária — para clientes e parceiros do ecossistema AGC."
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {BOOKS.map((book, i) => (
            <Reveal key={book.title} delay={i * 120}>
              <div className="glass p-8 lg:p-10 group hover:border-gold/40 transition-all">
                <div className="flex gap-6 items-start">
                  <div className="relative shrink-0">
                    <div className={`w-28 h-40 bg-gradient-to-br ${book.bg} relative shadow-2xl rounded-sm overflow-hidden border border-gold/20 group-hover:scale-105 transition-transform duration-500`}>
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-black/40"></div>
                      <div className="p-3 flex flex-col h-full">
                        <div className="text-[8px] uppercase tracking-widest text-gold-light mb-auto">AGC · Editorial</div>
                        <div className="font-serif text-paper text-[10px] leading-tight">{book.title}</div>
                        <div className="mt-2 w-6 h-px bg-gold"></div>
                        <div className="text-[7px] text-paper/50 mt-1 uppercase tracking-wider">Fábio Santos</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="marker mb-2">Livro {String(i + 1).padStart(2, '0')}</div>
                    <h3 className="font-serif text-paper text-2xl mb-3">{book.title}</h3>
                    <p className="text-paper/60 text-sm leading-relaxed">{book.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div id="ipc" className="bg-gradient-to-br from-deep via-navy to-deep border border-gold/20 p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 blur-3xl rounded-full"></div>

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="eyebrow mb-4">IPC · Imersão Protect Constru</div>
                <h3 className="display text-paper text-3xl md:text-4xl mb-5">
                  Um <em>movimento</em> de educação,
                  <br />
                  networking e inteligência de mercado.
                </h3>
                <p className="text-paper/65 leading-relaxed mb-6">
                  Para profissionais da construção civil que querem dominar gestão de risco, proteção
                  patrimonial e estratégia financeira — em ambiente curado pela AGC Capital.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Eventos', 'Especialistas', 'Networking', 'Palestras', 'Conteúdo estratégico'].map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1.5 border border-gold/30 text-paper/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {IPC_STATS.map((s) => (
                  <div key={s.l} className="bg-ink/60 backdrop-blur p-5 border border-gold/10">
                    <div className="display text-gold-gradient text-3xl tabular">{s.n}</div>
                    <div className="text-paper/50 text-xs uppercase tracking-wider mt-1">{s.l}</div>
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
