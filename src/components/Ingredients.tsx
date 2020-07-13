import React, {useState, useEffect, useRef} from 'react';
import {getAllIngredients, getIngredientRecipes} from "../api/getRecipes";
import Back from "./Back";
import { Link } from "react-scroll";
import {NavLink} from "react-router-dom";
import ScrollUp from "./ScrollUp";
import {Footer} from "./Footer";

const Ingredients = () => {
    const [ingredients, setIngredients] = useState<any>([]);
    const [ingredientInput, setIngredientInput] = useState<string>();
    const [ingredientRecipe, setIngredientRecipe] = useState<string[]>([]);
    const [ingredientName, setIngredientName] = useState<string>();
    const [fade, setFade] = useState<boolean>(false);
    const [fade2, setFade2] = useState<boolean>(false);

    useEffect(() => {
        getAllIngredients(setIngredients);
    }, []);

    const handleSingleIngredient = (ingredient: string) => {
        setFade(false);
        setFade2(false);
        ingredientInputRef.current!.value = '';
        setTimeout( () => {
            setIngredientInput('');
        }, 700)
        const ingredientDash = ingredient.replace(/\s+/g, '_').toLowerCase();
        console.log(ingredientDash)
        setIngredientName(ingredient);
        setTimeout( () => {
            getIngredientRecipes(setIngredientRecipe, ingredient);
        }, 700)
        setTimeout( () => {
            setFade2(true);
        }, 800)
    }

    const ingredientInputRef = useRef<HTMLInputElement>(null);
    const handleIngredientWriting = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = ingredientInputRef.current!.value;
        setFade(false);
        setTimeout( () => {
            setIngredientInput(enteredText);
        }, 500);
        setTimeout( () => {
            setFade(true);
        }, 600)
    }

    const handleOnFocus = () => {
        setIngredientInput('');
    }

    let chosenIngredients = [];
    for (let i = 0; i < ingredients.length; i++) {
        if (ingredientInput && ingredients[i].strIngredient.toLowerCase().indexOf(ingredientInput) > 0) {
            if(chosenIngredients.length < 5) {
                chosenIngredients.push(ingredients[i].strIngredient)
            }
        }
    }

    return (
        <div className='page-container'>
            <section className='ingredients base-page'>
                <Back/>
                <h2 className="scroll-animation">Recipes' <span className='title-decorate'>Ingredients</span> </h2>

                <input className="ingredients__buttons__input" placeholder="Start writing..." type='text'
                       id='ingredient-input' ref={ingredientInputRef} onFocus={handleOnFocus} onChange={handleIngredientWriting}/>
                <div className='ingredients__buttons'>
                    {chosenIngredients.length > 0 ? chosenIngredients.map( (ingredient: any, id: number) => {
                            return (
                                <Link activeClass="active" to="ingredient" spy={true} smooth={true} duration={1000}
                                      onClick={() => handleSingleIngredient(ingredient)} key={id}>
                                    <div className='ingredients__buttons__single buttons' style={{opacity:`${fade ? '.5' : '0'}`}}>
                                        <span>{ingredient}</span>
                                    </div>
                                </Link>
                            )
                        }) :
                        <div className='ingredients__buttons__single buttons' style={{opacity:`${fade ? '.5' : '0'}`}}>
                            <span>No results...</span>
                        </div>}
                </div>
            </section>

            <section className='photo__section category-recipes'>
                {ingredientRecipe ? ingredientRecipe.length > 0 &&
                    <>
                        <h2>Dishes With <span className='title-decorate' id='ingredient'>{ingredientName}</span></h2>
                        {ingredientRecipe.map( (meal: any, index: number) => {
                            return (
                                <NavLink to={`/recipe/${meal.idMeal}`} className={`photo__section__single ${fade2 ? 'shown' : 'hidden'}`} key={index}
                                         onAnimationEnd={() => setFade2(false)}>
                                    <div className='photo__section__single__box'>
                                        <img src={meal.strMealThumb} alt={`dish${index}`}/>
                                        <span>{meal.strMeal}</span>
                                    </div>
                                </NavLink>
                            )
                        })
                        }
                    </>
                    :
                    <>
                        <h2>Dishes With <span className='title-decorate' id='ingredient'>{ingredientName}</span></h2>
                        <p className={`${fade2 ? 'shown' : 'hidden'}`}>No results...</p>
                    </>
                }
            </section>
            <ScrollUp/>
            <Footer/>
        </div>
    );
}

export default Ingredients;
