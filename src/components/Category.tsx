import React, {useState, useEffect} from 'react';
import {getAllCategories, getRecipesFromCategory} from "../api/getRecipes";
import Back from "./Back";
import { Link } from "react-scroll";
import {NavLink} from "react-router-dom";
import ScrollUp from "./ScrollUp";

const Category = () => {
    const [category, setCategory] = useState<string[]>([]);
    const [categoryRecipes, setCategoryRecipes] = useState<string[]>([]);
    const [categoryName, setCategoryName] = useState<string>();
    const [fade, setFade] = useState<boolean>(false);

    useEffect(() => {
        getAllCategories(setCategory);
    }, []);

    const handleSingleCategory = (category: string) => {
        setFade(false);
        setCategoryName(category);
        setTimeout( () => {
            getRecipesFromCategory(setCategoryRecipes, category);
        }, 500)
        setTimeout( () => {
            setFade(true);
        }, 1000)
    }

    return (
        <>
            <div className='category base-page'>
                <Back/>
                <h2 className="scroll-animation">Recipes' <span className='title-decorate'>Categories</span> </h2>

                <div className='category__buttons'>
                    {category.map( (category: any, id: number) => {
                        return (
                            <Link activeClass="active" to="category" spy={true} smooth={true} duration={1000}
                                  onClick={() => handleSingleCategory(category.strCategory)} key={id} className='category__buttons__single buttons'>
                                <div key={id}>
                                    <img src={category.strCategoryThumb} alt={category.strCategory}/>
                                    <span>{category.strCategory}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>

            {categoryRecipes.length > 0 &&
            <div className='photo__section category-recipes'>
                <h2 id='category'>Dishes From <span className='title-decorate'>{categoryName}</span></h2>
                {categoryRecipes.map((meal: any, index: number) => {
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
            }
            <ScrollUp/>
        </>
    );
}

export default Category;
