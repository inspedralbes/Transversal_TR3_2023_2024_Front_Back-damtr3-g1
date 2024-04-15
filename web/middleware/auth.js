export default function ({ redirect, route }) {
  // Verificar si el código se está ejecutando en el lado del cliente (navegador)
  if (process.client) {
    // Verificar si el usuario ha iniciado sesión
    const loggedIn = localStorage.getItem('loggedIn');

    if (loggedIn) {
      // El usuario ha iniciado sesión, no es necesario redirigir
      return;
    }

    // Redirigir a la página de inicio si el usuario no ha iniciado sesión y la ruta no es la de inicio ('/')
    if (route.path !== '/') {
      return redirect('/');
    }
  }
}
