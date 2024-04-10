export default function ({ redirect, route }) {
  // Verificar si el usuario no ha iniciado sesión
  if (!process.client || !localStorage.getItem('loggedIn')) {
    // Verificar si la ruta es la de inicio ('/')
    if (route.path !== '/') {
      // Redirigir a la página de inicio si el usuario no está autenticado
      return redirect('/');
    }
  }
}
