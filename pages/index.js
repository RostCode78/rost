import Layout from './../components/Layout';
import Header from "../components/Index/Header/Header";
import About from "../components/Index/About/About";
import Skills from '../components/Index/Skills/Skills';
import { app } from './../firebaseConfig';

const index = () => {
    return (
        <Layout>
            <Header/>
            <About/>
            <Skills/>
        </Layout>
    )
}

export default index