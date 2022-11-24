import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Contactsbar from '../components/Contactsbar'
import BoxesPage from '../components/three/Torus'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ace C.</title>
      </Head>
      <BoxesPage />

      {/* <NavBar/> */}

      <main className={styles.main}>
      {/* <NavBar /> */}

      
        <h1 className={styles.title}>Hey there.</h1>
        <Contactsbar />
        
      </main>


      
    </div>
  )
}
