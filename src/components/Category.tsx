import React, {useState, useEffect} from 'react';
import {getAllCategories} from "../api/getRecipes";
import Back from "./Back";
import {Link, Route} from "react-router-dom";
import SingleCategory from "./SingleCategory";

const Category = ({ match }: any) => {
    const [category, setCategory] = useState<string[]>([]);

    useEffect(() => {
        getAllCategories(setCategory);
    }, []);

    return (
        <>
            <div className='category base-page' id='category'>
                <Back/>
                <h2 className="scroll-animation">Recipes' <span className='title-decorate'>Categories</span> </h2>

                <div className='category__buttons'>
                    {category.map( (category: any, id: number) => {
                        return (
                            <Link to={`${match.url}/${category.strCategory}`} key={id} replace  className='category__buttons__single buttons'>
                                <div key={id}>
                                    <img src={category.strCategoryThumb} alt={category.strCategory}/>
                                    <span>{category.strCategory}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>


            <Route
                path={`${match.url}/:id`}
                render={(props) => <SingleCategory {...props} />}
            />
        </>
    );
}

export default Category;
