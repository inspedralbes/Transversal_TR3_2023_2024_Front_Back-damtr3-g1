// Importa la librería js-cookie para manejar cookies
import Cookies from 'js-cookie';

export default function ({ redirect, route }) {
  // Verificar si el usuario ha iniciado sesión
  if (process.client && Cookies.get('loggedIn')) {
    // El usuario ha iniciado sesión, no es necesario redirigir
    return;
  }

  // Redirigir a la página de inicio si el usuario no ha iniciado sesión y la ruta no es la de inicio ('/')
  if (route.path !== '/') {
    return redirect('/');
  }
}
