import data from '../data/data.json'

export const capturarDatos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(data)
            }, 1400)
        })
    }