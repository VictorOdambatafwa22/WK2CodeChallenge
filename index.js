//fetch("http://localhost:3000/characters")
  //.then((resp) => resp.json())
  //.then((json) => console.log(json));
  const animalList=document.querySelector("#animal-list")
  const animalDetailsElement=document.querySelector("#animal-details")

  function fetchAllAnimals(){
  fetch("http://localhost:3000/characters")
  .then((resp) => resp.json())
  .then((json) => createListOfAnimals(json));
  }

function fetchAnimalById(id){
  fetch(`http://localhost:3000/characters/${id}`)
  .then((resp) => resp.json())
  .then((json) => buildAnimalDetails(json));
}

function buildAnimalDetails(data){
const img=animalDetailsElement.querySelector("img")
const h1=animalDetailsElement.querySelector("h1")
const button =animalDetailsElement.querySelector("h2 button")

img.src=data.image
img.alt=data.name
h1.textContent=data.name
button.textContent=data.votes
button.addEventListener("click", incrementVotes)
}

function incrementVotes(e){
let count =Number.parseInt(e.target.textContent)
e.target.textContent=count+1
}


  function createListOfAnimals(data){
data.forEach(element => {
  const li=document.createElement("li")
  li.textContent=element.name
  li.id=element.id
  li.addEventListener("click",createAnimalDetails)
  animalList.appendChild(li)
});

buildAnimalDetails(data[0])
  }
 function createAnimalDetails(e){
  const id=e.target.id
  fetchAnimalById(id)
 }

 
  window.onload=fetchAllAnimals