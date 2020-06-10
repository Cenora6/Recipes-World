import React from 'react';

function Form() {

    return (
        <div className='home__form' id='form'>
            <h2>Search for the <span className='title-decorate'>recipe</span></h2>
            <div className='home__form__buttons'>
                <div className='home__form__buttons__single'>
                    <i className="fas fa-pencil-alt"></i>
                    <span>Name</span>
                </div>
                <div className='home__form__buttons__single'>
                    <i className="fas fa-map-marked-alt"></i>
                    <span>Area</span>
                </div>
                <div className='home__form__buttons__single'>
                    <i className="fas fa-server"></i>
                    <span>Category</span>
                </div>
                <div className='home__form__buttons__single'>
                    <i className="fas fa-apple-alt"></i>
                    <span>Ingredients</span>
                </div>

                {/*<button className='big-button'>Name</button>*/}
                {/*<button className='big-button'>Categories</button>*/}
                {/*<button className='big-button'>Area</button>*/}
                {/*<button className='big-button'>Ingredients</button>*/}
            </div>

        </div>
    );
}

export default Form;
