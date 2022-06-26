import {buscador,eliminar} from './logica.js';

const btn = document.getElementById("btn");
btn.addEventListener("click",buscador);

/*contenedor */
export const h5 = document.getElementById("link");
export const imgen = document.getElementById("foto");

/*boton para eliminar */
const botonEliminar = document.getElementById("btn2");
botonEliminar.addEventListener("click",eliminar);


/*cosas que tengo que colocar
1)abril una nueva pestalla   
2)poner unos textos
*/