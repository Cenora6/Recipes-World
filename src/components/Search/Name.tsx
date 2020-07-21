import React, {useState, useRef, useEffect} from 'react';
import {getRecipes} from "../../api/getRecipes";
import Back from "../Navigations/Back";
import {NavLink} from "react-router-dom";
import ScrollUp from "../Navigations/ScrollUp";
import {Footer} from "../Navigations/Footer";
import {Link} from "react-scroll";

const Names = () => {
    const [recipeNames, setRecipeNames] = useState<string[]>([]);
    const [fade, setFade] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [searchName, setSearchName] = useState<string>();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const nameInputRef = useRef<HTMLInputElement>(null);

    const handleRecipesWriting = () => {
        const enteredText = nameInputRef.current!.value;
        setSearchName(enteredText);
    }

    const handleSearchForRecipe = (event: React.FormEvent) => {
        event.preventDefault();
        setFade(false);
        if(searchName) {
            if (searchName!.length === 0) {
                setTimeout( () => {
                    setRecipeNames([]);
                    setSearchName('');
                }, 500);
            } else {
                setTimeout( () => {
                    getRecipes(setRecipeNames, searchName!);
                    setSearchName('');
                }, 500);
            }
        } else {
            nameInputRef.current!.value = 'This field can not be empty';
            setError(true);
        }

        setTimeout( () => {
            setFade(true);
        }, 1700)
    };

    const handleClear = () => {
        setRecipeNames([]);
        nameInputRef.current!.value = '';
        setError(false);
    }

    console.log(searchName)

    return (
        <div className='page-container'>
            <section className='name base-page'>
                <Back/>
                <h2 className="scroll-animation">Recipes' <span className='title-decorate'>Names</span> </h2>

                <form onSubmit={handleSearchForRecipe}>
                    <input className={`base-page__buttons__input ${error && 'error'}`} placeholder={error ? '' : 'Start writing...'} type='text'
                           id='base-page-input' ref={nameInputRef} onChange={handleRecipesWriting} onClick={handleClear}/>
                    <Link activeClass='active' to={`${!searchName ? '' : 'name'}`} spy={true} smooth={true} duration={1000} delay={500} offset={-50} >
                        <button className='medium-button' onClick={handleSearchForRecipe}>Search</button>
                    </Link>
                </form>


            </section>

            <section className='photo__section flex-box' id='name'>
                {recipeNames ? recipeNames.length > 0 &&
                    recipeNames.map((meal: any, index: number) => {
                        return (
                            <NavLink to={`/recipe/${meal.idMeal}`} className={`photo__section__single ${fade ? 'shown' : 'hidden'}`} key={index}
                                     onAnimationEnd={() => setFade(false)}>
                                <div className='photo__section__single__box'>
                                    <img src={meal.strMealThumb} alt={`dish${index}`}/>
                                    <span>{meal.strMeal}</span>
                                </div>
                            </NavLink>
                        )
                    })
                    :
                    <p className={`${fade ? 'shown' : 'hidden'}`}>No results...</p>

                }
            </section>
            <ScrollUp/>
            <Footer/>
        </div>
    );
}

export default Names;
