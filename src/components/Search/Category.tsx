import React, {useState, useEffect} from 'react';
import {getAllCategories, getRecipesFromCategory} from "../../api/getRecipes";
import Back from "../Navigations/Back";
import { Link } from "react-scroll";
import {NavLink} from "react-router-dom";
import ScrollUp from "../Navigations/ScrollUp";
import {Footer} from "../Navigations/Footer";

const Category = () => {
    const [category, setCategory] = useState<string[]>([]);
    const [categoryRecipes, setCategoryRecipes] = useState<string[]>([]);
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

                <div className='category__buttons'>
                    {category.map( (category: any, id: number) => {
                        return (
                            <Link activeClass="active" to="category" spy={true} smooth={true} duration={1000}
                                  onClick={() => handleSingleCategory(category.strCategory)} key={id} className='category__buttons__single buttons'
                                  delay={500} offset={-50}>
                                <div key={id}>
                                    <img src={category.strCategoryThumb} alt={category.strCategory}/>
                                    <span>{category.strCategory}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </section>

            <section className='photo__section flex-box  category-recipes' id='category'>
                {categoryRecipes.length > 0 &&
                <>
                    <h2>Dishes From <span className='title-decorate'>{categoryName}</span></h2>
                    {categoryRecipes.map((meal: any, index: number) => {
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
