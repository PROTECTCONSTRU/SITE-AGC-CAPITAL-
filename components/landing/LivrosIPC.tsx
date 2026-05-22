'use client';

import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';

const BOOKS = [
  {
    title: 'O ABC da Educação Financeira',
    desc: 'Conscientização financeira, organização patrimonial e construção de inteligência financeira.',
    img: '/livro-abc-educacao-financeira.png',
    bg: 'from-[#0D2137] to-[#1a3a5c]',
  },
  {
    title: 'Seguro é Dinheiro — Basta Ter Estratégia',
    desc: 'Como seguros podem ser utilizados como ferramentas estratégicas de proteção, continuidade e preservação patrimonial.',
    img: '/livro-seguro-dinheiro.png',
    bg: 'from-[#1a3a5c] to-[#0D2137]',
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
            label="Conteúdo IPC"
            title="Livros & Publicações"
            subtitle="Conhecimento prático para proteger e multiplicar patrimônio — da teoria à aplicação no mundo real."
          />
        </Reveal>

        {/* Books Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {BOOKS.map((book) => (
            <Reveal key={book.title}>
              <div className={`rounded-2xl overflow-hidden shadow-2xl flex flex-col bg-gradient-to-br ${book.bg} border border-[#2196F3]/20 hover:border-[#4FC3F7]/40 transition-all duration-300 group`}>
                {/* Book Image */}
                <div className="relative w-full flex items-center justify-center py-10 px-6 bg-white/5">
                  <div className="relative w-64 h-80 drop-shadow-2xl group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={book.img}
                      alt={book.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                {/* Book Info */}
                <div className="p-8 flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-white leading-snug">{book.title}</h3>
                  <p className="text-[#4FC3F7]/80 text-sm leading-relaxed">{book.desc}</p>
                  <a
                    href="#contato"
                    className="mt-2 inline-flex items-center gap-2 text-[#4FC3F7] hover:text-white font-semibold text-sm transition-colors group/link"
                  >
                    Saiba mais
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* IPC Stats */}
        <Reveal>
          <div className="mt-20 rounded-2xl bg-gradient-to-r from-[#0D2137] via-[#1a3a5c] to-[#0D2137] border border-[#2196F3]/20 p-10">
            <p className="text-center text-[#4FC3F7] font-semibold text-sm tracking-widest uppercase mb-8">
              IPC — Instituto de Proteção do Construtor
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {IPC_STATS.map((s) => (
                <div key={s.l} className="flex flex-col items-center gap-1">
                  <span className="text-4xl font-black text-white">{s.n}</span>
                  <span className="text-[#4FC3F7]/70 text-xs uppercase tracking-wide">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
