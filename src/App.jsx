import { useState,useEffect } from 'react'
import Header from './components/Header'
import RecipeCard from './components/RecipeCard'
import styles from './style.module.css'


function App() {
  const [drinks, setDrinks] = useState([])
  let temp = []



  function handleFormSubmit(input) {
    fetch(`https:www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`, { method: "GET" })
      .then(response => response.json())
      .then(data => {
        setDrinks(data.drinks)
      })
    // .then(data => console.log(data.drinks))
  }



  return (
    <>
      <Header onFormSubmit={handleFormSubmit} />

      <div className={styles.container}>
        <ul className={styles.list}>
            {drinks.map((drink, index) => <li key={index}><RecipeCard drinkId={drink.idDrink} /></li>)}
        </ul>
    </div>

    </>
  )
}

export default App
