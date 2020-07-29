import React, {useEffect, useState} from 'react';
import {searchRecipeById} from "../../api/getRecipes";
import line from './../../assets/line.png';
import ReactPlayer from 'react-player'
import Back from "../Navigations/Back";
import ScrollUp from "../Navigations/ScrollUp";
import {Footer} from "../Navigations/Footer";

type RecipeProps = {
    match: {params: {id: string}}
}

interface SingleRecipe {
    idMeal: string,
    strArea: string,
    strCategory: string,
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,
    strIngredient5: string,
    strIngredient6: string,
    strIngredient7: string,
    strIngredient8: string,
    strIngredient9: string,
    strIngredient10: string,
    strIngredient11: string,
    strIngredient12: string,
    strIngredient13: string,
    strIngredient14: string,
    strIngredient15: string,
    strIngredient16: string,
    strIngredient17: string,
    strIngredient18: string,
    strIngredient19: string,
    strIngredient20: string,
    strInstructions: string,
    strMeal: string,
    strMealThumb: string,
    strMeasure1: string,
    strMeasure2: string,
    strMeasure3: string,
    strMeasure4: string,
    strMeasure5: string,
    strMeasure6: string,
    strMeasure7: string,
    strMeasure8: string,
    strMeasure9: string,
    strMeasure10: string,
    strMeasure11: string,
    strMeasure12: string,
    strMeasure13: string,
    strMeasure14: string,
    strMeasure15: string,
    strMeasure16: string,
    strMeasure17: string,
    strMeasure18: string,
    strMeasure19: string,
    strMeasure20: string,
    strSource: string,
    strTags?: string,
    strYoutube: string,
    [i: string]: string | undefined
}

function SingleRecipe(props: RecipeProps) {
    const [singleRecipe, setSingleRecipe] = useState<Array<SingleRecipe>>([]);

    const { match } = props;
    let {id} = match.params;

    useEffect(() => {
        window.scrollTo(0, 0)
        searchRecipeById(id, setSingleRecipe);
    }, [id]);

    const ingredientsNumber: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    return (
        <>
            <section className='singleRecipe'>
                {
                    singleRecipe.map( (meal: SingleRecipe, index: number) => {
                        return (
                            <div className='singleRecipe__details' key={index}>
                                <Back/>
                                <div className='singleRecipe__details__text'>
                                    <div className='singleRecipe__details__text__category'>
                                        <span className='area'>{meal.strArea}</span>
                                        <span className='category'>{meal.strCategory}</span>
                                    </div>
                                    <h3>{meal.strMeal}</h3>
                                    <img src={line} alt='line'/>

                                    <div className='singleRecipe__details__text__video flex-box'>
                                        {meal.strYoutube &&
                                        <ReactPlayer
                                            url={meal.strYoutube}
                                            controls={true}
                                            config={{
                                                youtube: {
                                                    embedOptions: {
                                                        host: 'https://www.youtube-nocookie.com'
                                                    }
                                                }
                                            }}
                                        />
                                        }
                                    </div>

                                    <form>
                                        {meal.strInstructions.split('\n').map((text: string, i: number) => {
                                            if (text.length > 1) {
                                                return (
                                                    <div className='singleRecipe__details__text__steps flex-box' key={i}>
                                                        <input type='checkbox' name='instructions' id={`step${i}`}/>
                                                        <label htmlFor={`step${i}`} key={i}>{text}</label>
                                                    </div>
                                                )
                                            } else {
                                                return null
                                            }
                                        })}
                                    </form>

                                    <div className='singleRecipe__details__text__tags'>
                                        {meal.strTags && meal.strTags.split(',').map((text: string, i: number) => {
                                            return (
                                                text.length !== 0 && <span className='tags' key={i}># {text}</span>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className='singleRecipe__details__photo'>
                                    <img src={meal.strMealThumb} alt={meal.strMeal} className='photo'/>
                                    <ul>
                                        <li>Ingredients</li>
                                        {ingredientsNumber.map( (ingredient: number, i: number) => {
                                            const strIngredient = 'strIngredient' + i;
                                            const strMeasure = 'strMeasure' + i;
                                            return (
                                                meal[strIngredient] !== '' && meal[strMeasure] !== null ) &&
                                                <li key={i}>
                                                    {meal[`strIngredient${i}`]}
                                                    <span>{meal[`strMeasure${i}`]}</span>
                                                </li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
            <ScrollUp/>
            <Footer/>
        </>
    );
}

export default SingleRecipe;
