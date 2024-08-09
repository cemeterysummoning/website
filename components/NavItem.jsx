import Link from 'next/link';
import styles from '../styles/Navbar.module.css'

const NavItem = ({ text, href }) => {
    return (
        <div className={styles.navlink}>
            <Link href={href}>

                {text}

            </Link>
        </div>
    );
}

export default NavItem;