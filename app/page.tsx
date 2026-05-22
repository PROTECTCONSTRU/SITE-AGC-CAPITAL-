'use client';

import { useEffect, useState } from 'react';
import Nav from '@/components/landing/Nav';
import Hero from '@/components/landing/Hero';
import QuemSomos from '@/components/landing/QuemSomos';
import Ecossistema from '@/components/landing/Ecossistema';
import Solucoes from '@/components/landing/Solucoes';
import Parceiros from '@/components/landing/Parceiros';
import Consultoria from '@/components/landing/Consultoria';
import Plataformas from '@/components/landing/Plataformas';
import LivrosIPC from '@/components/landing/LivrosIPC';
import ParaQuem from '@/components/landing/ParaQuem';
import FabioSantos from '@/components/landing/FabioSantos';
import CTAFinal from '@/components/landing/CTAFinal';
import Footer from '@/components/landing/Footer';
import LoginScreen from '@/components/client/LoginScreen';
import ClientArea from '@/components/client/ClientArea';
import { storage, STORAGE_KEYS } from '@/lib/storage';
import type { User } from '@/types';

type View = 'landing' | 'login' | 'client';

export default function Home() {
  const [view, setView] = useState<View>('landing');
  const [user, setUser] = useState<User | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = storage.get<User>(STORAGE_KEYS.user);
    if (stored) setUser(stored);
    setHydrated(true);
  }, []);

  const handleClientArea = () => {
    if (user) {
      setView('client');
    } else {
      setView('login');
    }
  };

  const handleLogin = (u: User) => {
    setUser(u);
    setView('client');
  };

  const handleLogout = () => {
    storage.delete(STORAGE_KEYS.user);
    setUser(null);
    setView('landing');
  };

  if (!hydrated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ink">
        <div className="text-paper/40 text-sm font-mono">Carregando...</div>
      </div>
    );
  }

  if (view === 'client' && user) {
    return <ClientArea user={user} onLogout={handleLogout} />;
  }

  return (
    <>
      <Nav onClientArea={handleClientArea} />
      <Hero />
      <QuemSomos />
      <Ecossistema />
      <Solucoes />
      <Parceiros />
      <Consultoria />
      <Plataformas />
      <LivrosIPC />
      <ParaQuem />
      <FabioSantos />
      <CTAFinal />
      <Footer onClientArea={handleClientArea} />

      {view === 'login' && (
        <LoginScreen onLogin={handleLogin} onClose={() => setView('landing')} />
      )}
    </>
  );
}
