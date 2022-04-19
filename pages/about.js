import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function About() {
    return (
        <Layout>
            <Head>
                <title>Hakkimizda - {siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Hakkimizda</h2>
        
            </section>
        </Layout>
    )
}