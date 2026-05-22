'use client';

import { useState } from 'react';
import Icon from '@/components/ui/Icon';
import Field from '@/components/ui/Field';
import { PRODUCT_CATEGORIES } from '@/lib/constants';
import type { Policy, PolicyCategory } from '@/types';

interface PolicyFormProps {
  policy: Policy | null;
  onSave: (p: Policy) => void;
  onClose: () => void;
}

export default function PolicyForm({ policy, onSave, onClose }: PolicyFormProps) {
  const [form, setForm] = useState<Policy>(
    policy || {
      id: '',
      product: '',
      category: 'seguro',
      provider: '',
      policyNumber: '',
      startDate: '',
      endDate: '',
      nextPayment: '',
      premium: '',
      coverage: '',
      notes: '',
    }
  );

  const handleChange = <K extends keyof Policy>(field: K, value: Policy[K]) =>
    setForm({ ...form, [field]: value });

  const submit = () => {
    if (!form.product || !form.provider) {
      alert('Produto e seguradora são obrigatórios.');
      return;
    }
    onSave(form);
  };

  return (
    <div className="fixed inset-0 z-[110] modal-backdrop flex items-end md:items-center justify-center p-0 md:p-6 overflow-y-auto">
      <div className="bg-night border border-gold/20 w-full max-w-2xl my-auto relative">
        <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>

        <div className="flex items-center justify-between p-6 border-b border-gold/10">
          <div>
            <div className="eyebrow mb-1">{policy ? 'Editar' : 'Nova'}</div>
            <h2 className="font-serif text-paper text-2xl">{policy ? form.product : 'Nova apólice'}</h2>
          </div>
          <button onClick={onClose} className="text-paper/60 hover:text-gold">
            <Icon name="x" className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Produto / Nome*"
              value={form.product}
              onChange={(v) => handleChange('product', v)}
              placeholder="Ex: Seguro de Vida"
            />
            <Field
              label="Seguradora / Provedor*"
              value={form.provider}
              onChange={(v) => handleChange('provider', v)}
              placeholder="Ex: Porto Seguro"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-paper/60 text-xs uppercase tracking-wider mb-2">Categoria</label>
              <select
                value={form.category}
                onChange={(e) => handleChange('category', e.target.value as PolicyCategory)}
                className="w-full bg-deep border border-gold/15 text-paper text-sm px-3 py-2.5 focus:outline-none focus:border-gold/50"
              >
                {Object.entries(PRODUCT_CATEGORIES).map(([k, v]) => (
                  <option key={k} value={k}>
                    {v.label}
                  </option>
                ))}
              </select>
            </div>
            <Field
              label="Nº da apólice"
              value={form.policyNumber || ''}
              onChange={(v) => handleChange('policyNumber', v)}
              placeholder="Ex: 12345-678"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <Field
              label="Início da vigência"
              type="date"
              value={form.startDate || ''}
              onChange={(v) => handleChange('startDate', v)}
            />
            <Field
              label="Fim da vigência"
              type="date"
              value={form.endDate || ''}
              onChange={(v) => handleChange('endDate', v)}
            />
            <Field
              label="Próximo pagamento"
              type="date"
              value={form.nextPayment || ''}
              onChange={(v) => handleChange('nextPayment', v)}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Prêmio (R$)"
              type="number"
              value={form.premium || ''}
              onChange={(v) => handleChange('premium', v)}
              placeholder="Valor mensal/anual"
            />
            <Field
              label="Cobertura (R$)"
              type="number"
              value={form.coverage || ''}
              onChange={(v) => handleChange('coverage', v)}
              placeholder="Valor coberto"
            />
          </div>

          <div>
            <label className="block text-paper/60 text-xs uppercase tracking-wider mb-2">Notas</label>
            <textarea
              value={form.notes || ''}
              onChange={(e) => handleChange('notes', e.target.value)}
              rows={3}
              placeholder="Observações, contatos, cláusulas importantes..."
              className="w-full bg-deep border border-gold/15 text-paper text-sm p-3 focus:outline-none focus:border-gold/50 resize-none"
            />
          </div>
        </div>

        <div className="p-6 border-t border-gold/10 flex justify-end gap-3">
          <button onClick={onClose} className="btn-ghost">
            Cancelar
          </button>
          <button onClick={submit} className="btn-gold">
            {policy ? 'Salvar alterações' : 'Adicionar apólice'} <Icon name="check" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
