# Inicio de session y edicion de usuario

Aplicacion web que permite iniciar session mediante tu cuenta de Google y poder editar el nombre de dicho usuario.

### Herramientas

- Firebase Auth (for manage access to web application)

### Librerias

- firebase: plataforma de desarrollo de aplicaciones web (usada para manejo de autenticacion )
- styled-components: stilizar components
- Redux:
- sweetalert2: mostrar modals de feedback

## Experiencia.

Inicia el proyecto con el pensamiento y la seguridad de que firebase lograria que la experiencia de desarrollo fuera tranquila, ya que los requerimientos lo parecian, pero en el proceso me encontre en situaciones complejas.

1. utilize redux-sagas para manejar los llamados de las funciones de firebase, sin embargo no funcionaba del todo bien, investigue y encontre que existia un paquete llamado redux-sagas-firebase, con esto, comprendi que lo que queria hacer era complicado o simplemente no funcionara ya que, por alguna razon crearon esa libreria (redux-sagas-firebase); sin embargo luego de intentarlo en varias ocaciones logre guardar en el estado global la informacion del usuario logueado.

2. al editar el usuario, note que eran pocas las propiedades que podia editar sin problema (muy pocas), ya que para editar el usuario, dado que el proceso de login es mediante firebase, es necesario implementar una funcion especifica para editar dicho email y posteriormente activar el nuevo email; crei que el numero telefonico era facil de editar, pero encontre casi el mismo comportamiento descrito anteriormente.
   Solo el nombre (displayName) y el photoUrl, se podian editar de una forma sencilla, por lo que opte por solo editar el nombre. decision que hace que la UI se vea muy pobre.

2.1) al editar el nombre y cerrar sesion retorna el nombre original (nombre antes de editar), es como si internamente en firebase no editara el nombre.

Estas situaciones me aportaron desarrollando mi resilencia ya que a pesar de estas situaciones di mi mejor version en el desarrollo de esta actividad.
