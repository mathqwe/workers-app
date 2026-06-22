export type MaterialType = 'video' | 'course' | 'article' | 'document';

export type Material = {
  id: string;
  title: string;
  provider: string;
  type: MaterialType;
  url: string;
};

export type LearningModule = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  whyItMatters: string;
  estimatedTime: string;
  skills: string[];
  materials: Material[];
};

export type Track = {
  id: string;
  title: string;
  targetRole: string;
  area: string;
  description: string;
  modules: LearningModule[];
};
