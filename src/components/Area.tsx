import React, {useState, useEffect} from 'react';
import {getAllAreas} from "../api/getRecipes";
import Back from "./Back";

function Area() {
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
                        <div key={id} className='area__buttons__single buttons'>
                            <span>{area.strArea}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Area;
