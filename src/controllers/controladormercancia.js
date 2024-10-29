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
        "fechaIngreso": fechaIngresoMercancia.value
    }

    console.log(objetoMercancia)
    //llamado al API
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
    
})