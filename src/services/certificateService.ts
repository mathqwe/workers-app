/*
  Camada futura para certificados/comprovantes.

  Hoje o botão de comprovante simula um arquivo local.
  Com Firebase, o fluxo deve ser:
  1. Selecionar arquivo com expo-document-picker.
  2. Enviar arquivo para Firebase Storage.
  3. Salvar metadados no Firestore.

  Collection sugerida:
  certificates/{certificateId}

  Campos:
  - userId
  - trackId
  - moduleId
  - fileName
  - fileUrl
  - createdAt
  - status
*/

export type CertificatePayload = {
  userId: string;
  trackId: string;
  moduleId: string;
  fileName: string;
};

export async function saveCertificatePlaceholder(payload: CertificatePayload) {
  return payload;
}
