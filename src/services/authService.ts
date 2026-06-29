import type { UserProfile } from '@/types/learning';

export type AuthCredentials = {
  email: string;
  password: string;
};

export type RegisterCredentials = AuthCredentials & {
  name: string;
};

function createUser(name: string, email: string): UserProfile {
  return {
    id: `local-${Date.now()}`,
    name,
    email,
    role: 'apprentice',
  };
}

export async function localLogin({ email }: AuthCredentials): Promise<UserProfile> {
  const cleanEmail = email.trim() || 'aprendiz@workers.app';
  const name = cleanEmail
    .split('@')[0]
    .replace(/[._-]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ') || 'Aprendiz';

  return createUser(name, cleanEmail);
}

export async function localRegister({ name, email }: RegisterCredentials): Promise<UserProfile> {
  return createUser(name.trim() || 'Aprendiz Workers', email.trim() || 'aprendiz@workers.app');
}

/*
  Próxima etapa: trocar localLogin/localRegister por Firebase Authentication.

  Exemplo futuro:
  - createUserWithEmailAndPassword(auth, email, password)
  - signInWithEmailAndPassword(auth, email, password)
  - setDoc(doc(db, 'users', user.uid), { name, email, role: 'apprentice' })
*/
