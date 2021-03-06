import Axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';


// Crear el Context
export const CategoriasContext = createContext();

// Provaider es donde se encuetran las funciones y state
const CategoriasProvaider = (props) => {          

    // Crear el state del context
    const [ categorias, guardarCategorias] = useState([]);

    //Ejecutar el llamado a la api
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

            const categorias = await Axios.get(url);

            guardarCategorias(categorias.data.drinks)
        }
        obtenerCategorias();
    }, []);


    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvaider;