function getCharacter(){
    let char=document.getElementById('ing1')
    let char1=document.getElementById('ing2')
    let url='https://rickandmortyapi.com/api/character'  
    fetch(url) 
        .then(Response => Response.json()) 
        .then(data => {
            if (char.value<=data.info.count) {
                document.getElementById('nom').innerHTML=('Nombre: ') + data.results[char.value-1].name
                document.getElementById('est').innerHTML=('Estado: ') + data.results[char.value-1].status
                document.getElementById('esp').innerHTML=('Especie: ') + data.results[char.value-1].species
                document.getElementById('loc').innerHTML=('Localización: ') + data.results[char.value-1].location.name
                document.getElementById('ima').innerHTML=('Imagen: ') + `<img src="${data.results[char.value-1].image}">`
            } else {
                document.getElementById('nom').innerHTML=('El número de personaje indicado no contiene un personaje')
                document.getElementById('est').innerHTML=('')
                document.getElementById('esp').innerHTML=('')
                document.getElementById('loc').innerHTML=('')
                document.getElementById('ima').innerHTML=('')
            }
            if (char1.value<=data.info.count) {
                document.getElementById('nom2').innerHTML=('Nombre: ') + data.results[char1.value-1].name
                document.getElementById('est2').innerHTML=('Estado: ') + data.results[char1.value-1].status
                document.getElementById('esp2').innerHTML=('Especie: ') + data.results[char1.value-1].species
                document.getElementById('loc2').innerHTML=('Localización: ') + data.results[char1.value-1].location.name
                document.getElementById('ima2').innerHTML=('Imagen: ') + `<img src="${data.results[char1.value-1].image}">`
            } else {
                document.getElementById('nom2').innerHTML=('El número de personaje indicado no contiene un personaje')
                document.getElementById('est2').innerHTML=('')
                document.getElementById('esp2').innerHTML=('')
                document.getElementById('loc2').innerHTML=('')
                document.getElementById('ima2').innerHTML=('')
            }
            if (data.results[char.value-1].episode.length > data.results[char1.value-1].episode.length) {
                document.getElementById('epis').innerHTML=('El personaje ' + data.results[char.value-1].name + ' aparece en más episodios.')
                document.getElementById('epis2').innerHTML=('')
            } else if (data.results[char1.value-1].episode.length >data.results[char.value-1].episode.length) {
                document.getElementById('epis2').innerHTML=('Ell personaje ' + data.results[char1.value-1].name + ' aparece en más episodios.')
                document.getElementById('epis').innerHTML=('')
            } else {
                document.getElementById('epis').innerHTML=('Ambos personajes aparecen la misma cantidad de veces por episodio.')
                document.getElementById('epis2').innerHTML=('')
            }
        })
        
}