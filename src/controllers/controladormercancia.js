import {registrarMercancia} from "../services/servicioMercancia.js"
import {consultarMercancias} from "../services/servicioConsultaZona.js"

let botonRegistroMercancia=document.getElementById("botonmercancia")
let pesoMercancia=document.getElementById("pesomercancia")
let volumenMercancia=document.getElementById("volumenmercancia")
let nombreMercancia=document.getElementById("nombremercancia")
let tipoDestinatarioMercancia=document.getElementById("tipodestinatariomercancia")
let departamentoMercancia=document.getElementById("departamentomercancia")
let ciudadMercancia=document.getElementById("ciudadmercancia")
let nombreDestinatarioMercancia=document.getElementById("nombredestinatariomercancia")
let direccionMercancia=document.getElementById("direccionmercancia")
let fechaIngresoMercancia=document.getElementById("fechaingresomercancia")
let fechaSalidaMercancia=document.getElementById("fechasalidamercancia")

//detectar evento de clic en el formulario
botonRegistroMercancia.addEventListener("click",function(evento){
    evento.preventDefault()

    let objetoMercancia={
        "volumen": volumenMercancia.value,
        "peso": pesoMercancia.value,
        "nombre": nombreMercancia.value,
        "tipoDestinatario": tipoDestinatarioMercancia.value,
        "nombreDestinatario": nombreDestinatarioMercancia.value,
        "departamento": departamentoMercancia.value,
        "ciudad": ciudadMercancia.value,
        "direccion": direccionMercancia.value,
        "fechaIngreso": fechaIngresoMercancia.value,
        "zonabodega":{
            "idZona":1
        }
    }

    
    //llamado al API
    registrarMercancia(objetoMercancia)

    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
    
})

//Llamando al servicio de consulta de mercancias
let fila=document.getElementById("fila")
consultarMercancias()
.then(function(respuesta){
    console.log(respuesta)
    respuesta.forEach(function(mercancia){
        
        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow","p-5")

        let nombreMercancia=document.createElement("h3")
        nombreMercancia.textContent=mercancia.nombre

        let fechaIngresoMercancia=document.createElement("h4")
        fechaIngresoMercancia.textContent="Fecha ingreso: "+mercancia.fechaIngreso

        tarjeta.appendChild(nombreMercancia)
        tarjeta.appendChild(fechaIngresoMercancia)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
})
