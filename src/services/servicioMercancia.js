export async function registrarMercancia(datosMercancia){

    //1. PA ONDE VOY //URL DEL SERVICIO
    const URL="http://localhost:8080/soluciontcc/v1/mercancias"

    //2. QUE VAS A HACER ALLA OME // CONFIGURO LA PETICION DE ENVIO
    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosMercancia)
    }

    //3. ARRANQUE PS OME // LLAMO A LA PROMESA FETCH
    let respuestaServidor=await fetch(URL,peticion)
    let respuestaFinal=await respuestaServidor.json()
    console.log(respuestaFinal)
    //return respuestaFinal

}