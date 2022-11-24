import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Creations.module.css'
import NavBar from '../components/NavBar'
import CreationThumbnail from '../components/CreationThumbnail'
import BoxesPage from '../components/three/Torus'

export default function About() {
    return (
        <div>
            <Head>
                <title>creations</title>
            </Head>
            
            {/* add sketches, photography, writeups, paper folding*/}
            <div style={{height: "10vh"}}></div>

            <div className={styles.container}>
                <CreationThumbnail type="projects" />
                <CreationThumbnail type="handouts" />
                <CreationThumbnail type="photos" />
                <CreationThumbnail type="art" />
                
            </div>

            <div style={{height: "10vh"}}></div>
        </div>
    )
}