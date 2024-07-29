import {
  defineAction,
  z,
} from 'astro:actions';
import {
  GoogleAuthProvider,
  signInWithCredential,
} from 'firebase/auth';

import { firebase } from '@/firebase/config';

export const loginGoogle = defineAction({
    accept: 'json',
    input: z.any(),
    handler: async (credentials) => {
      
      
      const credential = GoogleAuthProvider.credentialFromResult(credentials) 
      if (!credential) {
        throw new Error('Google salio mal')
        
      }

 await signInWithCredential( firebase.auth, credential)
      
      
      
        return { ok: true, msg: 'Usuario validado' }
    }
  })
  
  