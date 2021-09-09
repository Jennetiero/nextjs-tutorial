import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Navbar from "../components/navbar";
import AboutPage from "../components/aboutPage";
import ContactsPage from "../components/contactsPage";
import Script from 'next/script'

export default function Home() {
    return (
        <>
            <Head>
            <title>harbor</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <script />
            </Head>

        

            <Navbar />
            <AboutPage />
            <ContactsPage/>
            <section className={utilStyles.headingMd}></section>
            
        </>
    );
}
