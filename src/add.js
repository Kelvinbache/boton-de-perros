import {buscador,eliminar} from './logica.js';

const btn = document.getElementById("btn");
btn.addEventListener("click",buscador);

/*contenedor */
export const contenedor =document.getElementById("contenedor"); 

/*boton para eliminar */
const botonEliminar = document.getElementById("btn2");
botonEliminar.addEventListener("click",eliminar);


/*cosas que tengo que colocar
1) boton para eliminar
2)abril una nueva pestalla   
*/