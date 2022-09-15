import React, {useReducer} from 'react';
import AppContext from './AppContext';
import Reducer from './Reducer';

export default function Contexto({children}) {
    
    const datos = {
        valor1: "hola",
        valor2: "adios",
        valor3: "hasta luego",
    };
    
    // console.log(datos);

    const [DatosNew,dispatch] = useReducer(Reducer,datos);

    // console.log(DatosNew);

    // alert("ingreso aca")

    const Provider = {
        DatosNew,
        setState: (payload) => {
            dispatch({
                type: "SET_DATA",
                payload
            });
        },
    }

    // console.log(Provider);

    return <AppContext.Provider value={Provider}>{children}</AppContext.Provider>
}