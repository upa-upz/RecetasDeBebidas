import React,{ createContext, useEffect, useState } from 'react';
import Axios from 'axios';


// crear el context
export const ModalContext = createContext();


const ModalProvider = (props) => {

    // state del provider
    const [idreceta, setIdReceta] = useState(null);
    const [ informacion, setReceta ] = useState({});

    // una vez que tenemos una receta, llamar a la api
    useEffect(() => {
       const obtenerReceta = async () => {
        if(!idreceta) return;
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

        
        const resultado = await Axios.get(url);
       
        setReceta(resultado.data.drinks[0])
       }
       obtenerReceta();
    }, [idreceta])

    return ( 
        <ModalContext.Provider
            value={{
                informacion,
                setIdReceta,
                setReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;