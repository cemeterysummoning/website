import Head from "next/head"
import WriteupThumb from "../../components/WriteupThumb"
import styles from "../../styles/Creations.module.css"

export default function Projects() {
    return (
        <div>
            <Head>
                <title>notes</title>
            </Head>

            <div style={{height: "10vh"}}></div>
            <h1 style={{marginLeft: "10%"}}>notes</h1>
            <h3 style={{marginLeft: "10%"}}>a repository of lecture notes and writeups</h3>
            <br />

            <div className={styles.position}>
                <WriteupThumb name="Electricity and Magnetism"
                        description="Class notes for 8.022"
                        path="../../files/8.022.pdf" />
                <WriteupThumb name="Linear Algebra with Optimization"
                    description="Class notes for 18.C06"
                    path="../../files/18.c06.pdf" />
                <WriteupThumb name="Mechanics"
                    description="Notes taken for Physics C: Mechanics"
                    path="../../files/ap_phys.pdf" />
                <WriteupThumb name="Multivariable Calculus"
                    description="Class lecture notes taken for Analysis 2A, Multivariable Calculus"
                    path="../../files/Analysis_2A.pdf" />

                <WriteupThumb name="Differential Equations"
                    description="Class lecture notes taken for Ordinary Differential Equations"
                    path="../../files/diffeq.pdf" />

                <WriteupThumb name="Applied Statistics"
                    description="Class lecture notes taken for Magnet Applied Statistics"
                    path="../../files/Statistics.pdf" />

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