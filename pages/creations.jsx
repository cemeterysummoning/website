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
                <CreationThumbnail type="/creations/projects" name="projects" />
                <CreationThumbnail type="/creations/notes" name="notes" />
                <CreationThumbnail type="https://drive.google.com/drive/folders/1a63-tasghTbbVWaHB7gKIZ5WhYEDLPjU?usp=sharing" name="photos"/>
                <CreationThumbnail type="https://drive.google.com/drive/folders/1IhjJT39Yes32mFmDbWF3VV4T5UshebKW?usp=sharing" name="origami"/>
                
            </div>

            <div style={{height: "10vh"}}></div>
        </div>
    )
}