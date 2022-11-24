import Head from 'next/head'
import ProjectThumbnail from '../../components/ProjectThumbnail'
import ProjectGrid from '../../components/ProjectGrid'

export default function Projects() {
    return (
        <div>
            <Head>
                <title>projects</title>
            </Head>
            <div style={{height: "10vh"}}></div>
            <h1 style={{marginLeft: "10%"}}>projects</h1>
            <br />

            <ProjectGrid />

        </div>
    )
}