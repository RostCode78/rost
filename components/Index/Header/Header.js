import { useState, useLayoutEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';

const Header = () => {

    const [responsive, setResponsive] = useState(false);

    useLayoutEffect(() => {
        if (window.innerWidth > 800) {
            setResponsive(true);
        }
    }, []);

    const Proyectos = [
        {
            id: 1,
            url_img: "/assets/banner-index/desktop-2.webp",
            url_img_responsive: "https://i.imgur.com/Xj0ge2q.jpg",
            texto: "Pop-up que abren modal del producto."
        },
        {
            id: 2,
            url_img: "/assets/banner-index/desktop-1.webp",
            url_img_responsive: "https://i.imgur.com/mV0Xsua.jpg",
            texto: "Rediseño de e-commerce para mayoristas."
        },
        {
            id: 3,
            url_img: "/assets/banner-index/desktop-3.webp",
            url_img_responsive: "https://i.imgur.com/LyQmfzS.jpg",
            texto: "Rediseño realizado con React."
        },
        {
            id: 4,
            url_img: "/assets/banner-index/desktop-6.webp",
            url_img_responsive: "https://i.imgur.com/u93NaNf.jpg",
            texto: "Sección de productos destacados en Venus Sex-shop."
        },
        {
            id: 5,
            url_img: "/assets/banner-index/desktop-4.webp",
            url_img_responsive: "https://i.imgur.com/3z37CIA.jpg",
            texto: "Página hecha con HTML, CSS y JavaScript."
        },
        {
            id: 6,
            url_img: "/assets/banner-index/desktop-5.webp",
            url_img_responsive: "https://i.imgur.com/mb5HlQB.jpg",
            texto: "Diseño personal de una Pokedex, desarrollada en React."
        }
    ]

    const [ textoimagen, setTextoImagen ] = useState("");

    const OnSlideChange = (e) => {
        const index = e.realIndex + 1;
        const Circulo = document.querySelector(`._circle${index}`);
        const TodosLosCirculo = document.querySelectorAll(".circle");

        TodosLosCirculo.forEach( circulos => {
            circulos.style.backgroundColor = "#9CA2AE";
            circulos.style.width = "15px";
            circulos.style.height = "15px";
        });

        Circulo.style.backgroundColor = "#202938";
        Circulo.style.width = "20px";
        Circulo.style.height = "20px";
        setTextoImagen(Proyectos[e.realIndex].texto);
    }

    return (
        <div className="container-header">
            <div className="fondo">
                <div className="degradado">
                    <img src="/assets/degradado.png" alt="Un degradado bien perron." />
                </div>
                <div className="overlay"></div>
                <img src="/assets/fondo.png" alt="Un fondo bien perron." />
            </div>
            <div className="content">
                <div className="top">
                    <div className="texto">
                        <h1>HELLO FRIEND<br/>I'M <span>JHONATTAN</span><br/>FRONT-END DEV<br/><span>FREAK</span> & <span>GEEK</span></h1>
                    </div>

                    <div className="slide-desktop">
                        <Swiper
                            loop
                            autoplay={{ 
                                delay: 3000,
                                disableOnInteraction: false 
                            }}
                            speed={500}
                            slidesPerView="auto"
                            onSlideChange={ (e) => OnSlideChange(e) }
                            className="mySwiper"
                            modules={[Autoplay]}
                        >
                            { Proyectos.map(e => (
                                <SwiperSlide key={ e.id }>
                                    <div className="image-content-desktop" key={e.id}>
                                        <div className="overlay"></div>
                                        <img src={ e.url_img } alt="HOLA" />
                                    </div>
                                    <div className="image-content-movil" key={e.id}>
                                        <div className="overlay"></div>
                                        <img src={ e.url_img_responsive } alt="HOLA" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="bottom">
                    <div className="paginacion">
                        { Proyectos.map( e => (
                            <div key={ e.id } className={ `circle _circle${e.id}`}></div>
                        ))}
                    </div>
                    <div className="texto">
                        <p>{ textoimagen }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;