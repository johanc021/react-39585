import data from '../data/data.json'

export const capturarDatos = () => {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }