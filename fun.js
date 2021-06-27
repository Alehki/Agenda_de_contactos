const guardarContacto = (db, contacto) =>{
    db.setItem(contacto.id,JSON.stringify(contacto))
    // Lo sigui: refresh la pagna. BUSCAR BIEN!
    window.location.href = `/`
}



const cargarContactos = (db) =>{

    // El siguiente; "valores" es un array que tiene almacenado todos los keys del localStorage.
    let valores = Object.keys(db)

    for(let i=0; i<valores.length; i++){
    // En este obtengo el valor de storage con el key que corresponde que los tengo en un array.
    // Luego a ese valor que es un JSON lo debo convertir en objet con JSON.parse.
    let contacto = JSON.parse(db.getItem(valores[i]))

    // Cada uno de estos hay que engraparlos en la web.(VA TOMADO CADA UNO) ¿Como hacemos?
    
    createElement(contacto)
}
}

// -------------------------------------------------

/*

                    ESTO DENTRO DE CADA DIV:

<div>
    <p>Nombre</p>
    <p>Numero</p>
    <p>Direccion</p>
    <input class="eliminar" type="button" value="X">
</div>

*/

const createElement = (contacto) =>{
    let div = document.createElement(`div`)
    let p1 = document.createElement(`p`)
    let p2 = document.createElement(`p`)
    let p3 = document.createElement(`p`)
    let borra = document.createElement(`input`)

    p1.textContent = contacto.namee
    p2.textContent = contacto.number
    p3.textContent = contacto.direction
    borra.classList.add(`eliminar`)
    borra.setAttribute(`type`, `button`)
    borra.setAttribute(`value`, `X`)
    
    let divv = list.appendChild(div)

    divv.appendChild(p1)
    divv.appendChild(p2)
    divv.appendChild(p3)
    divv.appendChild(borra)
}



