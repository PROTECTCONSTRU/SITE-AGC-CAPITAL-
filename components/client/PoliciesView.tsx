'use client';

import { useState } from 'react';
import Icon from '@/components/ui/Icon';
import { PRODUCT_CATEGORIES } from '@/lib/constants';
import { formatDate, getPolicyStatus } from '@/lib/helpers';
import type { Policy, PolicyCategory } from '@/types';

interface PoliciesViewProps {
  policies: Policy[];
  onAdd: () => void;
  onEdit: (p: Policy) => void;
  onDelete: (id: string) => void;
}

export default function PoliciesView({ policies, onAdd, onEdit, onDelete }: PoliciesViewProps) {
  const [filter, setFilter] = useState<'all' | PolicyCategory>('all');
  const [search, setSearch] = useState('');

  const filtered = policies.filter((p) => {
    if (filter !== 'all' && p.category !== filter) return false;
    if (
      search &&
      !p.product.toLowerCase().includes(search.toLowerCase()) &&
      !p.provider.toLowerCase().includes(search.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="text-paper/40 text-xs font-mono uppercase tracking-wider mb-1">Portfolio</div>
          <h1 className="display text-paper text-3xl md:text-4xl">Suas apólices</h1>
        </div>
        <button onClick={onAdd} className="btn-gold">
          <Icon name="plus" className="w-4 h-4" /> Nova apólice
        </button>
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 max-w-md min-w-[200px]">
          <Icon name="search" className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-paper/40" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar produto ou seguradora..."
            className="w-full bg-deep border border-gold/15 text-paper text-sm pl-10 pr-4 py-2.5 focus:outline-none focus:border-gold/50 transition-colors"
          />
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as 'all' | PolicyCategory)}
          className="bg-deep border border-gold/15 text-paper text-sm px-3 py-2.5 focus:outline-none focus:border-gold/50"
        >
          <option value="all">Todas as categorias</option>
          {Object.entries(PRODUCT_CATEGORIES).map(([k, v]) => (
            <option key={k} value={k}>
              {v.label}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-night border border-gold/10 p-16 text-center">
          <Icon name="shield" className="w-12 h-12 text-paper/20 mx-auto mb-4" />
          <div className="text-paper/60 mb-1">Nenhuma apólice encontrada</div>
          <div className="text-paper/40 text-sm mb-6">
            Comece adicionando seus produtos contratados com a AGC.
          </div>
          <button onClick={onAdd} className="btn-gold">
            <Icon name="plus" className="w-4 h-4" /> Adicionar apólice
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => {
            const status = getPolicyStatus(p);
            const cat = PRODUCT_CATEGORIES[p.category];
            return (
              <div
                key={p.id}
                className="bg-night border border-gold/10 p-6 group hover:border-gold/30 transition-all flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center border border-gold/20"
                    style={{ color: cat?.color || '#D4A437' }}
                  >
                    <Icon name={cat?.icon || 'shield'} className="w-5 h-5" />
                  </div>
                  <span className={`pill ${status.pill}`}>{status.label}</span>
                </div>
                <div className="text-paper/40 text-[10px] uppercase tracking-wider mb-1">{cat?.label}</div>
                <h3 className="font-serif text-paper text-lg mb-1 leading-snug">{p.product}</h3>
                <div className="text-paper/55 text-xs mb-4">{p.provider}</div>

                <div className="space-y-1.5 text-xs mb-5 mt-auto">
                  <div className="flex justify-between text-paper/70">
                    <span className="text-paper/40">Apólice</span>
                    <span className="tabular">{p.policyNumber || '—'}</span>
                  </div>
                  <div className="flex justify-between text-paper/70">
                    <span className="text-paper/40">Vigência</span>
                    <span className="tabular">
                      {formatDate(p.startDate)} → {formatDate(p.endDate)}
                    </span>
                  </div>
                  {p.premium && (
                    <div className="flex justify-between text-paper/70">
                      <span className="text-paper/40">Prêmio</span>
                      <span className="tabular text-gold-light">
                        R$ {parseFloat(p.premium).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 pt-4 border-t border-gold/10">
                  <button
                    onClick={() => onEdit(p)}
                    className="flex-1 text-xs text-paper/70 hover:text-gold flex items-center justify-center gap-1.5 py-1.5"
                  >
                    <Icon name="edit" className="w-3.5 h-3.5" /> Editar
                  </button>
                  <button
                    onClick={() => onDelete(p.id)}
                    className="flex-1 text-xs text-paper/70 hover:text-red-400 flex items-center justify-center gap-1.5 py-1.5 border-l border-gold/10"
                  >
                    <Icon name="trash" className="w-3.5 h-3.5" /> Remover
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
