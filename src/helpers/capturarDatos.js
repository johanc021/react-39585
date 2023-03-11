import data from '../data/data.json'

//datos iniciales para el cargue de libros 
export const capturarDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(data)
        }, 1400)
    })
}

//cargue del dropdown para generos en el navbar
export const generosMenu = () => {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

//libros por id para el detalle del libro
export const pedirLibrosPorId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.find(lib => lib.id === id))
        }, 1400)
    })
}


/* export const generosFiltro = (genero) => {
    return new Promise((resolve, reject) => {
        resolve(data.filter(lib => lib.genero === genero))
    })
} */
