import React, {useState, useEffect} from 'react';
import {getAllAreas, getRecipeFromArea} from "../../api/getRecipes";
import Back from "../Navigations/Back";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import ScrollUp from "../Navigations/ScrollUp";
import {Footer} from "../Navigations/Footer";
import {AreaType, SingleMealData} from "./search.model";

const Area = () => {
    const [area, setArea] = useState<Array<AreaType>>([]);
    const [areaRecipes, setAreaRecipes] = useState<Array<SingleMealData>>([]);
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
        }, 1700)
    }

    return (
        <div className='page-container'>
            <section className='area base-page'>
                <Back/>
                <h2 className="scroll-animation"> Recipes' <span className='title-decorate'>Areas</span> </h2>
                <div className='base-page__buttons flex-box'>
                    {area.map( (singleArea: AreaType, id: number) => {
                        return (

                            <Link activeClass="active" to="area" spy={true} smooth={true} duration={1000}
                                  onClick={() => handleSingleArea(singleArea.strArea)} key={id} delay={500} offset={-50}>
                                <div className='base-page__buttons__single buttons'>
                                    <span>{singleArea.strArea}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </section>

            <section className='photo__section flex-box' id='area'>
                {areaRecipes.length > 0 &&
                <>
                    <h2>Dishes From <span className='title-decorate'>{areaName}</span></h2>
                    {areaRecipes.map( (meal: SingleMealData, index: number) => {
                        return (
                            <NavLink to={`/recipe/${meal.idMeal}`} className={`photo__section__single ${fade ? 'shown' : 'hidden'}`} key={index}
                                     onAnimationEnd={() => setFade(false)}>
                                <div className='photo__section__single__box'>
                                    <img src={meal.strMealThumb} alt={`dish${index}`}/>
                                    <span>{meal.strMeal}</span>
                                </div>
                            </NavLink>
                        )
                    })}
                </>
                }

            </section>
            <ScrollUp/>
            <Footer/>
        </div>
    );
}

export default Area;
