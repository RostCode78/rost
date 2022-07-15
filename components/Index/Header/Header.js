// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Header = () => {

    const Proyectos = [
        {
            id: 1,
            url_img: "https://i.imgur.com/oKH8xOm.png"
        },
        {
            id: 2,
            url_img: "https://i.imgur.com/zBTCuHO.png"
        },
        {
            id: 3,
            url_img: "https://i.imgur.com/Q2BNTeW.png"
        },
        {
            id: 4,
            url_img: "https://i.imgur.com/xHgIwWG.png"
        },
        {
            id: 5,
            url_img: "https://i.imgur.com/RKHrDIw.png"
        },
        {
            id: 6,
            url_img: "https://i.imgur.com/MjXSZnm.png"
        }
    ]

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
                        <h1>HELLO FRIEND<br/>I'M <span>JHONATTAN</span><br/>FRONT-END DEV<br/><span>GEEK</span> & <span>FREAK</span></h1>
                    </div>
                    <div className="slide">
                        <Swiper
                            loop
                            className="mySwiper"
                        >
                            { Proyectos.map(e => (
                                <SwiperSlide>
                                    <div className="image-content" key={e.id}>
                                        <div className="overlay"></div>
                                        <img src={e.url_img} alt="HOLA" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="bottom">
                    <div className="paginacion">
                        { Proyectos.map( e => (
                            <div className="circle"></div>
                        ))}
                    </div>
                    <div className="texto">
                        <p>Diseño de inicio de sesion con redes sociales.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;