import Layout from './../../components/Layout';
import Image from 'next/image';

const paginaproyecto = () => {
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
                        <a href="https://github.com/RostCode78/tiendavenus" target="_blank">
                            <div className="github">
                                <Image
                                    src="/icons/github.svg"
                                    width={36}
                                    height={36}
                                />
                            </div>
                        </a>
                        <div className="slide">
                            <img src="https://i.imgur.com/xHgIwWG.png" alt="Imagen 1" />
                        </div>
                        <div className="overlay">
                            <h1>Tienda Venus</h1>
                            <a href="www.tiendavenus.com" target="_blank">Visita el sitio web</a>
                            <p>E-commerce de juguetes sexuales con un estilo vintage minimalista.</p>
                        </div>
                    </div>
                </div>
                <div className="content"></div>
            </div>
        </Layout>
    )
}

export default paginaproyecto;