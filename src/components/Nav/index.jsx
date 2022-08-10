import styles from './style.module.css'

import { useState } from 'react'

export default function Nav(){


    return(
        <nav className={styles.navbar}>
            <ul className={styles.ul}>
                <li><a className={styles.link} href="">link</a></li>
                <li><a className={styles.link} href="">link</a></li>
                <li><a className={styles.link} href="">link</a></li>
            </ul>
        </nav>
    )
}