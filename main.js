import './style.css'

// Se almacena el contenedor
const main = document.querySelector("main")

//Variable del número de página
let pageNum = 1

// Recuperamos los personajes a través de una función
const getData = async (num) => {

const ul = document.querySelector("main")

ul.innerHTML = ""; //al pasar la página, borra los elementos para poner los siguientes

  const data = await fetch(`https://rickandmortyapi.com/api/character?page=${pageNum}`
  )

// Transformamos a JSON (formato de texto que se utiliza para representar datos estructurados en la forma de objetos)
const dataJSON = await data.json()
console.log(dataJSON.results) //miramos en la consola y ponemos .results para quedarnos con los personajes (en esta caso, un array de 20 personajes)

//hacemos un bucle para recorrer el array de "results" y poder acceder a cada personaje (objeto) mostrado en la consola.
//Creamos un "figure" donde vamos a pintar la imagen y el nombre de cada personaje. Se mete dentro del HTML y del contenedor main 
for (const character of dataJSON.results) {
  const figure = document.createElement("figure")
  figure.innerHTML = `
  <img src=${character.image} alt=${character.name}/> 
  <h2>${character.name}</h2>
  <h3> Especie: ${character.species}</h3>
  <h3>Estado: ${character.status}</h3>
  `
main.appendChild(figure)
 }}

 // Se inicia pintando la página 1
 getData(pageNum) 

 // EVENTO: al hacer "click" en el botón, sumará una página y volverá a hacer la petición para pintar los siguientes personajes
 const nextBtn = document.querySelector("#nextBtn")
 nextBtn.addEventListener("click", () => {
  pageNum++; 
  getData(pageNum) 
 })

 const previousBtn = document.querySelector("#previousBtn")
 previousBtn.addEventListener("click", () => {
  pageNum = pageNum > 0 ? (pageNum - 1) : 1
  getData(pageNum)
 })