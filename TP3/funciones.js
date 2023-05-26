function getInfo() {
  // Límite de personajes por página
  const limit = 20;

  // Número total de personajes en la API de Rick and Morty
  let totalCharacters;

  // Llamo Fetch para obtener el número total de personajes en la API de Rick and Morty
  fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(data => {
      // Obtengo el número total de personajes en la API de Rick and Morty
      totalCharacters = data.info.count;

      // Genero un número aleatorio de personaje entre 1 y el número total de personajes
      const randomCharacter = Math.floor(Math.random() * totalCharacters) + 1;

      // Calculo la página correspondiente al personaje aleatorio
      const randomPage = Math.ceil(randomCharacter / limit);

      // Llamo Fetch para cargar datos de la API de Rick and Morty para la página correspondiente al personaje aleatorio
      fetch(`https://rickandmortyapi.com/api/character/?page=${randomPage}`)
        .then(response => response.json())
        .then(data => {
          // Proceso los datos del personaje aleatorio
          console.log('Datos del personaje aleatorio:', data.results[randomCharacter % limit]);

          // Actualizo los elementos div correspondientes con los datos del personaje aleatorio
          document.getElementById('nom1').innerHTML = `Nombre: ${data.results[randomCharacter % limit].name}`;
          document.getElementById('est1').innerHTML = `Estado: ${data.results[randomCharacter % limit].status}`;
          document.getElementById('esp1').innerHTML = `Especie: ${data.results[randomCharacter % limit].species}`;
          document.getElementById('loc1').innerHTML= `Localidad: ${data.results[randomCharacter % limit].location.name}`
          document.getElementById('gen1').innerHTML = `Género: ${data.results[randomCharacter % limit].gender}`;
          document.getElementById('img1').innerHTML = `<img src="${data.results[randomCharacter % limit].image}" alt="" width="150" height="150">`;

          // Llamo Fetch para cargar datos de la segunda API
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data2 => {
          // Proceso los datos de la segunda API
          console.log('Datos de la segunda API:', data2);

          document.getElementById('nom2').innerHTML=`Nombre: ${data2.results[0].name.first}`;
          document.getElementById('ape2').innerHTML=`Apellido: ${data2.results[0].name.last}`
          document.getElementById('fec').innerHTML=`Fecha de Nacimiento: ${data2.results[0].dob.date}`
          document.getElementById('loc2').innerHTML=`Localidad: ${data2.results[0].location.city}`
          document.getElementById('lat').innerHTML=`Latitud: ${data2.results[0].location.coordinates.latitude}`
          document.getElementById('long').innerHTML=`Longitud: ${data2.results[0].location.coordinates.longitude}`
          document.getElementById('gen2').innerHTML=`Género: ${data2.results[0].gender}`;
          document.getElementById('img2').innerHTML=`<img src="${data2.results[0].picture.large}" alt="" width="150" height="150">`;

          if (data.results[randomCharacter % limit].gender.toLowerCase() === data2.results[0].gender.toLowerCase()) {
            document.getElementById('mensaje').innerHTML = `<img src="verdadero.png" alt="" width="150" height="150">`;
          } else {
            document.getElementById('mensaje').innerHTML = `<img src="falso.jpg" alt="" width="150" height="150">`;
          }

          })
          .catch(error => {
          console.error('Error al cargar datos de la segunda API:', error);
          });

          })
          .catch(error => {
          console.error('Error al cargar datos de la API de Rick and Morty:', error);
          });
        }
      )
    }