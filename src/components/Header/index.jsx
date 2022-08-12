import styles from './style.module.css'
import { useState } from 'react'


export default function Header(props){
    const [input,setInput] = useState("")

    function handleInputChange(e){
        setInput(e.target.value)
    }

    function handleFormSubmit(e){
        e.preventDefault()
        props.onFormSubmit(input)
    }

    return(
        <header className={styles.header}>
            <h1 className={styles.title}>Drinks React</h1>
            <form className={styles.form} onSubmit={handleFormSubmit}>
                <input className={styles.input} type="text" name="search" id="search" onChange={handleInputChange} value={input}/>
                <input className={styles.submit_btn}type="submit" value="Search" />
            </form>
        </header>
    )
}