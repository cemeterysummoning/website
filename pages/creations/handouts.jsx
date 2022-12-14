import Head from "next/head"
import WriteupThumb from "../../components/WriteupThumb"
import styles from "../../styles/Creations.module.css"

export default function Projects() {
    return (
        <div>
            <Head>
                <title>handouts</title>
            </Head>

            <div style={{height: "10vh"}}></div>
            <h1 style={{marginLeft: "10%"}}>handouts</h1>
            <h3 style={{marginLeft: "10%"}}>a repository of lecture notes and writeups</h3>
            <br />

            <div className={styles.position}>

                <WriteupThumb name="Single Variable Calculus" 
                    description="Lecture notes taken in my 10th grade year on single variable calculus"
                    path="../../files/Analysis_1.pdf" style={styles.position}/>

                <WriteupThumb name="Variational Quantum Classifier"
                    description="Writeup on the VQC algorithm, part of the field of Quantum Machine Learning"
                    path="../../files/VQC.pdf" />

                <WriteupThumb name="Quantum Random Number Generator"
                    description="An idea on random number generation using quantum states, in addition to a discussion of the generalized W state"
                    path="../../files/qrng.pdf" />

                <WriteupThumb name="Quantum Computing" 
                    description="Lecture notes taken at the Quantum Software division of Beaver Works Summer Institute, 2022"
                    path="../../files/quantum.pdf"/>

                <div style={{height: "10vh"}}></div>

            </div>

        </div>
    )
}