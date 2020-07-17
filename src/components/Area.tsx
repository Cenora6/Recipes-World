import React, {useState, useEffect} from 'react';
import {getAllAreas, getRecipeFromArea} from "../api/getRecipes";
import Back from "./Back";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import ScrollUp from "./ScrollUp";
import {Footer} from "./Footer";

const Area = () => {
    const [area, setArea] = useState<string[]>([]);
    const [areaRecipes, setAreaRecipes] = useState<string[]>([]);
    const [areaName, setAreaName] = useState<string>();
    const [fade, setFade] = useState<boolean>(false);

    useEffect(() => {
        getAllAreas(setArea);
        window.scrollTo(0, 0);
    }, []);

    const handleSingleArea = (area: string) => {
        setFade(false);
        setAreaName(area);
        setTimeout( () => {
            getRecipeFromArea(setAreaRecipes, area);
        }, 500)
        setTimeout( () => {
            setFade(true);
        }, 1500)
    }

    return (
        <div className='page-container'>
            <section className='area base-page'>
                <Back/>
                <h2 className="scroll-animation">Recipes' <span className='title-decorate'>Areas</span> </h2>
                <div className='area__buttons'>
                    {area.map( (area: any, id: number) => {
                        return (
                                <Link activeClass="active" to="area" spy={true} smooth={true} duration={1000}
                                      onClick={() => handleSingleArea(area.strArea)} key={id}>
                                    <div className='area__buttons__single buttons'>
                                        <span>{area.strArea}</span>
                                    </div>
                                </Link>
                        )
                    })}
                </div>
            </section>

            {areaRecipes.length > 0 &&
            <section className='photo__section category-recipes'>
                <h2>Dishes From <span className='title-decorate' id='area'>{areaName}</span></h2>
                {areaRecipes.map( (meal: any, index: number) => {
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
            </section>
            }
            <ScrollUp/>
            <Footer/>
        </div>
    );
}

export default Area;
