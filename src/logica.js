
export const buscador = async () => {
 /*llamado a la api */
const api = await fetch(`https://dog.ceo/api/breeds/image/random`);

/*preparando los datos*/
const datos = api.json();

/*verificar si cumple con la condicion */
try{
/*esto para esperar la respusta */ 
datos.then(function (repuesta){
  return creaarElemento(repuesta.message);
});

/*esto si no cumple con la condicion */
} catch (error){
   alert(`lo sentimos hubo un  ${error}`);
}
}


import{contenedor} from "./add.js";
const creaarElemento = (respustas) =>{
  const link = document.createElement("li");
  const a = document.createElement("a");
  const p = document.createElement("p");
  const img = document.createElement("img");

/*la imagen de la foto*/
img.src = respustas;

/*link de laa imgen*/
 a.textContent = respustas;

 /*atributos*/
a.setAttribute("href",respustas);
link.setAttribute("class","link");
img.setAttribute("class","imagen");

 /*agregndo los elementos*/
link.appendChild(a);
contenedor.appendChild(img);
contenedor.appendChild(link);
}
  


