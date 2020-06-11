import React, {useEffect, useState} from 'react';
import {getRecipeFromArea} from "../api/getRecipes";
import {Link} from "react-router-dom";
function SingleArea({ match }: any) {
    const id = match.params.id;
    const [areaRecipes, setAreaRecipes] = useState<string[]>([]);

    useEffect(() => {
        getRecipeFromArea(setAreaRecipes, id);
    });

    return (
        <div className='photo__section single-area'>
            <h2>Dishes From <span className='title-decorate'>{id}</span></h2>
            {areaRecipes.map( (meal: any, index: number) => {
                    return (
                        <Link to={`/recipe/${meal.idMeal}`} className='photo__section__single single-dish' key={index}>
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

export default SingleArea;
