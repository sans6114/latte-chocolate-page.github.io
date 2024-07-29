import {
  defineAction,
  z,
} from 'astro:actions';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
import type { AuthError } from 'firebase/auth/cordova';

import { firebase } from '@/firebase/config';

export const registerUser = defineAction({
  accept: 'form',
  input: z.object({
    name: z.string().min(2),
    email: z.string().min(2),
    password: z.string().min(6),
    remember_me: z.boolean().optional(),
  }),
  handler: async ({ name, email, password, remember_me }, { cookies }) => {
    //cookies recordando el email si tengo el valor rememberme en true
    if (remember_me) {
      cookies.set('email', email, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),//1 año
        path: '/'
      })
    } else {
      cookies.delete('email', {
        path: '/'
      })
    }
    //creacion de usuario
    try {
      const user = await createUserWithEmailAndPassword(firebase.auth, email, password)
      //console.log(user)
      if (!firebase.auth.currentUser) return
      //actualizar el nombre: 
      await updateProfile(firebase.auth.currentUser!, {
        displayName: name
      })
//verificacion
await sendEmailVerification(firebase.auth.currentUser!, {
  //url: 'http://localhost:4321/protected'
  url: `${import.meta.env.WEBSITE_URL}/protected`
})
      return user
    } catch (error) {
      const firebaseError = error as AuthError
      if (firebaseError.code === 'auth/email-already-in-use') {
        throw new Error('Credenciales repetidas, intenta con otro email')
      }

      throw new Error('Algo salio mal')
    }
    //si recibo la info
    //console.log({name, email, password, remember_me})
    return { ok: true, msg: 'Usuario creado' }
  }
})

