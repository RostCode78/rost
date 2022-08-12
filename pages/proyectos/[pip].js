import { useState, useEffect, useContext } from 'react';
import Layout from './../../components/Layout';
import appContext from './../../context/appContext';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const paginaproyecto = () => {

    const Router = useRouter();

    const ContextApp = useContext(appContext);
    const {
        proyectos
    } = ContextApp;

    const [ proyecto_actual, setProyectoActual ] = useState({});

    useEffect( () => {
        if ( Router.query.pip !== undefined ) {
            proyectos.map( e => {
                if ( e.match == Router.query.pip ) {
                    setProyectoActual(e);
                }
            });
        }
    }, [Router]);

    const [ proyecto_siguiente, setProyectoSiguiente ] = useState("");
    const [ proyecto_anterior, setProyectoAnterior ] = useState("");

    useEffect( () => {

        if ( proyecto_actual.id !== undefined ) {
            proyectos.map( e => {
                if ( e.id == ( proyecto_actual.id + 1 ) ) {
                    setProyectoSiguiente(e.match);
                }
                if ( e.id == ( proyecto_actual.id - 1 ) ) {
                    setProyectoAnterior(e.match);
                }
                if ( proyecto_actual.id == 1 ) {
                    if ( e.id == proyectos.length ) {
                        setProyectoAnterior(e.match);
                    }
                }
                if ( proyecto_actual.id == proyectos.length ) {
                    if ( e.id == 1 ) {
                        setProyectoSiguiente(e.match);
                    }
                }
            });
        }

    }, [proyecto_actual]);

    return (
        <Layout>
            <div className="container-pagina-proyecto">
                <div className="fondo">
                    <div className="degradado">
                        <img src="/assets/degradado.png" alt="Un degradado bien perron." />
                    </div>
                    <div className="overlay"></div>
                    <img src="/assets/fondo.png" alt="Un fondo bien perron." />
                </div>
                <div className="banner">
                    <div className="box">

                        { proyecto_actual.url_github !== "" 
                        ?
                            <a href={ proyecto_actual.url_github } target="_blank">
                                <div className="github">
                                    <Image
                                        src="/icons/github.svg"
                                        width={36}
                                        height={36}
                                    />
                                </div>
                            </a>
                        : null }
                        
                        <div className="slide">
                            <img src={ proyecto_actual.portada } alt={ proyecto_actual.titulo } />
                        </div>

                        <div className="overlay">

                            <h1>{ proyecto_actual.titulo }</h1>
                            <a href={ proyecto_actual.url_page } target="_blank">Visita el sitio web</a>
                            <p>{ proyecto_actual.subtitulo }</p>

                        </div>

                        <div className="flechas-proyectos">

                            <Link href={proyecto_anterior} as={proyecto_anterior} >
                                <Image
                                    style={{ cursor: "pointer"}}
                                    src="/icons/arrow-left.svg"
                                    width={35}
                                    height={35}
                                />
                            </Link>

                            <p>Proyecto { proyecto_actual.nombre }</p>

                            <Link href={proyecto_siguiente} as={proyecto_siguiente} >
                                <Image
                                    style={{ cursor: "pointer"}}
                                    src="/icons/arrow-right.svg"
                                    width={35}
                                    height={35}
                                />
                            </Link>

                        </div>

                    </div>
                </div>
                <div className="content"></div>
            </div>
        </Layout>
    )
}

export default paginaproyecto;