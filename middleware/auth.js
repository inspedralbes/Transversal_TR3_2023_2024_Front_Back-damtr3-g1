export default function ({ store, redirect }) {
    // Verificar si el usuario no ha iniciado sesión
    if (!store.state.loggedIn && !localStorage.getItem('loggedIn')) {
      return redirect('/');
    }
  }
  