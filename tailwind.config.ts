import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
          './app/**/*.{ts,tsx}',
          './components/**/*.{ts,tsx}',
        ],
    theme: {
          extend: {
                  colors: {
                            // Paleta AGC Capital — extraída do logo
                    ink:   '#F8FAFC',       // fundo principal (branco/claro)
                            night: '#EFF6FF',       // fundo secundário (azul muito claro)
                            deep:  '#DBEAFE',       // superfícies (azul claro)
                            navy:  '#0D2137',       // azul escuro (base do logo)
                            steel: '#1A3A5C',       // azul médio-escuro
                            // Accent principal: azul médio (cor "CAPITAL" do logo)
                            gold: {
                                        DEFAULT: '#2196F3',   // azul médio — substitui o dourado
                                        light:   '#4FC3F7',   // azul claro (círculo menor do logo)
                                        deep:    '#1565C0',   // azul profundo
                            },
                            // Texto
                            paper: '#0D2137',       // texto principal (azul escuro)
                            mist:  '#6B7280',       // texto secundário (cinza do logo)
                            // Extras
                            sky:   '#4FC3F7',       // azul claro do logo
                            blue:  '#2196F3',       // azul médio do logo
                            dark:  '#0D2137',       // azul escuro do logo
                            gray:  '#6B7280',       // cinza do logo
                  },
                  fontFamily: {
                            serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
                            sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
                            mono:  ['var(--font-jetbrains)', 'monospace'],
                  },
                  animation: {
                            'rise':      'rise 1.2s cubic-bezier(0.2,0.7,0.2,1) forwards',
                            'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
                            'marquee':   'marquee 50s linear infinite',
                  },
                  keyframes: {
                            rise: {
                                        from: { transform: 'translateY(110%)' },
                                        to:   { transform: 'translateY(0)' },
                            },
                            'pulse-dot': {
                                        '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
                                        '50%':      { opacity: '1',   transform: 'scale(1.4)' },
                            },
                            marquee: {
                                        from: { transform: 'translateX(0)' },
                                        to:   { transform: 'translateX(-50%)' },
                            },
                  },
          },
    },
    plugins: [],
};

export default config;
