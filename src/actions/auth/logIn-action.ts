import {
  defineAction,
  z,
} from 'astro:actions';
import { signInWithEmailAndPassword } from 'firebase/auth';
import type { AuthError } from 'firebase/auth/web-extension';

import { firebase } from '@/firebase/config';

export const logIn = defineAction({
    accept: 'form',
    input: z.object({
        email: z.string().min(2),
        password: z.string().min(6),
        remember_me: z.boolean().optional(),
    }),
    handler: async ({ email, password }, { cookies }) => {

        try {
            const user = await signInWithEmailAndPassword(firebase.auth, email, password)
            return user
        } catch (error) {
            const firebaseError = error as AuthError
            if (firebaseError.code === 'auth/user-not-found') {
                throw new Error('Credenciales inexistentes, intenta con otras')
            }

            throw new Error('Algo salio mal')
        }
        return { ok: true, msg: 'Usuario logeado' }
    }
})

