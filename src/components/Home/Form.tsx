import React from 'react';
import {Link} from "react-router-dom";

function Form() {

    return (
        <div className='home__form flex-box' id='form'>
            <h2>Search for the <span className='title-decorate'>recipe</span></h2>
            <div className='home__form__buttons flex-box'>
                <Link to='/names'>
                <div className='home__form__buttons__single buttons'>
                    <i className="fas fa-pencil-alt"></i>
                    <span>Name</span>
                </div>
                </Link>
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
                <Link to='/ingredients'>
                    <div className='home__form__buttons__single buttons'>
                        <i className="fas fa-apple-alt"></i>
                        <span>Ingredients</span>
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default Form;
