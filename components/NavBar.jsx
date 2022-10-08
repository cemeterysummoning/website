import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import NavItem from './NavItem'
import styles from '../styles/Navbar.module.css'
// ⋀

const NavBar = () => {
    const PAGE_LIST = [
        {text: '/\\', href: '/'},
        {text: 'about', href: '/about'},
        {text: 'blog', href: '/blog'},
        {text: 'creations', href: '/creations'}
    ]
    return (
        <div className={styles.container}>
            {PAGE_LIST.map((name, index) => (
                <NavItem text={name.text} href={name.href} key={index}/>
            ))}
        </div>
    )
}

export default NavBar;