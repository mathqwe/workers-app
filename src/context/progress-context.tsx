import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';

import type { CertificateEvidence, Track, UserProfile } from '@/types/learning';

type LoginPayload = {
  email: string;
  password: string;
};

type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

type AppContextValue = {
  user: UserProfile | null;
  selectedTrackId: string | null;
  completedModules: Record<string, boolean>;
  evidences: CertificateEvidence[];
  login: (payload: LoginPayload) => void;
  register: (payload: RegisterPayload) => void;
  logout: () => void;
  setSelectedTrackId: (trackId: string) => void;
  isModuleCompleted: (moduleId: string) => boolean;
  toggleModule: (moduleId: string) => void;
  addEvidence: (moduleId: string, trackId: string, title: string) => void;
  hasEvidence: (moduleId: string) => boolean;
  getEvidenceByModule: (moduleId: string) => CertificateEvidence | undefined;
  getTrackProgress: (track: Track) => number;
  getCompletedCount: (track: Track) => number;
};

const AppContext = createContext<AppContextValue | null>(null);

function getNameFromEmail(email: string) {
  const namePart = email.split('@')[0]?.replace(/[._-]/g, ' ').trim();
  if (!namePart) return 'Aprendiz';
  return namePart
    .split(' ')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function createLocalUser(name: string, email: string): UserProfile {
  return {
    id: `local-${Date.now()}`,
    name,
    email,
    role: 'apprentice',
  };
}

export function ProgressProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [selectedTrackIdState, setSelectedTrackIdState] = useState<string | null>(null);
  const [completedModules, setCompletedModules] = useState<Record<string, boolean>>({});
  const [evidences, setEvidences] = useState<CertificateEvidence[]>([]);

  const value = useMemo<AppContextValue>(() => {
    const selectedTrackId = user?.selectedTrackId ?? selectedTrackIdState;

    return {
      user,
      selectedTrackId,
      completedModules,
      evidences,
      login: ({ email }) => {
        const safeEmail = email.trim() || 'aprendiz@workers.app';
        setUser(createLocalUser(getNameFromEmail(safeEmail), safeEmail));
      },
      register: ({ name, email }) => {
        const safeName = name.trim() || 'Aprendiz Workers';
        const safeEmail = email.trim() || 'aprendiz@workers.app';
        setUser(createLocalUser(safeName, safeEmail));
      },
      logout: () => {
        setUser(null);
        setSelectedTrackIdState(null);
        setCompletedModules({});
        setEvidences([]);
      },
      setSelectedTrackId: (trackId) => {
        setSelectedTrackIdState(trackId);
        setUser((current) => (current ? { ...current, selectedTrackId: trackId } : current));
      },
      isModuleCompleted: (moduleId) => Boolean(completedModules[moduleId]),
      toggleModule: (moduleId) => {
        setCompletedModules((current) => ({ ...current, [moduleId]: !current[moduleId] }));
      },
      addEvidence: (moduleId, trackId, title) => {
        setEvidences((current) => {
          const alreadyExists = current.some((item) => item.moduleId === moduleId);
          if (alreadyExists) return current;

          const cleanTitle = title.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase();
          return [
            ...current,
            {
              id: `evidence-${Date.now()}`,
              moduleId,
              trackId,
              title,
              fileName: `${cleanTitle || 'comprovante'}-workers.pdf`,
              createdAt: new Date().toISOString(),
              status: 'local',
            },
          ];
        });
      },
      hasEvidence: (moduleId) => evidences.some((item) => item.moduleId === moduleId),
      getEvidenceByModule: (moduleId) => evidences.find((item) => item.moduleId === moduleId),
      getTrackProgress: (track) => {
        if (track.modules.length === 0) return 0;
        const completed = track.modules.filter((module) => completedModules[module.id]).length;
        return Math.round((completed / track.modules.length) * 100);
      },
      getCompletedCount: (track) => track.modules.filter((module) => completedModules[module.id]).length,
    };
  }, [completedModules, evidences, selectedTrackIdState, user]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useProgress() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useProgress precisa ser usado dentro de ProgressProvider.');
  }

  return context;
}
