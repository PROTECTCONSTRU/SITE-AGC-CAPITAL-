export type PolicyCategory =
  | 'seguro'
  | 'credito'
  | 'consorcio'
  | 'investimento'
  | 'saude'
  | 'patrimonio';

export interface Policy {
  id: string;
  product: string;
  category: PolicyCategory;
  provider: string;
  policyNumber?: string;
  startDate?: string;
  endDate?: string;
  nextPayment?: string;
  premium?: string;
  coverage?: string;
  notes?: string;
}

export interface User {
  name: string;
  email: string;
  since: string;
}

export type ReminderSeverity = 'danger' | 'warn' | 'info';
export type ReminderType = 'vencimento' | 'vencido' | 'pagamento';

export interface Reminder {
  id: string;
  type: ReminderType;
  policyId: string;
  product: string;
  provider: string;
  daysLeft: number;
  date: string;
  amount?: string;
  severity: ReminderSeverity;
}

export interface DocumentEntry {
  id: string;
  policyId: string | null;
  name: string;
  size: number;
  type: string;
  uploadedAt: string;
  dataUrl?: string; // base64 storage for demo
}
