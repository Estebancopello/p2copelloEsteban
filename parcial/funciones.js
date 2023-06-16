function getDatos() { 

    char=document.getElementById("idm").value;
    char2=document.getElementById("idp").value;

    let encontrado1=false; 
    let encontrado2=false; 

    fetch('api.json')
    .then(response => response.json())
    .then(data => {
        console.log(data["localidades-censales"]);

        var localidades=data["localidades-censales"];

        
        for (let i = 0; i < localidades.length; i++) {
            if (char === localidades[i].municipio.id)
            encontrado2=true;
            document.getElementById("mun").innerHTML = `Municipio: ${localidades[i].municipio.nombre}`;
            document.getElementById("lat").innerHTML = `Latitud: ${localidades[i].centroide.lat}`;
            document.getElementById("lon").innerHTML = `Longitud: ${localidades[i].centroide.lon}`;
            if (localidades[i].municipio.id = 'null')
            document.getElementById("dep").innerHTML = `Provincia: ${localidades[i].departamento.nombre}`;
    
        }

        if (!encontrado1) {
            document.getElementById("mun").innerHTML = `Municipio no existe`;
            document.getElementById("lat").innerHTML = ` `;
            document.getElementById("lon").innerHTML = ` `;
            document.getElementById("dep").innerHTML = ` `;
        }
        

        if (char2.length === 2 && !isNaN(char2)) {
            for (let i = 0; i < localidades.length; i++) { 
                if (char2 === localidades[i].provincia.id) {
                encontrado=true;
                document.getElementById("prov").innerHTML = `Provincia: ${localidades[i].provincia.nombre}`;
                document.getElementById("lat2").innerHTML = `Latitud: ${localidades[i].centroide.lat}`;
                document.getElementById("lon2").innerHTML = `Longitud: ${localidades[i].centroide.lon}`;

                }
            } 

            if (!encontrado2) {
                
            }
        } else {
            document.getElementById("prov").innerHTML = ` `;
            document.getElementById("lat2").innerHTML = ` `;
            document.getElementById("lon2").innerHTML = `Ingresar número de dos dígitos en ID Provincia`
        }         
    })
}