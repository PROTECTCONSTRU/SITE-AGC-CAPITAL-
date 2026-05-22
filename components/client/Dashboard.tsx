'use client';

import Icon from '@/components/ui/Icon';
import { PRODUCT_CATEGORIES } from '@/lib/constants';
import { formatDate, getPolicyStatus } from '@/lib/helpers';
import type { Policy, Reminder, User, PolicyCategory } from '@/types';

interface DashboardProps {
  user: User;
  policies: Policy[];
  reminders: Reminder[];
  onTab: (t: string) => void;
  onAddPolicy: () => void;
}

export default function Dashboard({ user, policies, reminders, onTab, onAddPolicy }: DashboardProps) {
  const activePolicies = policies.filter((p) => {
    if (!p.endDate) return true;
    return new Date(p.endDate) >= new Date();
  });

  const totalPremium = policies.reduce((s, p) => s + (parseFloat(p.premium || '0') || 0), 0);
  const totalCoverage = policies.reduce((s, p) => s + (parseFloat(p.coverage || '0') || 0), 0);

  const byCategory = (Object.keys(PRODUCT_CATEGORIES) as PolicyCategory[])
    .map((cat) => ({
      cat,
      count: policies.filter((p) => p.category === cat).length,
      ...PRODUCT_CATEGORIES[cat],
    }))
    .filter((c) => c.count > 0);

  const urgent = reminders.filter((r) => r.severity === 'danger').slice(0, 3);
  const warn = reminders.filter((r) => r.severity === 'warn').slice(0, 3);

  return (
    <div className="space-y-8">
      <div>
        <div className="text-paper/40 text-xs font-mono uppercase tracking-wider mb-2">Bem-vindo(a) de volta</div>
        <h1 className="display text-paper text-3xl md:text-4xl mb-2">{user.name}</h1>
        <p className="text-paper/55">Visão geral do seu ecossistema de proteção e patrimônio.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10">
        {[
          { label: 'Apólices ativas', value: activePolicies.length, sub: `${policies.length} no total` },
          { label: 'Lembretes', value: reminders.length, sub: `${urgent.length} urgentes`, accent: urgent.length > 0 },
          { label: 'Prêmio total', value: `R$ ${totalPremium.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}`, sub: 'Investimento em proteção' },
          { label: 'Cobertura total', value: `R$ ${(totalCoverage / 1000000).toFixed(1)}M`, sub: 'Patrimônio protegido' },
        ].map((k) => (
          <div key={k.label} className="bg-ink p-6">
            <div className="text-paper/40 text-xs uppercase tracking-wider mb-3">{k.label}</div>
            <div className={`display tabular text-3xl mb-1 ${k.accent ? 'text-gold-gradient' : 'text-paper'}`}>
              {k.value}
            </div>
            <div className="text-paper/40 text-xs">{k.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-night border border-gold/10 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="eyebrow mb-1">Por categoria</div>
              <h3 className="font-serif text-paper text-xl">Distribuição do portfolio</h3>
            </div>
            <button onClick={() => onTab('policies')} className="text-gold-light text-xs link-underline">
              Ver todas →
            </button>
          </div>

          {byCategory.length === 0 ? (
            <div className="text-paper/40 text-sm py-12 text-center">
              Você ainda não tem apólices cadastradas.
              <button onClick={onAddPolicy} className="block mx-auto mt-4 btn-gold">
                <Icon name="plus" className="w-4 h-4" /> Adicionar primeira apólice
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {byCategory.map((c) => {
                const pct = (c.count / policies.length) * 100;
                return (
                  <div key={c.cat}>
                    <div className="flex justify-between items-center text-sm mb-1.5">
                      <span className="flex items-center gap-2 text-paper/80">
                        <Icon name={c.icon} className="w-4 h-4" style={{ color: c.color }} />
                        {c.label}
                      </span>
                      <span className="text-paper/50 tabular text-xs">
                        {c.count} {c.count === 1 ? 'apólice' : 'apólices'}
                      </span>
                    </div>
                    <div className="h-1.5 bg-deep rounded overflow-hidden">
                      <div
                        className="h-full rounded transition-all"
                        style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${c.color}, ${c.color}99)` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="bg-night border border-gold/10 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="eyebrow mb-1">Atenção</div>
              <h3 className="font-serif text-paper text-xl">Vencimentos próximos</h3>
            </div>
            <button onClick={() => onTab('reminders')} className="text-gold-light text-xs link-underline">
              Ver →
            </button>
          </div>

          {urgent.length === 0 && warn.length === 0 ? (
            <div className="text-paper/40 text-sm py-8 text-center">
              <Icon name="check" className="w-10 h-10 text-green-400 mx-auto mb-2" />
              Tudo em ordem.
            </div>
          ) : (
            <div className="space-y-3">
              {[...urgent, ...warn].slice(0, 4).map((r) => (
                <div
                  key={r.id}
                  className="p-3 bg-deep border-l-2"
                  style={{ borderColor: r.severity === 'danger' ? '#ef4444' : '#f59e0b' }}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="text-paper text-sm font-medium">{r.product}</div>
                    <span className={`pill ${r.severity === 'danger' ? 'pill-danger' : 'pill-warn'}`}>
                      {r.daysLeft < 0 ? `Vencida há ${-r.daysLeft}d` : `${r.daysLeft}d`}
                    </span>
                  </div>
                  <div className="text-paper/50 text-xs">
                    {r.provider} · {r.type}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-night border border-gold/10 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="eyebrow mb-1">Portfolio</div>
            <h3 className="font-serif text-paper text-xl">Apólices recentes</h3>
          </div>
          <button onClick={onAddPolicy} className="btn-ghost text-xs px-4 py-2">
            <Icon name="plus" className="w-3.5 h-3.5" /> Nova
          </button>
        </div>

        {policies.length === 0 ? (
          <div className="text-paper/40 text-sm py-12 text-center">
            Nenhuma apólice ainda. Comece adicionando seus produtos AGC.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-paper/40 text-xs uppercase tracking-wider">
                  <th className="text-left pb-3 font-normal">Produto</th>
                  <th className="text-left pb-3 font-normal">Categoria</th>
                  <th className="text-left pb-3 font-normal">Seguradora</th>
                  <th className="text-left pb-3 font-normal">Vigência</th>
                  <th className="text-right pb-3 font-normal">Status</th>
                </tr>
              </thead>
              <tbody>
                {policies.slice(0, 5).map((p) => {
                  const status = getPolicyStatus(p);
                  return (
                    <tr key={p.id} className="border-t border-gold/5 hover:bg-deep/30 transition-colors">
                      <td className="py-3.5 text-paper">{p.product}</td>
                      <td className="py-3.5 text-paper/60 text-xs">{PRODUCT_CATEGORIES[p.category]?.label}</td>
                      <td className="py-3.5 text-paper/60">{p.provider}</td>
                      <td className="py-3.5 text-paper/60 text-xs tabular">
                        {formatDate(p.startDate)} → {formatDate(p.endDate)}
                      </td>
                      <td className="py-3.5 text-right">
                        <span className={`pill ${status.pill}`}>{status.label}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
