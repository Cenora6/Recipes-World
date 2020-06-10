import React from 'react';
import {Link} from "react-router-dom";

function Form() {

    return (
        <div className='home__form' id='form'>
            <h2>Search for the <span className='title-decorate'>recipe</span></h2>
            <div className='home__form__buttons'>
                <div className='home__form__buttons__single buttons'>
                    <i className="fas fa-pencil-alt"></i>
                    <span>Name</span>
                </div>
                <Link to='/area'>
                    <div className='home__form__buttons__single buttons'>
                        <i className="fas fa-map-marked-alt"></i>
                        <span>Area</span>
                    </div>
                </Link>
                <Link to='/category'>
                    <div className='home__form__buttons__single buttons'>
                        <i className="fas fa-server"></i>
                        <span>Category</span>
                    </div>
                </Link>
                <div className='home__form__buttons__single buttons'>
                    <i className="fas fa-apple-alt"></i>
                    <span>Ingredients</span>
                </div>
            </div>

        </div>
    );
}

export default Form;
