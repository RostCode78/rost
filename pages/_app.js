import Head from "next/head";
import './../styles/index.scss';
import AppState from "../context/appState";

function Rost({ Component, pageProps }) {
    return (
        <AppState>
            <Head>
                <title>Rost78 / Jhonattan Tunales</title>
                <link rel="icon" type="image/x-icon" href="/assets/favicon.png"/>
            </Head>
            <Component
                {...pageProps}
            />
        </AppState>
    )
}

export default Rost;