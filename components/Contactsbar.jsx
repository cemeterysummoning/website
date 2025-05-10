import styles from '../styles/Home.module.css'
import githubLogo from './../public/github.svg'
import linkedinLogo from './../public/linkedin.svg'
import Icon from './Icon'

const Contactsbar = () => {
    const LINKS = [
        {path: './../public/github.svg', href: 'https://github.com/cemeterysummoning' }
    ] // add linkedin, mail, discord

    return (
        <div className={styles.subtitle}>
            {/* {LINKS.map((link) => {
                <Icon path={link.path} href={link.href}/>
            })} */}
            <Icon path={githubLogo} href="https://github.com/cemeterysummoning"/>
            <Icon path={linkedinLogo} href="https://www.linkedin.com/in/ace-chun-20232720a/"/>
        </div>
    )
}

export default Contactsbar