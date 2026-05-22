import Image from 'next/image';

const links = {
  'Soluções': ['Seguros Empresariais', 'Crédito Estruturado', 'Investimentos', 'Consórcios', 'Saúde Corporativa'],
  'Empresa': ['Quem Somos', 'Ecossistema AGC', 'Fábio Santos', 'Protect Constru', 'Risco Zero'],
  'Contato': ['contato@agccapital.com.br', 'fabio@agccapital.com.br', '+55 (11) 9 9999-9999', 'São Paulo, SP'],
};

interface FooterProps {
  onClientArea?: () => void;
}

export default function Footer({ onClientArea }: FooterProps) {
  return (
    <footer className="bg-[#0D2137] text-blue-200">
      <div className="container-xl py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Image src="/logo-agc.svg" alt="AGC Capital" width={140} height={44} className="h-11 w-auto brightness-0 invert" />
            <p className="text-blue-300 text-sm leading-relaxed">
              Ecossistema estratégico de proteção, crédito, patrimônio e gestão de riscos.
            </p>
          </div>
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item}>
                    <span className="text-blue-300 text-sm hover:text-[#4FC3F7] transition-colors cursor-default">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[#2196F3]/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-400 text-xs">
            &copy; {new Date().getFullYear()} AGC Capital. Todos os direitos reservados.
          </p>
          {onClientArea && (
            <button
              onClick={onClientArea}
              className="text-[#4FC3F7] text-xs hover:text-white transition-colors font-medium"
            >
              Área do Cliente →
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
