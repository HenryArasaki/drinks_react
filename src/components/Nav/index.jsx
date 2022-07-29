import style from './style.module.css'

export default function Nav(){

    return(
        <nav>
            <ul>
                <li><a className={style.link} href="">link</a></li>
                <li><a className={style.link} href="">link</a></li>
                <li><a className={style.link} href="">link</a></li>
            </ul>
        </nav>
    )
}