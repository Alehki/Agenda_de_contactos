const namee = document.getElementById(`name`)
const number = document.getElementById(`number`)
const direction = document.getElementById(`direction`)

const button = document.getElementById(`button`)

const db = window.localStorage

button.addEventListener(`click`, ()=>{
    const contacto = {
        id: Math.random(1,100),
        namee: namee.value,
        number: number.value,
        direction: direction.value,
    }
    // hagamos funcion para guardar contactos.
    guardarContacto(db, contacto)
})


// Esta funcion camptura los keys para luego devolver cada valor asociado del key a objeto
// de lo que esta en local storage.
cargarContactos(db)


const elementN = document.querySelector(`.eliminar`)

elementN.addEventListener(`click`, () =>{
    let valoress = Object.keys(db)
    localStorage.removeItem(valoress[0])
    location.href = `/`
})







