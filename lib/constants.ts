import type { PolicyCategory } from '@/types';

export const PRODUCT_CATEGORIES: Record<
  PolicyCategory,
  { label: string; icon: string; color: string }
> = {
  seguro: { label: 'Seguro', icon: 'shield', color: '#F0C75A' },
  credito: { label: 'Crédito', icon: 'coins', color: '#D4A437' },
  consorcio: { label: 'Consórcio', icon: 'briefcase', color: '#A87E1F' },
  investimento: { label: 'Investimento', icon: 'trend', color: '#F0C75A' },
  saude: { label: 'Saúde', icon: 'heart-pulse', color: '#D4A437' },
  patrimonio: { label: 'Patrimônio', icon: 'shield', color: '#A87E1F' },
};
