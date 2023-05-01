function getCharacter(){
    let char=document.getElementById('datos')
    let url='https://rickandmortyapi.com/api/character/' + char.value 
    fetch(url) 
        .then(Response => Response.json()) 
        .then(data =>{
            document.getElementById("n").innerHTML="Nombre: "+ data.name
            document.getElementById("s").innerHTML="Estado: "+ data.status
            document.getElementById("sp").innerHTML="Especie: "+ data.species
            document.getElementById("l").innerHTML="Locación: "+ data.location.name
            document.getElementById("f").innerHTML="Imagen: "+ `<img src="${data.image}" alt="" width="150" height="150">`
            
        })
        .catch(error => console.log(error)) 
}