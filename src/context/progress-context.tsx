import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';

import type { Track } from '@/types/learning';

type CompletedModules = Record<string, boolean>;

type ProgressContextValue = {
  selectedTrackId: string | null;
  setSelectedTrackId: (trackId: string) => void;
  completedModules: CompletedModules;
  toggleModule: (moduleId: string) => void;
  isModuleCompleted: (moduleId: string) => boolean;
  getTrackProgress: (track: Track) => number;
  getCompletedCount: (track: Track) => number;
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: PropsWithChildren) {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>('facilities');
  const [completedModules, setCompletedModules] = useState<CompletedModules>({});

  const value = useMemo<ProgressContextValue>(
    () => ({
      selectedTrackId,
      setSelectedTrackId,
      completedModules,
      toggleModule: (moduleId: string) => {
        setCompletedModules((current) => ({
          ...current,
          [moduleId]: !current[moduleId],
        }));
      },
      isModuleCompleted: (moduleId: string) => Boolean(completedModules[moduleId]),
      getCompletedCount: (track: Track) =>
        track.modules.filter((module) => completedModules[module.id]).length,
      getTrackProgress: (track: Track) => {
        if (track.modules.length === 0) {
          return 0;
        }

        const completed = track.modules.filter((module) => completedModules[module.id]).length;
        return Math.round((completed / track.modules.length) * 100);
      },
    }),
    [completedModules, selectedTrackId],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const context = useContext(ProgressContext);

  if (!context) {
    throw new Error('useProgress deve ser usado dentro de ProgressProvider.');
  }

  return context;
}
