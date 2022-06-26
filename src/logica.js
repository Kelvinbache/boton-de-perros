
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


import{imgen, h5} from "./add.js";
const creaarElemento = (respustas) =>{

  const link = document.createElement("li");
  const a = document.createElement("a");
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

imgen.appendChild(img);
h5.appendChild(link);
}
  

/*boton para eliminar */
export const eliminar = ()=>{
const imgenes = imgen.childNodes;
const  losLINKs = h5.childNodes;

for (let i = 0; i < imgenes.length -0; i++){
  const eliminarImanes = imgenes[i].remove();
}

for (let i = 0; i < losLINKs.length -0; i++) {
  const eliminarLink = losLINKs[i].remove();
}

}