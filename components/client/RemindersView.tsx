'use client';

import Icon from '@/components/ui/Icon';
import { formatDate } from '@/lib/helpers';
import type { Reminder } from '@/types';

interface RemindersViewProps {
  reminders: Reminder[];
}

export default function RemindersView({ reminders }: RemindersViewProps) {
  const grouped = {
    danger: reminders.filter((r) => r.severity === 'danger'),
    warn: reminders.filter((r) => r.severity === 'warn'),
    info: reminders.filter((r) => r.severity === 'info'),
  };

  const groups = [
    { key: 'danger' as const, title: 'Urgente', color: 'text-red-400', desc: 'Vencidas ou vencendo em até 7 dias' },
    { key: 'warn' as const, title: 'Atenção', color: 'text-yellow-400', desc: 'Vencendo em até 30 dias' },
    { key: 'info' as const, title: 'Planejamento', color: 'text-blue-300', desc: 'Vencendo em 30–60 dias' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <div className="text-paper/40 text-xs font-mono uppercase tracking-wider mb-1">Avisos e vencimentos</div>
        <h1 className="display text-paper text-3xl md:text-4xl mb-2">Lembretes</h1>
        <p className="text-paper/55">
          Monitoramos vencimentos de apólices e datas de pagamento dos próximos 60 dias.
        </p>
      </div>

      {reminders.length === 0 ? (
        <div className="bg-night border border-gold/10 p-16 text-center">
          <Icon name="check" className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <div className="text-paper text-lg mb-1">Está tudo em ordem.</div>
          <div className="text-paper/40 text-sm">
            Nenhum vencimento ou pagamento nos próximos 60 dias.
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {groups.map(
            (group) =>
              grouped[group.key].length > 0 && (
                <div key={group.key}>
                  <div className="flex items-baseline gap-4 mb-4">
                    <h3 className={`font-serif text-xl ${group.color}`}>{group.title}</h3>
                    <span className="text-paper/40 text-xs">{group.desc}</span>
                    <span className="ml-auto text-paper/40 text-xs">
                      {grouped[group.key].length} {grouped[group.key].length === 1 ? 'item' : 'itens'}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {grouped[group.key].map((r) => (
                      <div
                        key={r.id}
                        className="bg-night border border-gold/10 p-5 flex items-center gap-5 hover:border-gold/30 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-full bg-deep flex items-center justify-center shrink-0">
                          <Icon name={r.type === 'pagamento' ? 'coins' : 'clock'} className="w-5 h-5 text-gold" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-paper font-medium truncate">{r.product}</div>
                          <div className="text-paper/50 text-xs">
                            {r.provider} ·{' '}
                            {r.type === 'pagamento'
                              ? 'Pagamento de prêmio'
                              : r.type === 'vencido'
                              ? 'Apólice vencida'
                              : 'Vencimento de apólice'}
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-paper text-sm tabular">{formatDate(r.date)}</div>
                          <div
                            className={`text-xs tabular ${
                              r.severity === 'danger'
                                ? 'text-red-400'
                                : r.severity === 'warn'
                                ? 'text-yellow-400'
                                : 'text-blue-300'
                            }`}
                          >
                            {r.daysLeft < 0
                              ? `vencida há ${-r.daysLeft}d`
                              : r.daysLeft === 0
                              ? 'hoje'
                              : `em ${r.daysLeft} dias`}
                          </div>
                        </div>
                        {r.amount && (
                          <div className="text-right shrink-0 pl-5 border-l border-gold/10">
                            <div className="text-paper/40 text-[10px] uppercase tracking-wider">Valor</div>
                            <div className="text-gold-light tabular text-sm">
                              R$ {parseFloat(r.amount).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}
