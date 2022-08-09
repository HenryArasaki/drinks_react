import styles from './style.module.css'
import React, { useEffect, useState } from 'react'
import RecipeCard from '../RecipeCard'

export default function RecipesList() {
    const [randomDrinks, setRandomDrinks] = useState([])


    return (<div className={styles.container}>
        <ul className={styles.list}>
            <li><RecipeCard /></li>
            <li><RecipeCard /></li>
            <li><RecipeCard /></li>
            <li><RecipeCard /></li>
            <li><RecipeCard /></li>
            <li><RecipeCard /></li>
        </ul>
    </div>

    )


}