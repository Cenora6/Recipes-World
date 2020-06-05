import axios from 'axios';
import React, {useState} from 'react';
const MEALS_URL = "http://localhost:3001/meals"

function PhotoSection() {
    const [recipes, setRecipes] = useState<string[]>([]);

    let recipesData: any[] = [];
    axios
        .get<any>
        (MEALS_URL)
        .then(response => {
            setRecipes(response.data);
        })
        .catch(err => {
            console.log(err.message)
        })


    return (
        <div className='home__photo' id='photo'>
            <h2>Popular <span className='title-decorate'>Dishes</span></h2>
            {
                recipes.map( (meal: any, index: number) => {
                    return (
                        <div key={index} className='home__photo__single' onClick={() => console.log(meal.idMeal)}>
                            <img src={meal.strMealThumb} alt={`dish${index}`}/>
                            <span>{meal.strMeal}</span>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default PhotoSection;
