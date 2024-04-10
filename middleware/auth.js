export default function ({ store, redirect }) {
  // Verificar si el middleware se está ejecutando en el lado del cliente
  if (process.client) {
    // Verificar si el usuario no ha iniciado sesión
    if (!localStorage.getItem('loggedIn')) {
      return redirect('/');
    }
  }
}