import React, {useState, useRef} from 'react';
import {getRecipes} from "../api/getRecipes";
import Back from "./Back";
import {NavLink} from "react-router-dom";
import ScrollUp from "./ScrollUp";

const Names = () => {
    const [recipeNames, setRecipeNames] = useState<string[]>([]);
    const [fade, setFade] = useState<boolean>(false);

    const nameInputRef = useRef<HTMLInputElement>(null);

    const handleRecipesWriting = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = nameInputRef.current!.value;
        setFade(false);

        console.log(enteredText.length)

        if (enteredText.length === 0) {
            setTimeout( () => {
                setRecipeNames([]);
            }, 500);
        } else {
            setTimeout( () => {
                getRecipes(setRecipeNames, enteredText);
            }, 500);
        }

        setTimeout( () => {
            setFade(true);
        }, 700)
    }

    return (
        <>
            <section className='name base-page'>
                <Back/>
                <h2 className="scroll-animation">Recipes' <span className='title-decorate'>Names</span> </h2>

                <input className="ingredients__buttons__input" placeholder="Start writing..." type='text'
                       id='ingredient-input' ref={nameInputRef} onChange={handleRecipesWriting}/>

                {recipeNames ? recipeNames.length > 0 &&
                    <div className='photo__section category-recipes'>
                        {recipeNames.map((meal: any, index: number) => {
                            return (
                                <NavLink to={`/recipe/${meal.idMeal}`} className={`photo__section__single ${fade ? 'shown' : 'hidden'}`} key={index}
                                         onAnimationEnd={() => setFade(false)}>
                                    <div>
                                        <img src={meal.strMealThumb} alt={`dish${index}`}/>
                                        <span>{meal.strMeal}</span>
                                    </div>
                                </NavLink>
                            )
                        })
                        }
                    </div>
                    :
                    <div className='photo__section category-recipes'>
                        <p className={`${fade ? 'shown' : 'hidden'}`}>No results...</p>
                    </div>

                }
            </section>
            <ScrollUp/>
        </>
    );
}

export default Names;
