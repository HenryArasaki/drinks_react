import style from './style.module.css'
import { useState } from 'react'

export default function Nav(){
    const [input,setInput] = useState("")

    function handleInputChange(e){
        setInput(e.target.value)
    }

    return(
        <nav>
            <ul>
                <li><a className={style.link} href="">link</a></li>
                <li><a className={style.link} href="">link</a></li>
                <li><a className={style.link} href="">link</a></li>
            </ul>
            <form action="">
                <input type="text" name="search" id="search" onChange={handleInputChange} value={input}/>
            </form>
        </nav>
    )
}