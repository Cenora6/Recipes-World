import React, {useState, useEffect, useRef} from 'react';
import {getAllIngredients, getIngredientRecipes} from "../../api/getRecipes";
import Back from "../Navigations/Back";
import { Link } from "react-scroll";
import {NavLink} from "react-router-dom";
import ScrollUp from "../Navigations/ScrollUp";
import {Footer} from "../Navigations/Footer";
import {IngredientsData, SingleMealData} from "./search.model";

const Ingredients = () => {
    const [ingredients, setIngredients] = useState<Array<IngredientsData>>([]);
    const [ingredientInput, setIngredientInput] = useState<string>();
    const [ingredientRecipe, setIngredientRecipe] = useState<Array<SingleMealData>>([]);
    const [ingredientName, setIngredientName] = useState<string>();
    const [fade, setFade] = useState<boolean>(false);
    const [fade2, setFade2] = useState<boolean>(false);
    const [ingredientsPerPage] = useState<number>(5);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [changePage, setChangePage] = useState<boolean>(false);

    useEffect(() => {
        getAllIngredients(setIngredients);
        window.scrollTo(0, 0);
    }, []);

    const handleSingleIngredient = (ingredient: string) => {
        setFade(false);
        setFade2(false);
        ingredientInputRef.current!.value = '';
        setTimeout( () => {
            setIngredientInput('');
        }, 500)
        setIngredientName(ingredient);
        setTimeout( () => {
            getIngredientRecipes(setIngredientRecipe, ingredient);
        }, 500)
        setTimeout( () => {
            setFade2(true);
        }, 1500)
    }

    const ingredientInputRef = useRef<HTMLInputElement>(null);
    const handleIngredientWriting = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = ingredientInputRef.current!.value;
        setCurrentPage(1);
        if(enteredText) {
            setFade(false);
            setTimeout( () => {
                setIngredientInput(enteredText);
            }, 500);
            setTimeout( () => {
                setFade(true);
            }, 600)
        }
    }

    const clearSearch = () => {
        ingredientInputRef.current!.value = '';
        setIngredientInput('');
        setIngredientRecipe([]);
        setIngredientName('');
    }

    const nextPage = (e: React.MouseEvent, i: number) => {
        setChangePage(!changePage);

        setTimeout(() => {
            setCurrentPage(i + 1)
            setChangePage(false)
        },250)
    };

    const previousPage = (e: React.MouseEvent, i: number) => {
        setChangePage(!changePage);

        setTimeout(() => {
            setCurrentPage(i - 1)
            setChangePage(false)
        },250)
    };

    let chosenIngredients: string[] = [];
    for (let i = 0; i < ingredients.length; i++) {
        if (ingredientInput && ingredients[i].strIngredient.toLowerCase().indexOf(ingredientInput) > 0) {
            chosenIngredients.push(ingredients[i].strIngredient)
        }
    }

    const indexLast = currentPage * ingredientsPerPage;
    const indexFirst = indexLast - ingredientsPerPage;
    const visibleIngredients = chosenIngredients.slice(indexFirst, indexLast);

    const ingredientsPageNumber = Math.ceil(chosenIngredients.length / ingredientsPerPage);

    let buttons: any[] = [];
    for (let i = 1; i <= ingredientsPageNumber; i++) {
        currentPage === i && (
            buttons.push (
                <div key={i} className='ingredients-buttons'>
                    {currentPage !== 1 &&
                    <i className='fas fa-long-arrow-alt-left' onClick={(e: React.MouseEvent<HTMLElement>) => previousPage(e, i)}></i>}
                    {currentPage !== ingredientsPageNumber &&
                    <i className='fas fa-long-arrow-alt-right' onClick={(e: React.MouseEvent<HTMLElement>) => nextPage(e, i)}></i>}
                </div>
            )
        )
    }

    return (
        <div className='page-container'>
            <section className='ingredients base-page'>
                <Back/>
                <h2 className="scroll-animation">Recipes' <span className='title-decorate'>Ingredients</span> </h2>

                <input className="base-page__buttons__input" placeholder="Start writing..." type='text'
                       id='base-page-input' ref={ingredientInputRef} onChange={handleIngredientWriting} onClick={clearSearch}/>
                <div className='base-page__buttons'>
                    <>
                        {ingredientInput ?
                            chosenIngredients.length > 0 ? visibleIngredients.map( (ingredient: string, id: number) => {
                                return (
                                    <Link activeClass="active" to="ingredient" spy={true} smooth={true} duration={1000}
                                          onClick={() => handleSingleIngredient(ingredient)} key={id} delay={500} offset={-50}>
                                        <div className='base-page__buttons__single buttons' style={{opacity:`${fade ? '.5' : '0'}`}}>
                                            <span>{ingredient}</span>
                                        </div>
                                    </Link>
                                )
                            }) :
                            <div className='base-page__buttons__single buttons' style={{opacity:`${fade ? '.5' : '0'}`}}>
                                <span>No results...</span>
                            </div>
                        :
                            null
                        }
                    </>
                    {chosenIngredients.length > 0 && buttons}
                </div>
            </section>

            <section className='photo__section flex-box' id='ingredient'>
                {ingredientRecipe ?  ingredientRecipe.length > 0 &&
                    <>
                        <h2>Dishes With <span className='title-decorate'>{ingredientName}</span></h2>
                        {ingredientRecipe.map( (meal: SingleMealData, index: number) => {
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
                        <h2>Dishes With <span className='title-decorate'>{ingredientName}</span></h2>
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
