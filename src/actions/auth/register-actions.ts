import {
  defineAction,
  z,
} from 'astro:actions';

import { supabase } from '@/lib/supabase';

export const registerUser = defineAction({
  accept: 'form',
  input: z.object({
    email: z.string().min(2),
    password: z.string().min(6),
    remember_me: z.boolean().optional(),
  }),
  handler: async ({ email, password, remember_me }, { cookies }) => {
    // Cookies recordando el email si tengo el valor remember_me en true
    if (remember_me) {
      cookies.set('email', email, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365), // 1 año
        path: '/',
      });
    } else {
      cookies.delete('email', {
        path: '/',
      });
    }

    // Creación de usuario
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        // Maneja errores específicos de Supabase
        if (error.code === 'email_exists') {
          throw new Error('El email proporcionado no es válido, ya existe.');
        }
        if (error.code === 'email_not_confirmed') {
          throw new Error('El email no esta confirmado.');
        }
        throw new Error('Error al registrarse: ' + error.message);
      }

      return data.user;
    } catch (error) {
      // Maneja errores no específicos de Supabase
      console.error('Error during sign-up:');
      throw new Error('Algo salió mal durante el registro. Por favor, intenta nuevamente.');
    }
  },
})

