export default function ({ redirect, route }) {
  // Verificar si el middleware se está ejecutando en el lado del cliente
  if (process.client) {
    // Verificar si el usuario no ha iniciado sesión
    if (!localStorage.getItem('loggedIn')) {
      // Redirigir a la página de inicio si el usuario no está autenticado
      return redirect('/');
    }
  } else {
    // Verificar si la ruta es la de inicio ('/')
    if (route.path !== '/') {
      // Redirigir a la página de inicio si el usuario no está autenticado
      return redirect('/');
    }
  }
}
 