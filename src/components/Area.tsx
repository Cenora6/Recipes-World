import React, {useState, useEffect} from 'react';
import {getAllAreas} from "../api/getRecipes";
import Back from "./Back";
import {Link, Route} from "react-router-dom";
import SingleArea from "./SingleArea";

const Area = ({ match }: any) => {
    const [area, setArea] = useState<string[]>([]);

    useEffect(() => {
        getAllAreas(setArea);
    }, []);

    return (
        <div className='area base-page' id='area'>
            <Back/>
            <h2 className="scroll-animation">Recipes' <span className='title-decorate'>Areas</span> </h2>
            <div className='area__buttons'>
                {area.map( (area: any, id: number) => {
                    return (
                        <Link to={`${match.url}/${area.strArea}`} key={id} replace>
                            <div className='area__buttons__single buttons'>
                                <span>{area.strArea}</span>
                            </div>
                        </Link>
                    )
                })}
            </div>

            <Route
                path={`${match.url}/:id`}
                render={(props) => <SingleArea {...props} />}
            />
        </div>
    );
}

export default Area;
