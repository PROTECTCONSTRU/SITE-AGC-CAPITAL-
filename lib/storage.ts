// Cliente-side storage com localStorage.
// Trocar por chamadas a API/Supabase em produção real.

export const storage = {
  get<T = unknown>(key: string): T | null {
    if (typeof window === 'undefined') return null;
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : null;
    } catch {
      return null;
    }
  },
  set<T>(key: string, value: T): boolean {
    if (typeof window === 'undefined') return false;
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },
  delete(key: string): boolean {
    if (typeof window === 'undefined') return false;
    try {
      localStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  },
};

export const STORAGE_KEYS = {
  user: 'agc:user',
  policies: 'agc:policies',
  documents: 'agc:documents',
} as const;
