import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Icon = ({ path, href }) => {
    return (
        <a href={href}>
            <Image src={path} width={40} height={40}/>
        </a>
    )
}

export default Icon;