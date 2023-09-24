import { useEffect, useState } from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [httpError, setHttpError] = useState()

    useEffect(() => {
      const fetchMeals = async () => {
        const response = await fetch("https://sapient-pen-311710-default-rtdb.firebaseio.com/meals.json")

        if(!response.ok)
          throw new Error("Error")

        const json = await response.json()
        const loadedMeals = []

        for (const key in json)
          loadedMeals.push({
            id: key,
            name: json[key].name,
            description: json[key].description,
            price: json[key].price
          })
        setMeals(loadedMeals)
        setIsLoading(false)
      }
      // if we use try catch here it won't give the desicred result beacuase fetchMeals is async function. That funtion returns a promise and we if throw an error inside a promise it will cause the promise to reject, basically no output, so workaround is to use traditional then catch block
        fetchMeals().catch(error => {
          setIsLoading(false)
          setHttpError(error.message)
        })
    }, [])

    if(isLoading)
      return <section className={classes.mealsLoading}>
              <p>Loading</p>
            </section>
    
    if(httpError)
      return <section className={classes.mealsLoading}>
              <p>{httpError}</p>
            </section>
    
    const mealsList = meals.map(meal => <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>)
    return <section className={classes.meals}>
        <Card>
        <ul>
            {mealsList}
        </ul>
        </Card>
        </section>
}

export default AvailableMeals
