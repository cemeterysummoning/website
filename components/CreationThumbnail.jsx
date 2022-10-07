import Link from 'next/link';
import styles from '../styles/Creations.module.css'

const CreationThumbnail = ({ type }) => (
    <Link href={`/creations/${type}`}>
        <div className={styles.thumbnail}>
            {type}
        </div>
    </Link>
)

export default CreationThumbnail;