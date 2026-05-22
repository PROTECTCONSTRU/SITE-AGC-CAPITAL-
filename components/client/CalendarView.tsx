'use client';

import { useMemo, useState } from 'react';
import type { Policy } from '@/types';

interface CalendarViewProps {
  policies: Policy[];
}

interface CalendarEvent {
  policy: Policy;
  type: string;
  color: string;
}

export default function CalendarView({ policies }: CalendarViewProps) {
  const [month, setMonth] = useState(new Date());

  const events = useMemo(() => {
    const evts: Record<string, CalendarEvent[]> = {};
    policies.forEach((p) => {
      const add = (date: string | undefined, type: string, color: string) => {
        if (!date) return;
        const d = new Date(date);
        const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
        if (!evts[key]) evts[key] = [];
        evts[key].push({ policy: p, type, color });
      };
      add(p.startDate, 'Início', '#86efac');
      add(p.endDate, 'Vencimento', '#fca5a5');
      add(p.nextPayment, 'Pagamento', '#fcd34d');
    });
    return evts;
  }, [policies]);

  const year = month.getFullYear();
  const m = month.getMonth();
  const firstDay = new Date(year, m, 1).getDay();
  const daysInMonth = new Date(year, m + 1, 0).getDate();
  const monthName = month.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const today = new Date();
  const isToday = (d: number) =>
    d === today.getDate() && m === today.getMonth() && year === today.getFullYear();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="text-paper/40 text-xs font-mono uppercase tracking-wider mb-1">Linha do tempo</div>
          <h1 className="display text-paper text-3xl md:text-4xl">Calendário</h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMonth(new Date(year, m - 1, 1))}
            className="w-9 h-9 border border-gold/20 text-paper/70 hover:text-gold hover:border-gold flex items-center justify-center"
          >
            ‹
          </button>
          <div className="font-serif text-paper text-lg capitalize min-w-[160px] text-center">{monthName}</div>
          <button
            onClick={() => setMonth(new Date(year, m + 1, 1))}
            className="w-9 h-9 border border-gold/20 text-paper/70 hover:text-gold hover:border-gold flex items-center justify-center"
          >
            ›
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 text-xs">
        {[
          { label: 'Início de vigência', c: '#86efac' },
          { label: 'Vencimento', c: '#fca5a5' },
          { label: 'Pagamento', c: '#fcd34d' },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-2 text-paper/60">
            <span className="w-2 h-2 rounded-full" style={{ background: l.c }}></span> {l.label}
          </div>
        ))}
      </div>

      <div className="bg-night border border-gold/10 p-4 md:p-6">
        <div className="grid grid-cols-7 gap-1 text-[10px] uppercase tracking-wider text-paper/40 mb-2">
          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((d) => (
            <div key={d} className="text-center py-2">
              {d}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {cells.map((d, i) => {
            if (!d) return <div key={i}></div>;
            const key = `${year}-${m}-${d}`;
            const dayEvents = events[key] || [];
            return (
              <div
                key={i}
                className={`min-h-[78px] md:min-h-[100px] p-2 border ${
                  isToday(d) ? 'border-gold bg-gold/5' : 'border-gold/10 bg-deep/30'
                } relative`}
              >
                <div className={`text-xs ${isToday(d) ? 'text-gold-light font-medium' : 'text-paper/60'}`}>{d}</div>
                <div className="mt-1 space-y-1">
                  {dayEvents.slice(0, 3).map((e, j) => (
                    <div
                      key={j}
                      className="text-[9px] truncate px-1.5 py-0.5 rounded"
                      style={{
                        background: `${e.color}25`,
                        color: e.color,
                        border: `1px solid ${e.color}40`,
                      }}
                      title={`${e.type}: ${e.policy.product}`}
                    >
                      {e.policy.product.substring(0, 18)}
                    </div>
                  ))}
                  {dayEvents.length > 3 && (
                    <div className="text-[9px] text-paper/40">+{dayEvents.length - 3} mais</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
