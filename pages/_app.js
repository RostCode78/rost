import Head from "next/head";
import './../styles/index.scss';
import AppState from "../context/appState";

function Rost({ Component, pageProps }) {
    return (
        <AppState>
            <Head>
                <title>Rost78 / Jhonattan Tunales</title>
                <link rel="icon" type="image/x-icon" href="/assets/favicon.png"/>
                <meta property="og:title" content="Rost78 / Jhonattan Tunales" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.rost78.com/" />
                <meta property="og:image" content="https://i.imgur.com/RE5syC5.png" />
                <meta property="og:site_name" content="rost78" />
                <meta property="og:locale" content="es_MX" />
                <meta property="og:locale:alternate" content="es_MX" />
                <meta property="og:description" content="Mi nombre es Jhonattan tunales. Me gusta hacer diseño web y luego, llevarlo a código, en mis tiempos libres, me gusta jugar Halo y leer a Tolkien." />
            </Head>
            <Component
                {...pageProps}
            />
        </AppState>
    )
}

export default Rost;