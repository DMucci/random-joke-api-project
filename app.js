// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

button.addEventListener('click', async function () {
    //1. Obtener los datos de la API
    const respuesta = await fetch("https://api.chucknorris.io/jokes/random");
    // console.log("Response", respuesta); Las funciones que manejan fetch tienen que estar adentro de una funcion asincrona.
    //2. Transformarlos en algo que yo pueda manipular con JS (objeto, array de objetos)
    const datos = await respuesta.json();
    // console.log(datos.value);
    //3. Actualizar el nodo o los nodos del DOM
    jokeDIV.textContent = datos.value
})

// async function getRandomJoke() {
//     // await -> usado para gestionar funciones que se ejecutan de forma asíncrona, es decir, que van a tardar un ratito más o menos largo, en ejecutarse.
//     // Fetch es hacer una petición GET a la URL que pongo como parámetro
//     const respuesta = await fetch("https://api.chucknorris.io/jokes/random");
//     console.log("Response", respuesta);

//     // 2. Va a procesar la respuesta, para convertirla en un tipo de datos que sea capaz mi programa de entenderlo (objeto, array de objetos) 99% veces
//     // Le decimos a JavaScript que esa respuesta contiene un string en formato JSON. Queremos que lo convierta de string a objeto (o array de objetos)
//     const datos = await respuesta.json();
//     console.log(datos.value);
//     jokeDIV.textContent
// }

// getRandomJoke();