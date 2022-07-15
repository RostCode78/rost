import Head from "next/head";
import './../styles/index.scss'

function Rost({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Rost / Jhonattan Tunales</title>
            </Head>
            <Component
                {...pageProps}
            />
        </>
    )
}

export default Rost;