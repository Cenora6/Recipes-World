import axios from 'axios';
import React, {useState} from 'react';
import {Link} from "react-router-dom";
const MEALS_URL = "http://localhost:3001/meals"

function PhotoSection() {
    const [recipes, setRecipes] = useState<string[]>([]);

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
                        <Link to={`/recipe/${meal.idMeal}`} className='home__photo__single' key={index}>
                            <div>
                                <img src={meal.strMealThumb} alt={`dish${index}`}/>
                                <span>{meal.strMeal}</span>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    );
}

export default PhotoSection;
