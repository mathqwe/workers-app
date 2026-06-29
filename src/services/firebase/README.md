# Firebase no Workers

Esta pasta fica reservada para a integração real com Firebase.

Ordem recomendada:

1. Criar projeto no Firebase Console.
2. Ativar Authentication por e-mail e senha.
3. Criar Cloud Firestore.
4. Criar Cloud Storage.
5. Copiar o objeto `firebaseConfig` para `firebaseConfig.ts`.
6. Instalar o SDK do Firebase com `npm install firebase`.
7. Criar `firebase.ts` inicializando app, auth, db e storage.
8. Trocar os serviços locais por chamadas reais.

Estrutura de dados sugerida:

- `users/{userId}`
- `companies/{companyId}`
- `progress/{progressId}`
- `certificates/{certificateId}`
