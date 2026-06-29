/*
  Camada futura para progresso em nuvem.

  Hoje o progresso fica no contexto local do app, porque precisamos testar rápido no Expo Go.
  Quando o Firebase for conectado, esta camada deverá salvar em Firestore:

  users/{userId}
  users/{userId}/progress/{moduleId}

  Campos sugeridos:
  - trackId
  - moduleId
  - completed: boolean
  - completedAt
  - updatedAt
*/

export type ProgressRecord = {
  userId: string;
  trackId: string;
  moduleId: string;
  completed: boolean;
};

export async function saveProgressPlaceholder(record: ProgressRecord) {
  return record;
}
