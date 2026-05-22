'use client';

import { useEffect, useState } from 'react';
import Icon from '@/components/ui/Icon';
import Dashboard from './Dashboard';
import PoliciesView from './PoliciesView';
import RemindersView from './RemindersView';
import CalendarView from './CalendarView';
import DocumentsView from './DocumentsView';
import ProfileView from './ProfileView';
import PolicyForm from './PolicyForm';
import { storage, STORAGE_KEYS } from '@/lib/storage';
import { computeReminders, generateSamplePolicies } from '@/lib/helpers';
import type { Policy, Reminder, User } from '@/types';

interface ClientAreaProps {
  user: User;
  onLogout: () => void;
}

type Tab = 'dashboard' | 'policies' | 'reminders' | 'calendar' | 'documents' | 'profile';

const TABS: { key: Tab; label: string; icon: string }[] = [
  { key: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  { key: 'policies', label: 'Apólices', icon: 'shield' },
  { key: 'reminders', label: 'Lembretes', icon: 'bell' },
  { key: 'calendar', label: 'Calendário', icon: 'calendar' },
  { key: 'documents', label: 'Documentos', icon: 'file' },
  { key: 'profile', label: 'Perfil', icon: 'user' },
];

export default function ClientArea({ user, onLogout }: ClientAreaProps) {
  const [tab, setTab] = useState<Tab>('dashboard');
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Policy | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Initial load — seeds demo data if empty
  useEffect(() => {
    const stored = storage.get<Policy[]>(STORAGE_KEYS.policies);
    if (stored && stored.length > 0) {
      setPolicies(stored);
    } else {
      const seeded = generateSamplePolicies();
      setPolicies(seeded);
      storage.set(STORAGE_KEYS.policies, seeded);
    }
  }, []);

  // Persist + recompute reminders
  useEffect(() => {
    if (policies.length >= 0) {
      storage.set(STORAGE_KEYS.policies, policies);
      setReminders(computeReminders(policies));
    }
  }, [policies]);

  const handleSave = (p: Policy) => {
    if (p.id) {
      setPolicies((prev) => prev.map((x) => (x.id === p.id ? p : x)));
    } else {
      setPolicies((prev) => [{ ...p, id: 'pol-' + Date.now() }, ...prev]);
    }
    setShowForm(false);
    setEditing(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Remover esta apólice? Esta ação não pode ser desfeita.')) {
      setPolicies((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleEdit = (p: Policy) => {
    setEditing(p);
    setShowForm(true);
  };

  const handleAdd = () => {
    setEditing(null);
    setShowForm(true);
  };

  const urgentCount = reminders.filter((r) => r.severity === 'danger').length;

  const renderTab = () => {
    switch (tab) {
      case 'dashboard':
        return (
          <Dashboard
            user={user}
            policies={policies}
            reminders={reminders}
            onTab={(t) => setTab(t as Tab)}
            onAddPolicy={handleAdd}
          />
        );
      case 'policies':
        return (
          <PoliciesView
            policies={policies}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        );
      case 'reminders':
        return <RemindersView reminders={reminders} />;
      case 'calendar':
        return <CalendarView policies={policies} />;
      case 'documents':
        return <DocumentsView policies={policies} />;
      case 'profile':
        return <ProfileView user={user} onLogout={onLogout} />;
    }
  };

  return (
    <div className="min-h-screen bg-ink">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-night/95 backdrop-blur-xl border-b border-gold/10">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden text-paper p-1"
              aria-label="Menu"
            >
              <Icon name={mobileNavOpen ? 'x' : 'menu'} className="w-5 h-5" />
            </button>
            <svg viewBox="0 0 40 40" className="w-9 h-9">
              <circle cx="20" cy="20" r="19" fill="none" stroke="url(#cag)" strokeWidth="1" />
              <path
                d="M12 28 L20 10 L28 28 M15 22 L25 22"
                fill="none"
                stroke="url(#cag)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="cag" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stopColor="#F0C75A" />
                  <stop offset="100%" stopColor="#A87E1F" />
                </linearGradient>
              </defs>
            </svg>
            <div className="leading-tight">
              <div className="font-serif text-paper text-base">AGC Capital</div>
              <div className="text-[9px] uppercase tracking-[0.25em] text-gold/70 font-mono">Área do Cliente</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTab('reminders')}
              className="relative text-paper/70 hover:text-gold transition-colors p-2"
              aria-label="Lembretes"
            >
              <Icon name="bell" className="w-5 h-5" />
              {urgentCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[9px] rounded-full flex items-center justify-center font-medium tabular">
                  {urgentCount}
                </span>
              )}
            </button>

            <div className="hidden sm:flex items-center gap-2.5 px-3 py-1.5 border border-gold/15 rounded-sm">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center text-ink text-xs font-medium">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="leading-tight">
                <div className="text-paper text-xs font-medium max-w-[120px] truncate">{user.name}</div>
                <div className="text-paper/40 text-[10px] truncate max-w-[120px]">{user.email}</div>
              </div>
            </div>

            <button
              onClick={onLogout}
              className="text-paper/60 hover:text-red-400 transition-colors p-2"
              aria-label="Sair"
              title="Sair"
            >
              <Icon name="logout" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto flex">
        {/* Sidebar — desktop */}
        <aside className="hidden lg:block w-60 shrink-0 border-r border-gold/10 min-h-[calc(100vh-65px)] sticky top-[65px] self-start">
          <nav className="p-4 space-y-1">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-all rounded-sm ${
                  tab === t.key
                    ? 'bg-gold/10 text-gold-light border-l-2 border-gold'
                    : 'text-paper/60 hover:bg-deep hover:text-paper border-l-2 border-transparent'
                }`}
              >
                <Icon name={t.icon} className="w-4 h-4" />
                {t.label}
                {t.key === 'reminders' && urgentCount > 0 && (
                  <span className="ml-auto pill pill-danger text-[9px]">{urgentCount}</span>
                )}
              </button>
            ))}
          </nav>

          <div className="p-4 mt-4 border-t border-gold/10">
            <div className="bg-deep border border-gold/10 p-4">
              <Icon name="spark" className="w-5 h-5 text-gold mb-2" />
              <div className="text-paper text-sm font-medium mb-1">Precisa de ajuda?</div>
              <div className="text-paper/50 text-xs mb-3">Fale com seu Risk Advisor.</div>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-light text-xs link-underline inline-flex items-center gap-1"
              >
                WhatsApp <Icon name="arrow-up-right" className="w-3 h-3" />
              </a>
            </div>
          </div>
        </aside>

        {/* Mobile nav drawer */}
        {mobileNavOpen && (
          <div className="lg:hidden fixed inset-0 z-30 bg-ink/95 backdrop-blur-xl pt-16">
            <nav className="p-4 space-y-2">
              {TABS.map((t) => (
                <button
                  key={t.key}
                  onClick={() => {
                    setTab(t.key);
                    setMobileNavOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all ${
                    tab === t.key
                      ? 'bg-gold/10 text-gold-light border-l-2 border-gold'
                      : 'text-paper/70 border-l-2 border-transparent'
                  }`}
                >
                  <Icon name={t.icon} className="w-5 h-5" />
                  {t.label}
                  {t.key === 'reminders' && urgentCount > 0 && (
                    <span className="ml-auto pill pill-danger">{urgentCount}</span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        )}

        {/* Main */}
        <main className="flex-1 min-w-0 p-4 lg:p-8 xl:p-10">{renderTab()}</main>
      </div>

      {showForm && (
        <PolicyForm
          policy={editing}
          onSave={handleSave}
          onClose={() => {
            setShowForm(false);
            setEditing(null);
          }}
        />
      )}
    </div>
  );
}
