import React, {useState, useEffect} from 'react';
import {getAllCategories, getRecipesFromCategory} from "../../api/getRecipes";
import Back from "../Navigations/Back";
import { Link } from "react-scroll";
import {NavLink} from "react-router-dom";
import ScrollUp from "../Navigations/ScrollUp";
import {Footer} from "../Navigations/Footer";

interface SingleMealData {
    idMeal: string,
    strMeal: string,
    strMealThumb: string
}

interface SingleCategory {
    idCategory: string,
    strCategory: string,
    strCategoryDescription: string,
    strCategoryThumb: string
}

const Category = () => {
    const [category, setCategory] = useState<Array<SingleCategory>>([]);
    const [categoryRecipes, setCategoryRecipes] = useState<Array<SingleMealData>>([]);
    const [categoryName, setCategoryName] = useState<string>();
    const [fade, setFade] = useState<boolean>(false);

    useEffect(() => {
        getAllCategories(setCategory);
        window.scrollTo(0, 0);
    }, []);

    const handleSingleCategory = (category: string) => {
        setFade(false);
        setCategoryName(category);
        setTimeout( () => {
            getRecipesFromCategory(setCategoryRecipes, category);
        }, 500)
        setTimeout( () => {
            setFade(true);
        }, 1700)
    }

    return (
        <div className='page-container'>
            <section className='category base-page'>
                <Back/>
                <h2 className="scroll-animation">Recipes' <span className='title-decorate'>Categories</span> </h2>

                <div className='base-page__buttons'>
                    {category.map( (singleCategory: SingleCategory, id: number) => {
                        return (
                            <Link activeClass="active" to="category" spy={true} smooth={true} duration={1000}
                                  onClick={() => handleSingleCategory(singleCategory.strCategory)} key={id} className='base-page__buttons__single buttons'
                                  delay={500} offset={-50}>
                                <div key={id}>
                                    <img src={singleCategory.strCategoryThumb} alt={singleCategory.strCategory}/>
                                    <span>{singleCategory.strCategory}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </section>

            <section className='photo__section flex-box' id='category'>
                {categoryRecipes.length > 0 &&
                <>
                    <h2>Dishes From <span className='title-decorate'>{categoryName}</span></h2>
                    {categoryRecipes.map((meal: SingleMealData, index: number) => {
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
                    }
                </>
                }
            </section>
            <ScrollUp/>
            <Footer/>
        </div>
    );
}

export default Category;
