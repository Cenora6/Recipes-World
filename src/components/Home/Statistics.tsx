import React, {useState, useEffect} from 'react';
import {
    getAllAreas,
    getAllIngredients,
    getTotalNumberOfRecipes
} from "../../api/getRecipes";

interface AreaType {
    strArea: string
}

export function Statistics() {

    const [ingredients, setIngredients] = useState<string[]>([]);
    const [recipesNumber, setRecipesNumber] = useState<number>(0);
    const [areas, setAreas] = useState<AreaType[]>([]);

    useEffect(() => {
        getAllAreas(setAreas);
        getAllIngredients(setIngredients);
    }, [])

    useEffect(() => {
        getTotalNumberOfRecipes(areas, setRecipesNumber);
    }, [areas])

    return (
        <div className='home__welcome__header__text'>
            <h2 className="scroll-animation">Recipes' <span className='title-decorate'>Statistics</span> </h2>
            <div className='home__welcome__header__text__categories'>
                <div className='diamond  show-from-left scroll-animation'>
                    <span>{ingredients && ingredients.length}</span>
                    <span className='rotated'>ingredients</span>
                </div>
                <div className='diamond  show-from-left scroll-animation'>
                    <span>{recipesNumber && recipesNumber}</span>
                    <span className='rotated'>recipes</span>
                </div>
                <div className='diamond  show-from-left scroll-animation'>
                    <span>{areas && areas.length}</span>
                    <span className='rotated'>areas</span>
                </div>
            </div>
        </div>
    )
}