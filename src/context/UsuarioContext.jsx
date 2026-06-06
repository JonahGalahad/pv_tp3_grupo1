import {createContext, useState} from "react";

//Crear el contexto para el usuario
export const UsuarioContext = createContext();

//crear el proveedor del contexto para el usuario
//children es un prop que representa a los componentes hijos que estarán dentro del proveedor del contexto
export const UsuarioProvider = ({children}) => {

    //estado para almacenar la información del usuario
    const [usuario, setUsuario] = useState({
        nombre: "Esteban",
        dni: "12345678",
        rol: "Alumno",
        institucion: "Universidad Nacional de Jujuy",
    });

    //Funcion para actualizar la información del usuario
    const actualizarUsuario = (nuevaInfo) => {
        setUsuario(nuevaInfo);
    };

    return (
        <UsuarioContext.Provider value={{usuario, actualizarUsuario}}>
            {children}
        </UsuarioContext.Provider>
    );
};