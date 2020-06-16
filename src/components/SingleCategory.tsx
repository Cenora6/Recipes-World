import React, {useEffect, useState} from 'react';
import {getRecipesFromCategory} from "../api/getRecipes";
import {Link} from "react-router-dom";
import Loading from "./Loading";

function SingleCategory({ match }: any) {
    const id = match.params.id;
    const [categoryRecipes, setCategoryRecipes] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        // setLoading(true);
        getRecipesFromCategory(setCategoryRecipes, id, setLoading);
    }, [match]);

    // console.log(loading)

    return (
        <div className='photo__section category-recipes'>
            <h2>Dishes From <span className='title-decorate'>{id}</span></h2>


            {loading && <Loading/> }
            {categoryRecipes.map((meal: any, index: number) => {
                return (
                    <Link to={`/recipe/${meal.idMeal}`} className={`photo__section__single ${loading ? 'hide' : 'show'}`} key={index}>
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

export default SingleCategory;
