import type { Policy, Reminder } from '@/types';

export function formatDate(d?: string): string {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

export function getPolicyStatus(p: Policy): { label: string; pill: string } {
  if (!p.endDate) return { label: 'Sem fim', pill: 'pill-info' };
  const now = new Date();
  const end = new Date(p.endDate);
  const diff = Math.floor((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  if (diff < 0) return { label: 'Vencida', pill: 'pill-danger' };
  if (diff <= 30) return { label: `Vence em ${diff}d`, pill: 'pill-warn' };
  return { label: 'Ativa', pill: 'pill-ok' };
}

export function computeReminders(policies: Policy[]): Reminder[] {
  const now = new Date();
  const list: Reminder[] = [];

  policies.forEach((p) => {
    if (p.endDate) {
      const end = new Date(p.endDate);
      const diff = Math.floor((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      if (diff >= 0 && diff <= 60) {
        list.push({
          id: 'r-' + p.id,
          type: 'vencimento',
          policyId: p.id,
          product: p.product,
          provider: p.provider,
          daysLeft: diff,
          date: p.endDate,
          severity: diff <= 7 ? 'danger' : diff <= 30 ? 'warn' : 'info',
        });
      } else if (diff < 0 && diff >= -7) {
        list.push({
          id: 'r-' + p.id,
          type: 'vencido',
          policyId: p.id,
          product: p.product,
          provider: p.provider,
          daysLeft: diff,
          date: p.endDate,
          severity: 'danger',
        });
      }
    }
    if (p.nextPayment) {
      const pd = new Date(p.nextPayment);
      const diff = Math.floor((pd.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      if (diff >= 0 && diff <= 30) {
        list.push({
          id: 'p-' + p.id,
          type: 'pagamento',
          policyId: p.id,
          product: p.product,
          provider: p.provider,
          daysLeft: diff,
          date: p.nextPayment,
          amount: p.premium,
          severity: diff <= 5 ? 'warn' : 'info',
        });
      }
    }
  });

  list.sort((a, b) => a.daysLeft - b.daysLeft);
  return list;
}

export function generateSamplePolicies(): Policy[] {
  const today = new Date();
  const add = (days: number) =>
    new Date(today.getTime() + days * 86400000).toISOString().split('T')[0];

  return [
    {
      id: 'pol-' + (Date.now() + 1),
      product: 'Seguro de Vida Premium',
      category: 'seguro',
      provider: 'Porto Seguro',
      policyNumber: 'VIDA-2024-87431',
      startDate: add(-180),
      endDate: add(45),
      nextPayment: add(12),
      premium: '850',
      coverage: '1500000',
      notes: 'Cobertura adicional para invalidez e doenças graves.',
    },
    {
      id: 'pol-' + (Date.now() + 2),
      product: 'Seguro Residencial',
      category: 'seguro',
      provider: 'Tokio Marine',
      policyNumber: 'RES-2024-22198',
      startDate: add(-90),
      endDate: add(275),
      nextPayment: add(28),
      premium: '320',
      coverage: '800000',
    },
    {
      id: 'pol-' + (Date.now() + 3),
      product: 'Risco de Engenharia — Obra Vila Olímpia',
      category: 'seguro',
      provider: 'Sompo',
      policyNumber: 'ENG-2024-44521',
      startDate: add(-60),
      endDate: add(5),
      premium: '12500',
      coverage: '8500000',
      notes: 'Obra Residencial Vila Olímpia — apólice próxima do vencimento.',
    },
    {
      id: 'pol-' + (Date.now() + 4),
      product: 'Consórcio Imobiliário',
      category: 'consorcio',
      provider: 'Embracon',
      policyNumber: 'CON-2023-90187',
      startDate: add(-540),
      endDate: add(720),
      nextPayment: add(3),
      premium: '2400',
      coverage: '450000',
    },
    {
      id: 'pol-' + (Date.now() + 5),
      product: 'Convênio Médico Empresarial',
      category: 'saude',
      provider: 'SulAmérica',
      policyNumber: 'MED-2024-66109',
      startDate: add(-300),
      endDate: add(65),
      nextPayment: add(18),
      premium: '4800',
      coverage: '0',
    },
    {
      id: 'pol-' + (Date.now() + 6),
      product: 'D&O Diretores e Administradores',
      category: 'seguro',
      provider: 'Liberty',
      policyNumber: 'DO-2024-77432',
      startDate: add(-200),
      endDate: add(165),
      premium: '6200',
      coverage: '3000000',
    },
  ];
}
