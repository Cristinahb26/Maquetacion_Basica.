let personas = [];

function agregarPersonas() {

    let nombre= document.getElementById("nombre");
    let destino= document.getElementById("destino");
    let origen= document.getElementById("origen");
    let ida= document.getElementById("ida");
    let nºdePersonas= document.getElementById("nºdePersonas");

    let persona = {

           nombre_persona: nombre.value,
           destino_persona: destino.value,
           origen_persona: origen.value,
           ida_persona: ida.value,
           vuelta_persona: vuelta.value,
           nºdePersonas_persona: nºdePersonas.value,

    };
    
    personas.push(persona);
    console.log(persona);
    
}

function verPersonas() {

    let tabla = document.getElementById("persona");
    let cajon1= document.querySelector(".cajon2");

    if(cajon1.classList.contains("cajon1")){

        cajon1.classList.remove("cajon1")
    }
    
    tabla.innerHTML = `

     <tr class="table1">

        <th>Nombre</th>
        <th>Destino</th>
        <th>Origen</th>
        <th>Ida</th>
        <th>Vuelta</th>
        <th>Nº de Personas</th>


    </tr> `
    
            

              
    for(let i=0; i<personas.length; i++){

        if(personas[i].destino_persona.toLowerCase() == 'canarias' || personas[i].destino_persona.toLowerCase() == 'mallorca' || personas[i].destino_persona.toLowerCase() == 'galicia'){

        tabla.innerHTML +=
        `<tr>
            <th>${personas[i].nombre_persona}<th>
            <th>${personas[i].destino_persona.toUpperCase() + personas[i].destino_persona.substring(1).toLowerCase()}<th>
            <th>${personas[i].origen_persona.toUpperCase() + personas[i].origen_persona.substring(1).toLowerCase()}<th>
            <th>${personas[i].ida_persona}<th>
            <th>${personas[i].vuelta_persona}<th>
            <th>${personas[i].nºdePersonas_persona}<th>
        <tr>    
        `
     }
  }
}

  
//   let registroButton = document.getElementById("registro");
//   registroButton.addEventListener("click", agregarPersonas());
  