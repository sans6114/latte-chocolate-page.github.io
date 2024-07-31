import { defineMiddleware } from 'astro:middleware';

import { firebase } from './firebase/config';

const privateRoutes = ['/comercios']
const notAuthRoutes = ['/login', '/register']
// const privateRoutes = 

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(async ({ url, request, locals, redirect }, next) => {


    const isLoggedIn = !!firebase.auth.currentUser //esta logueaddo
    const user = firebase.auth.currentUser
    //console.log(context.url)
    locals.isLoggedIn = isLoggedIn
    if (user) {
        locals.user = {
            email: user.email!,
            name: user.displayName!,
            avatar: user.photoURL ?? '',
            emailVerified: user.emailVerified
        } 
    }
//proteccion de rutas
if(!isLoggedIn && privateRoutes.includes(url.pathname)){
    return redirect('/')
}
if(isLoggedIn && notAuthRoutes.includes(url.pathname)){
    return redirect('/')
}

    return next()
});