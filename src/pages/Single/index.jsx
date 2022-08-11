import styles from './style.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import svg from "../../assets/loading_img.svg"

export default function Single() {
    const params = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [recipe, setRecipe] = useState({})
    const [ingredients, setIngredients] = useState([])



    useEffect(() => {
        fetch(`https:www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`, { method: "GET" })
            .then(response => response.json())
            .then(data => setRecipe(data.drinks[0]))
            .finally(() => setIsLoading(false))
    }, [])

    useEffect(()=>{
        if(recipe){
            {for(let i=0; i<15;i++){
                if(recipe["strIngredient" + i])
                setIngredients(prev =>[...prev, recipe["strIngredient" + i]])
            }}
        }
    },[recipe])

    return (<>
        {isLoading ? <img src={svg} className={styles.loading_img} /> :
            <div className={styles.container}>
                <div className={styles.name_and_img}>
                    <h2 className={styles.title}>{recipe.strDrink}</h2>
                    <img src={recipe.strDrinkThumb} />
                </div>
                <div className={styles.instructions}>
                    <h3>Ingredients</h3>
                    <ul>
                        {ingredients.map((ingredient, index)=><li key={index}>{ingredient}</li>)}
                    </ul>
                </div>
            </div>
        }
    </>)
}