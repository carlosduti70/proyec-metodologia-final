let doc = document.getElementById("root");
let cards=[];

let url = prompt ('Ingrese id Url gdrive');
//Aqui realizar el for en busqueda de d/ y /v obtener sus ubicaciones y cortar el id de la imagen con substring

let pos=[0,0];
let cont=0;

for(let i = url.length - 1; i >= 0; i--){
    if(url[i] =="/"){
        pos[cont]=i;

        cont ++;
    }
}
let urls= url.substring(pos[0],pos[1]+1);

let card = document.createElement('article');
let tittle = document.createElement('h4');
let image = document.createElement('img');
image.src=`https://drive.google.com/uc?export=view&id=${urls}`;
tittle.innerHTML="IMAGEN INGRESADA DESDE DRIVE"
card.appendChild(tittle);
card.appendChild(image);
// Crear nodos de texto para un elemento
innerWidth='20px'

 doc.appendChild(card)