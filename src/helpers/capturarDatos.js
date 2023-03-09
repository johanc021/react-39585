import data from '../data/data.json'

export const capturarDatos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(data)
            }, 1400)
        })
    }

export const generos = () => {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}
