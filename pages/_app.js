import '../styles/globals.css'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>

    </Head>
    <NavBar />
    <Component {...pageProps} />
    <footer className={styles.footer}>
        Yuna Ace Chun, 2023
    </footer>
  </>
}

export default MyApp
