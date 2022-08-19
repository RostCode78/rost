import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <div className="container-about">
            <div className="left">
                <p>Mi nombre es <span className="color-blue">Jhonattan tunales</span>. <br/>Me gusta hacer <span className="color-yellow">diseño web</span> y  luego<br/>llevarlo a <span className="color-yellow">código</span>, en mis tiempos libres<br/>me gusta jugar <span className="color-blue">Halo</span> y leer a <span className="color-blue">Tolkien</span>.</p>
            </div>
            <div className="right">
                <p>¿Quieres saber más sobre mi o contactarme?</p>
                <div className="boton">
                    <p>Revisa mi Instagram:</p>
                    <a href="https://www.instagram.com/dev_rost78/" target="_blank">
                        <button>
                            <Image
                                src="/icons/instagram.svg"
                                width={18}
                                height={18}
                            />
                            <p>Dev_Rost78</p>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;