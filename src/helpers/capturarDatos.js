import data from '../data/data.json'
import { collection, getDocs, getDoc, doc, query, where, orderBy } from 'firebase/firestore'
import { db } from '../firebase/config'


//rutas Firebase

//datos iniciales para el cargue de libros desde Firebase -  pagina principal de libros.

export const capturarDatosFB = () => {
    return new Promise((resolve, reject) => {
        const librosRef = collection(db,"books");

        getDocs(librosRef)
            .then((res) => {
                const datos = res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    };
                });
                resolve(datos);
            })
            .catch((error) => {
                reject(error);
            });
    });
};


//consulta por ID desde itemDetailContainer
export const pedirLibrosPorIdFB = (id) => {
    return new Promise((resolve, reject) => {
        const librosRef = doc(db, "books", id);
        getDoc(librosRef)
            .then((doc) => {
                const datos = {
                    id: doc.id,
                    ...doc.data()
                };
                resolve(datos)
            })
            .catch((error) => {
                reject(error);
            });
    });
};

//consulta por genero desde itemListContainer
export const buscarLibrosFB = (genero) => {
    return new Promise((resolve, reject) => {

        const libroRef = collection(db, "books");
        const q = query(libroRef, where("genero", "==", genero));
        getDocs(q)
            .then((res) => {
                const datos = res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    };
                });
                resolve(datos)
            })
            .catch((error) => {
                reject(error);
            });
    });
};

//consulta por parametro buscado en Input.
const buscarLibrosInput = (busqueda) => {
    return new Promise((resolve, reject) => {
        const dbRef = collection(db, orderBy("name", "asc"), "books");
        dbRef.orderByChild('titulo')
            .startAt(busqueda)
            .endAt(busqueda + '\uf8ff')
            .once('value', (snapshot) => {
                const libros = snapshot.val();
                if (libros) {
                    const librosArray = Object.keys(libros).map((key) => {
                        return { id: key, ...libros[key] };
                    });
                    resolve(librosArray);
                } else {
                    resolve([]);
                }
            }, (error) => {
                reject(error);
            });
    });
};




//datos iniciales para el cargue de libros desde JSON
export const capturarDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
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



//RUtas con JSON
//libros por id para el detalle del libro
export const pedirLibrosPorId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.find(lib => lib.id === id))
        }, 1400)
    })
}




