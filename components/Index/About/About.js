import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <div className="container-about">
            <div className="content">
                <div className="left">
                    <p>Mi nombre es <span className="color-blue">Jhonattan Tunales</span>. <br/>Me gusta hacer <span className="color-yellow">diseño web</span> y  luego<br/>llevarlo a <span className="color-yellow">código</span>, en mis tiempos libres<br/>me gusta jugar <span className="color-blue">Halo</span> y leer a <span className="color-blue">Tolkien</span>.</p>
                </div>
                <div className="right">
                    <p>¿Quieres ponerte en contacto conmigo?</p>
                    <div className="boton">
                        <p>Envíame un correo:</p>
                        <a href="mailto:ros.tunales@gmail.com" target="_blank">
                            <button>
                                <p>ros.tunales@gmail.com</p>
                            </button>
                        </a>
                    </div>
                    <div className="boton">
                        <p>Envíame un mensaje:</p>
                        <a href="https://wa.me/528118957772" target="_blank">
                            <button>
                                <Image
                                    src="/icons/WhatsApp.svg"
                                    width={18}
                                    height={18}
                                />
                                <p>Whatsapp</p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;