import Link from "next/link";

const Card = ({ proyecto }) => {
    return (
        <Link href={`/proyectos/${proyecto.url_amigable}`} as={`/proyectos/${proyecto.url_amigable}`}>
            <div className="container-card">
                <div className="imagen">
                    <img src={ proyecto.url_img } alt="Imagen para card" />
                </div>
                <div className="content-card">
                    <div className="texto">
                        <h2>{ proyecto.nombre }</h2>
                        <p>{ proyecto.descripcion }</p>
                    </div>
                    <div className="herramientas">
                        { proyecto.herramientas.slice(0, 4).map( e => (
                            <div className="circulo" key={ e.id }>
                                <img src={ e.url_img } alt={ e.nombre } />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;