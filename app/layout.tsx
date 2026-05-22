import type { Metadata } from 'next';
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AGC Capital — Proteção, Crédito e Inteligência Financeira',
  description:
    'Ecossistema estratégico de proteção, crédito, patrimônio e gestão de riscos para empresas, famílias e construção civil.',
  keywords: [
    'AGC Capital', 'seguros', 'gestão de risco', 'proteção patrimonial',
    'planejamento patrimonial', 'crédito', 'consórcios', 'construção civil',
    'Protect Constru', 'Risco Zero', 'Fábio Santos'
  ],
  openGraph: {
    title: 'AGC Capital — Proteção, Crédito e Inteligência Financeira',
    description:
      'Assessoria full service em gestão de riscos, seguros, crédito, investimentos, consórcios e planejamento patrimonial.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable}`}>
      <body className="grain font-sans">{children}</body>
    </html>
  );
}
