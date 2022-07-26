import { useReducer, useState, useEffect } from "react";
import appReducer from "./appReducer";
import appContext from "./appContext";

import {
    TOMAR_PROYECTO
} from './../types/index';

const AppState = props => {

    const initialState = {
        proyectos: [],
        proyecto_actual: []
    }

    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <appContext.Provider
            value={{
                proyecto_actual: state.proyecto_actual
            }}
        >
            { props.children }
        </appContext.Provider>
    )

}

export default AppState;