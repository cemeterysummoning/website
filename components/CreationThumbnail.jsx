import Link from 'next/link';
import styles from '../styles/Creations.module.css'

const CreationThumbnail = ({ type, name }) => (
    <Link href={`${type}`} legacyBehavior>
        <div className={styles.thumbnail}>
            {name}
        </div>
    </Link>
)

export default CreationThumbnail;