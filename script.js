
//SECCION DE VIAJES

const data = [
  {
    title: "Atardecer en la Costa",
    description: "Disfruta de las mejores vistas del horizonte marino al caer la tarde.",
    url_img: "viajes/viajes-7.jpg"
  },
  {
    title: "Paraíso en el Pacífico",
    description: "Cabañas sobre aguas cristalinas para una desconexión total.",
    url_img: "viajes/viajes-2.jpg"
  },
  {
    title: "Aventura e Itinerarios",
    description: "Descubre múltiples destinos y rutas para tu próximo gran viaje.",
    url_img: "./viajes/viajes-3.jpg"
  },
  {
    title: "Plaza de España, Sevilla",
    description: "Explora la majestuosa arquitectura e historia del corazón andaluz.",
    url_img: "./viajes/viajes-4.jpg"
  },
  {
    title: "Encanto Hispalense",
    description: "Pasea por los puentes y monumentos más emblemáticos de la ciudad.",
    url_img: "./viajes/viajes-5.jpg"
  },
  {
    title: "Ruta por la Costa Romántica",
    description: "Carreteras panorámicas entre acantilados y vistas al mar.",
    url_img: "./viajes/viajes-6.jpg"
  }
];

const mih2 = document.createElement("h2");
mih2.textContent = "Recomendados";
document.querySelector("#viajes").appendChild(mih2);

let container = `<div class = "containerData">`;

for (let i = 0; i < data.length; i++) {
    container += `<article>
                <h3>${data[i].title}</h3>
                <p>${data[i].description}</p>
                <img src="${data[i].url_img}"/img>
            </article>`
    }
    container += `</div>`
   document.querySelector("#viajes").innerHTML += container 

//SELECTOR DE CIUDADES

const cities = [
"Madrid",
"Barcelona",
"Valencia",
"Seville",
"Bilbao",
"Granada",
"Malaga",
"Palma de Mallorca",
"Alicante",
"Zaragoza"
];

  const titleViajes = document.createElement("h2");
  titleViajes.textContent = "Destinos";
  document.querySelector("#ciudadesSelect").appendChild(titleViajes);

  let selector  = `<select>`

    for (let i = 0; i < cities.length; i++) {
        selector += `<option
                     value ="${cities[i]}">${cities[i]}
                    </option>`
    }
     selector += `</select>`
     document.querySelector("#ciudadesSelect").innerHTML += selector 



   //Metodo clasico para poner clase a un elemento creado desde JS

    //1. Creas el elemento en memoria
    //const miDiv = document.createElement("div");

     //2. Le añades la clase con JS
    //miDiv.classList.add("mi-clase-contenedor");

    // 3. Lo metes en el HTML
    //document.querySelector("#viajes").appendChild(miDiv);