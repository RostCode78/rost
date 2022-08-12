import { useReducer, useState, useEffect } from "react";
import appReducer from "./appReducer";
import appContext from "./appContext";

import {
    TOMAR_PROYECTO
} from './../types/index';

const AppState = props => {

    const initialState = {
        proyectos: [
            {
                id: 1,
                titulo: "Venus Sex Shop",
                url_page: "https://www.tiendavenus.com/",
                imagenes: [
                    {
                        id: 1,
                        url_amigable: "https://i.imgur.com/xHgIwWG.png",
                        alt: "Header"
                    },
                    {
                        id: 2,
                        url_amigable: "https://i.imgur.com/xHgIwWG.png",
                        alt: "Header"
                    },
                    {
                        id: 3,
                        url_amigable: "https://i.imgur.com/xHgIwWG.png",
                        alt: "Header"
                    },
                    {
                        id: 4,
                        url_amigable: "https://i.imgur.com/xHgIwWG.png",
                        alt: "Header"
                    }
                ],
                subtitulo: "Proyecto de rediseño, iniciado en Figma y desarrollado utilizando Next.",
                match: "venus-sex-shop",
                url_github: "",
                nombre: "Venus",
                portada: "https://i.imgur.com/YjY2YFt.png"
            },
            {
                id: 2,
                titulo: "Tres Distribuciones",
                url_page: "https://tresdistribuciones.com/",
                imagenes: [
                    {
                        id: 1,
                        url_amigable: "https://i.imgur.com/xHgIwWG.png",
                        alt: "Header"
                    }
                ],
                subtitulo: "",
                match: "tres-distribuciones",
                url_github: "",
                nombre: "3D",
                portada: "https://i.imgur.com/IhjYmog.png"
            },
            {
                id: 3,
                titulo: "Odibo",
                url_page: "https://www.odibo.mx/",
                imagenes: [
                    {
                        id: 1,
                        url_amigable: "https://i.imgur.com/xHgIwWG.png",
                        alt: "Header"
                    }
                ],
                subtitulo: "",
                match: "odibo",
                url_github: "",
                nombre: "Odibo",
                portada: "https://i.imgur.com/DqahcAl.png"
            },
            {
                id: 4,
                titulo: "Sey",
                url_page: "https://www.sey.mx/",
                imagenes: [
                    {
                        id: 1,
                        url_amigable: "https://i.imgur.com/xHgIwWG.png",
                        alt: "Header"
                    }
                ],
                subtitulo: "",
                match: "sey",
                url_github: "",
                nombre: "Sey",
                portada: "https://i.imgur.com/SUDKCrv.png"
            },
            {
                id: 5,
                titulo: "Gd Pro Care Services",
                url_page: "https://gdprocareservices.netlify.app/",
                imagenes: [
                    {
                        id: 1,
                        url_amigable: "https://i.imgur.com/xHgIwWG.png",
                        alt: "Header"
                    }
                ],
                subtitulo: "",
                match: "gd-pro-care-services",
                url_github: "https://github.com/RostCode78/gb-pro-care-services",
                nombre: "GD",
                portada: "https://i.imgur.com/121cnKz.png"
            },
            {
                id: 6,
                titulo: "Pokedex",
                url_page: "https://pokedex-webloveu.netlify.app/",
                imagenes: [
                    {
                        id: 1,
                        url_amigable: "https://i.imgur.com/xHgIwWG.png",
                        alt: "Header"
                    }
                ],
                subtitulo: "",
                match: "pokedex",
                url_github: "https://github.com/RostCode78/pokedex",
                nombre: "Pokedex",
                portada: "https://i.imgur.com/qNyQC9E.png"
            }
        ]
    }

    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <appContext.Provider
            value={{
                proyectos: state.proyectos
            }}
        >
            { props.children }
        </appContext.Provider>
    )

}

export default AppState;