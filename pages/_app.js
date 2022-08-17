import Head from "next/head";
import './../styles/index.scss';
import AppState from "../context/appState";

function Rost({ Component, pageProps }) {
    return (
        <AppState>
            <Head>
                <title>Rost78 / Jhonattan Tunales</title>
            </Head>
            <Component
                {...pageProps}
            />
        </AppState>
    )
}

export default Rost;