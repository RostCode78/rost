import { useState, useEffect } from 'react';
import Card from "../../Cards/Card/Card";

const Skills = () => {

    const Proyectos = [
        {
            id: 7,
            nombre: "Abogado Sanitarista LS",
            descripcion: "Diseño y desarrollo especial para un abogado sanitarista.",
            url_amigable: "abogado-sanitarista-ls",
            url_img: "https://i.imgur.com/8trxcHy.png",
            herramientas: [
                {
                    id: 1,
                    nombre: "Figma",
                    url_img: "https://i.imgur.com/EonrQaT.png"
                },
                {
                    id: 5,
                    nombre: "React",
                    url_img: "https://i.imgur.com/EZn6kIC.png"
                },
                {
                    id: 6,
                    nombre: "SASS",
                    url_img: "https://i.imgur.com/sWxvBhI.png"
                },
            ],
            url_git: "https://github.com/RostCode78/abogado-sanitarista",
            url_pagina: "https://abogadosanitaristals.com/",
        },
        {
            id: 1,
            nombre: "Tienda Venus",
            descripcion: "Rediseño y desarrollo de la más grande tienda de juguetes para adultos en México.",
            url_amigable: "venus-sex-shop",
            url_img: "https://i.imgur.com/yBctu9f.png",
            herramientas: [
                {
                    id: 1,
                    nombre: "Figma",
                    url_img: "https://i.imgur.com/EonrQaT.png"
                },
                {
                    id: 5,
                    nombre: "React",
                    url_img: "https://i.imgur.com/EZn6kIC.png"
                },
                {
                    id: 6,
                    nombre: "SASS",
                    url_img: "https://i.imgur.com/sWxvBhI.png"
                },
            ],
            url_git: "",
            url_pagina: "https://www.tiendavenus.com/",
        },
        {
            id: 2,
            nombre: "Tres Distribuciones",
            descripcion: "Rediseño y desarrollo de una tienda para mayoristas.",
            url_amigable: "tres-distribuciones",
            url_img: "https://i.imgur.com/74Kgr5H.png",
            herramientas: [
                {
                    id: 1,
                    nombre: "Figma",
                    url_img: "https://i.imgur.com/EonrQaT.png"
                },
                {
                    id: 5,
                    nombre: "React",
                    url_img: "https://i.imgur.com/EZn6kIC.png"
                },
                {
                    id: 6,
                    nombre: "SASS",
                    url_img: "https://i.imgur.com/sWxvBhI.png"
                },
            ],
            url_git: "",
            url_pagina: "https://tresdistribuciones.com/",
        },
        {
            id: 3,
            nombre: "Odibo",
            descripcion: "Rediseño y desarrollo con más libertad creativa.",
            url_amigable: "odibo",
            url_img: "https://i.imgur.com/tYplb7e.png",
            herramientas: [
                {
                    id: 1,
                    nombre: "Figma",
                    url_img: "https://i.imgur.com/EonrQaT.png"
                },
                {
                    id: 5,
                    nombre: "React",
                    url_img: "https://i.imgur.com/EZn6kIC.png"
                },
                {
                    id: 6,
                    nombre: "SASS",
                    url_img: "https://i.imgur.com/sWxvBhI.png"
                },
            ],
            url_git: "",
            url_pagina: "https://www.odibo.mx/",
        },
        {
            id: 4,
            nombre: "Sey",
            descripcion: "Rediseño y desarrollo hecho utilizando ReactJs",
            url_amigable: "sey",
            url_img: "https://i.imgur.com/8puboGN.png",
            herramientas: [
                {
                    id: 1,
                    nombre: "Figma",
                    url_img: "https://i.imgur.com/EonrQaT.png"
                },
                {
                    id: 5,
                    nombre: "React",
                    url_img: "https://i.imgur.com/EZn6kIC.png"
                },
                {
                    id: 6,
                    nombre: "SASS",
                    url_img: "https://i.imgur.com/sWxvBhI.png"
                },
            ],
            url_git: "",
            url_pagina: "https://www.sey.mx/",
        },
        {
            id: 5,
            nombre: "GD Pro Care Services",
            descripcion: "Diseño inspirado en mostrar principalmente imágenes de trabajo.",
            url_amigable: "gd-pro-care-services",
            url_img: "https://i.imgur.com/C5Cvo8D.png",
            herramientas: [
                {
                    id: 1,
                    nombre: "Figma",
                    url_img: "https://i.imgur.com/EonrQaT.png"
                },
                {
                    id: 2,
                    nombre: "HTML5",
                    url_img: "https://i.imgur.com/X8uM4Xx.png"
                },
                {
                    id: 3,
                    nombre: "CSS3",
                    url_img: "https://i.imgur.com/HXFIWG2.png"
                },
                {
                    id: 4,
                    nombre: "JavaScript",
                    url_img: "https://i.imgur.com/yGJxpsa.png"
                },
                {
                    id: 6,
                    nombre: "SASS",
                    url_img: "https://i.imgur.com/sWxvBhI.png"
                },
            ],
            url_git: "https://github.com/RostCode78/gb-pro-care-services",
            url_pagina: "https://gdprocareservices.netlify.app/",
        },
        {
            id: 6,
            nombre: "Pokedex",
            descripcion: "Diseño especial de cómo me gustaría a mí ver los datos de los pokemon.",
            url_amigable: "pokedex",
            url_img: "https://i.imgur.com/FZkPpmw.png",
            herramientas: [
                {
                    id: 1,
                    nombre: "Figma",
                    url_img: "https://i.imgur.com/EonrQaT.png"
                },
                {
                    id: 3,
                    nombre: "CSS3",
                    url_img: "https://i.imgur.com/HXFIWG2.png"
                },
                {
                    id: 5,
                    nombre: "React",
                    url_img: "https://i.imgur.com/EZn6kIC.png"
                },
            ],
            url_git: "https://github.com/RostCode78/pokedex",
            url_pagina: "https://pokedex-webloveu.netlify.app/",
        },
    ]

    /*===================================
    =    ACTIVAR FILTRO SELECCIONADO    =
    ===================================*/

    const OpcionesProyectos = [
        {
            id: 1,
            titulo: "Todos"
        },
        {
            id: 2,
            titulo: "Trabajos"
        },
        {
            id: 3,
            titulo: "Proyectos personales"
        },
        {
            id: 4,
            titulo: "Cursos / tutoriales"
        },
    ]

    const OnClickActivarFiltro = (e) => {

        const ItemSeleccionado = document.querySelector(`._id-${e.id}`);
        const Restantes = document.querySelectorAll('.item-p');

        Restantes.forEach( e => {
            e.classList.remove("active");
        })

        ItemSeleccionado.classList.add("active");

    }

    return (
        <div className="container-skills">
            <div className="content">
                <div className="titulo">
                    <h3>Mis <span>Proyectos</span></h3>
                    <p>Me mantengo en <span>continuo aprendizaje</span> y <span>mejorando mis habilidades</span>, aquí puedes ver lo que ya he realizado.</p>
                </div>
                {/* <div className="content-filtros">
                    { OpcionesProyectos.map( e => (
                        <div className={`item-p _id-${e.id}`} onClick={ () => OnClickActivarFiltro(e) }>
                            <p>{ e.titulo }</p>
                            <div className="line"/>
                        </div>
                    ))}
                </div> */}
                <div className="content">
                    {
                        Proyectos.map( e => (
                            <Card
                                key={ e.id }
                                proyecto={ e }
                            />
                        ))
                    }
                </div>
                {/* <div className="boton">
                    <button>
                        <p>Ver mas proyectos</p>
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default Skills;
