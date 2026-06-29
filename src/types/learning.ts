import type { ImageSourcePropType } from 'react-native';

export type MaterialType = 'course' | 'video' | 'article' | 'guide';

export type Material = {
  id: string;
  title: string;
  provider: string;
  type: MaterialType;
  url: string;
  note: string;
};

export type TrackPhase = 'base' | 'pratica' | 'autonomia';

export type LearningModule = {
  id: string;
  phase: TrackPhase;
  title: string;
  shortTitle: string;
  summary: string;
  whyItMatters: string;
  learnChecklist: string[];
  practice: string;
  evidencePrompt: string;
  materials: Material[];
};

export type Track = {
  id: string;
  title: string;
  targetRole: string;
  area: string;
  description: string;
  audience: string;
  icon: ImageSourcePropType;
  modules: LearningModule[];
};

export type UserRole = 'apprentice' | 'company';

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  companyId?: string;
  selectedTrackId?: string;
};

export type CertificateEvidence = {
  id: string;
  moduleId: string;
  trackId: string;
  title: string;
  fileName: string;
  createdAt: string;
  status: 'local' | 'sent';
};
