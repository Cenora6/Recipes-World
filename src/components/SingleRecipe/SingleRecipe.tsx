import React, {useEffect, useState} from 'react';
import {searchRecipeById} from "../../api/getRecipes";
import line from './../../assets/line.png';
import ReactPlayer from 'react-player'
import Back from "../Navigations/Back";
import ScrollUp from "../Navigations/ScrollUp";
import {Footer} from "../Navigations/Footer";

function SingleRecipe(props: any) {
    const [singleRecipe, setSingleRecipe] = useState<string[]>([]);

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
                    singleRecipe.map( (meal: any, index: number) => {
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
                                        />
                                        }
                                    </div>

                                    <form>
                                        {meal.strInstructions.split('\n').map((text: string, i: number) => {
                                            if (text.length > 1) {
                                                return (
                                                    <div className='singleRecipe__details__text__steps flex-box'>
                                                        <input type='checkbox' name='instructions' id={`step${i}`}/>
                                                        <label htmlFor={`step${i}`} key={i}>{text}</label>
                                                    </div>
                                                )
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
                                        {ingredientsNumber.map( (ingredient, i) => {
                                            return (
                                                meal[`strIngredient${i}`] !== '' && meal[`strMeasure${i}`] !== null ) &&
                                                <li key={i}>{meal[`strIngredient${i}`]}<span>{meal[`strMeasure${i}`]}</span></li>
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
