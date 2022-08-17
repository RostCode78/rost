import { useState, useEffect } from 'react';
import Card from "../../Card/Card";

const Skills = () => {

    const Proyectos = [
        {
            id: 1,
            nombre: "Venus Sex Shop",
            descripcion: "Rediseño y desarrollo de la mas grande tienda de juguetes para adultos en Mexico.",
            url_amigable: "venus-sex-shop",
            url_img: "https://i.imgur.com/4Uryw7G.png",
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
            url_img: "https://i.imgur.com/MlYDJMR.png|",
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
            descripcion: "Rediseño y desarrollo con mas libertad creativa.",
            url_amigable: "odibo",
            url_img: "https://i.imgur.com/7Z6bsUB.png",
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
            url_img: "https://i.imgur.com/SDXrOp9.png",
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
            descripcion: "Rediseño y desarrollo de la mas grande tienda de juguetes para adultos en Mexico.",
            url_amigable: "gd-pro-care-services",
            url_img: "https://i.imgur.com/J3sudih.png",
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
            descripcion: "Rediseño y desarrollo de la mas grande tienda de juguetes para adultos en Mexico.",
            url_amigable: "pokedex",
            url_img: "https://i.imgur.com/pn0HjtT.png",
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
        }
    ]

    const [responsive, setResponsive] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 800) {
            setResponsive(true);
        }
    }, []);

    return (
        <div className="container-skills">
            <div className="titulo">
                <h3>Mis <span>Proyectos</span></h3>
                <p>Me mantengo en <span>continuo aprendizaje</span> y <span>mejorando mis habilidades</span>, aquí puedes ver lo que ya he realizado.</p>
            </div>
            <div className="content">
                { responsive 
                ?
                    Proyectos.slice(0, 6).map( e => (
                        <Card
                            key={ e.id }
                            proyecto={ e }
                        />
                    ))
                :
                    Proyectos.slice(0, 6).map( e => (
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
    )
}

export default Skills;