import React, {useState} from 'react';
import {searchRecipeById} from "../api/getRecipes";
import note from './../assets/note.png';
import line from './../assets/line.png';

function SingleRecipe(props: any) {
    const [single, setSingle] = useState<string[]>([]);

    const { match } = props;
    let {id} = match.params;

    searchRecipeById(id, setSingle);

    return (
        <section className='single'>
            {
                single.map( (meal: any, index: number) => {
                    return (
                        <div className='single__details' key={index}>

                            <div className='single__details__text'>
                                <div className='single__details__text__tags'>
                                    <span className='area'>{meal.strArea}</span>
                                    <span className='category'>{meal.strCategory}</span>
                                    {/*<span className='tags'>{meal.strTags}</span>*/}
                                </div>
                                <h3>{meal.strMeal}</h3>
                                <img src={line} alt='line'/>
                                <p>{meal.strInstructions}</p>
                            </div>

                            <div className='single__details__photo'>
                                <img src={meal.strMealThumb} alt={meal.strMeal} className='photo'/>
                                <img src={note} alt='post-it' className='note'/>
                                <ul>
                                    <li>Ingredients</li>
                                    <li>{meal.strIngredient1} <span>{meal.strMeasure1} </span></li>
                                    <li>{meal.strIngredient2} <span>{meal.strMeasure2} </span></li>
                                    <li>{meal.strIngredient3} <span>{meal.strMeasure3} </span></li>
                                    <li>{meal.strIngredient4} <span>{meal.strMeasure4} </span></li>
                                    <li>{meal.strIngredient5} <span>{meal.strMeasure5} </span></li>
                                    <li>{meal.strIngredient6} <span>{meal.strMeasure6} </span></li>
                                    <li>{meal.strIngredient7} <span>{meal.strMeasure7} </span></li>
                                    <li>{meal.strIngredient8} <span>{meal.strMeasure8} </span></li>
                                    <li>{meal.strIngredient9} <span>{meal.strMeasure9} </span></li>
                                    <li>{meal.strIngredient10} <span>{meal.strMeasure10} </span></li>
                                    <li>{meal.strIngredient11} <span>{meal.strMeasure11} </span></li>
                                    <li>{meal.strIngredient12} <span>{meal.strMeasure12} </span></li>
                                    <li>{meal.strIngredient13} <span>{meal.strMeasure13} </span></li>
                                    <li>{meal.strIngredient14} <span>{meal.strMeasure14} </span></li>
                                    <li>{meal.strIngredient15} <span>{meal.strMeasure15} </span></li>
                                    <li>{meal.strIngredient16} <span>{meal.strMeasure16} </span></li>
                                    <li>{meal.strIngredient17} <span>{meal.strMeasure17} </span></li>
                                    <li>{meal.strIngredient18} <span>{meal.strMeasure18} </span></li>
                                    <li>{meal.strIngredient19} <span>{meal.strMeasure19} </span></li>
                                    <li>{meal.strIngredient20} <span>{meal.strMeasure20} </span></li>
                                </ul>
                            </div>
                        </div>
                    )
                })

            }
        </section>
    );
}

export default SingleRecipe;
