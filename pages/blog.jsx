import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Blog.module.css'
import NavBar from '../components/NavBar'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'

import { sortByDate } from '../utils'

export default function About({ posts }) {

    return (
        <div>
            <Head>
                <title>blog</title>
            </Head>
            <div style={{height: "10vh"}}></div>
            <h1 style={{marginLeft: "10%"}}>blog</h1>
            <h3 style={{marginLeft: "10%"}}>where I ramble about some cool math and cs concepts that I&apos;ve found, plus some humanities things</h3>
            <br />
            <div className={styles.posts}>
                {posts.map((post, index) => (
                    <Post post={post} key={index}/>
                )) }
            </div>
            <div style={{height: "10vh"}}></div>
        </div>
    )
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join('blog-posts'))
    
    const posts = files.map(file => {
        const slug = file.replace('.md', '')

        const mdMeta = fs.readFileSync(path.join('blog-posts', file), 'utf-8')
        const {data} = matter(mdMeta)
        
        return {
            slug, 
            data
        }
    })

    return {
        props: {
            posts: posts.sort(sortByDate)
        }
    }
}