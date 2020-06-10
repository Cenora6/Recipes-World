import React, {useState, useEffect} from 'react';
import {getAllCategories} from "../api/getRecipes";
import Back from "./Back";

function Category() {
    const [category, setCategory] = useState<string[]>([]);

    useEffect(() => {
        getAllCategories(setCategory);
    }, []);

    console.log(category)
    return (
        <div className='category base-page' id='category'>
            <Back/>
            <h2 className="scroll-animation">Recipes' <span className='title-decorate'>Categories</span> </h2>

            <div className='category__buttons'>
                {category.map( (category: any, id: number) => {
                    return (
                        <div key={id} className='category__buttons__single buttons'>
                            <img src={category.strCategoryThumb} alt={category.strCategory}/>
                            <span>{category.strCategory}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Category;
