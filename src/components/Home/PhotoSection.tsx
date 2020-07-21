import React from 'react';
import {Link} from "react-router-dom";
import db from '../../api/db.json';

function PhotoSection() {

    return (
        <div className='photo__section flex-box home' id='photo'>
            <h2>Popular <span className='title-decorate'>Dishes</span></h2>
                {
                    db.meals.map( (meal: any , index: number) => {
                        return (
                            <Link to={`/recipe/${meal.idMeal}`} className='photo__section__single' key={index}>
                                <div className='photo__section__single__box'>
                                    <img src={meal.strMealThumb} alt={`dish${index}`}/>
                                    <span>{meal.strMeal}</span>
                                </div>
                            </Link>
                        )
                    })
                }
        </div>
    );
}

export default PhotoSection;
