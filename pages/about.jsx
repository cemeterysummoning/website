import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import aboutStyles from '../styles/About.module.css'
import NavBar from '../components/NavBar'
import Typewriter from 'typewriter-effect'
import Timeline from '../components/Timeline'
import BoxesPage from '../components/three/Toruswithoutorbit'

export default function About() {
    return (
        <div>
            <Head>
                <title>about</title>
            </Head>
            {/* <NavBar /> */}
            <BoxesPage style={{position: 'fixed'}}/>
            <main className={styles.main}>
                <div className={aboutStyles.main}>
                    <h1 className={styles.title}>I'm Ace Chun. </h1>
                    <h4 className={styles.subtext}>I'm a high schooler passionate about {' '}
                        <div style={{fontSize: '1.5rem', verticalAlign: 'middle', display: 'inline-block', marginBottom: '2px'}}>
                            <Typewriter 
                                options={{
                                    strings: ['fractals', 'quantum computing', 'quizbowl', 'generative art', 'beautiful math', 'origami', 'photography', 'fine art'],
                                    autoStart: true,
                                    loop: true, 
                                    cursor: '_'
                                }}
                            />
                        </div>
                    </h4> 
                </div>
                <div className={aboutStyles.position}> 
                {/* <div style={{height: "70vh"}}> */}
                    <div    >
                        <h1>Welcome to my website.</h1>
                        <p>
                            I'm a student in the math, science, and computer science magnet at Montgomery Blair 
                            High School. My main interests lie in computer science, quantum computing, and generative art.
                        </p>
                        <p>
                        In my spare time, I like to participate in quizbowl/history bowl tournaments, play the violin, 
                            take photos, listen to a wide variety of music, and write about pretty much anything I find interesting.
                        </p>
                    </div>
                    
                </div>
                
                <Timeline className={aboutStyles.position}/>
                
                <div style={{height: '25vh'}}></div>

                <div className={aboutStyles.position}>
                    <h1>Education</h1>

                        <ul style={{lineHeight: '5vh'}}>
                            <li>2020 - 2024: Magnet STEM Program at Montgomery Blair High</li>
                            <li>2022: MIT Beaver Works, Quantum Software</li>
                            <li>2017 - 2020: Magnet Humanities Program at Eastern Middle School</li>
                            <li>2022 - 2023: Member of American Philharmonic Youth Orchestras </li>
                            <li>2016 - 2022: Member of Maryland Classic Youth Orchestras</li>
                        </ul>

                    
                    
                </div>
                
                <div className={styles.hobbies}>
                    
                </div>

            </main>

           
        </div>
    )
}