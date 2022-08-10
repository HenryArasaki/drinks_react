import { useEffect, useState } from "react"
import styles from './style.module.css'
export default function RecipeCard(props) {
    const [drink, setDrink] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https:www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.drinkId}`, { method: "GET" })
            .then(response => response.json())
            .then(data => setDrink(data.drinks[0]))
            // .then(data => console.log(data))
            .finally(() => setIsLoading(false))

    }, [drink])

    function handleCardClick(){
        //TODO link
    }


    if (isLoading) {
        return (<div className={styles.card}>
            <p>Loading</p>
            <img src="../../assets/loading_img.svg" alt="loading" />
        </div>)
    }
    return (
        <div className={styles.card} onClick={handleCardClick}>
            <h3 className={styles.titulo}>{drink.strDrink}</h3>
            <img className={styles.thumb} src={drink.strDrinkThumb} alt="drink thumb" />
        </div>)


}