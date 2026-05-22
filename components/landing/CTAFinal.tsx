import Reveal from '@/components/ui/Reveal';

export default function CTAFinal() {
  return (
    <section className="bg-gradient-to-r from-[#0D2137] to-[#1A3A5C] py-24">
      <div className="container-xl text-center space-y-8">
        <Reveal>
          <p className="eyebrow text-[#4FC3F7]">PRONTO PARA O PROXIMO PASSO?</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="heading-lg text-white max-w-3xl mx-auto">
            Proteja seu patrimonio e acelere seu crescimento financeiro
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="body-lg text-blue-200 max-w-xl mx-auto">
            Agende uma conversa com um Risk Advisor e descubra como o ecossistema AGC Capital
            pode transformar sua gestao de riscos e patrimonio.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#2196F3] text-white font-semibold rounded hover:bg-[#1565C0] transition-colors text-lg"
            >
              Falar com um Risk Advisor
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold border-2 border-white/30 rounded hover:bg-white/10 transition-colors text-lg"
            >
              Ver Solucoes
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
