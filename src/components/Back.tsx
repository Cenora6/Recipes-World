import React from 'react';
import {Link} from "react-router-dom";

function Back() {

    return (
        <div className='back__button'>
            <Link to='/'>
                <div className="circle">
                    <span>go back</span>
                </div>
            </Link>
        </div>
    );
}

export default Back;
