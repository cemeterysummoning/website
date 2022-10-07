import '../styles/globals.css'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return <>
    <NavBar />
    <Component {...pageProps} />
    <footer className={styles.footer}>
        Yuna Ace Chun, 2022
    </footer>
  </>
}

export default MyApp
