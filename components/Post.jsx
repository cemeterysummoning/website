import Link from 'next/link'
import styles from '../styles/Blog.module.css'

const Post = ({ post }) => {
    return (
        <div>
            <hr />
            {/* <br /> */}
            <div className={styles.postcard}>
                <h3>{post.data.title}</h3>
                <h5>{post.data.date}</h5>
                <p>{post.data.excerpt}</p>
                <br />
                <Link href={`/blog/${post.slug}`} className={styles.link}>
                    Continue{'→'}
                </Link>
            </div>
            <br />  
        </div>
    );
}

export default Post;