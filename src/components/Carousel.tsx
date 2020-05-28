import React from 'react';
import Slider from "react-slick";
import slide1 from './../assets/carousel/Carousel_1.jpg';
import slide2 from './../assets/carousel/Carousel_2.jpg';
import slide3 from './../assets/carousel/Carousel_3.jpg';
import slide4 from './../assets/carousel/Carousel_4.jpg';
import line from './../assets/line.png';

const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <i className='fas fa-long-arrow-alt-right' onClick={onClick}></i>
    );
};

const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <i className='fas fa-long-arrow-alt-left' onClick={onClick}></i>
    );
};


function Carousel() {

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>
    };

    return (
        <div id='carousel'>
        <Slider {...settings}>

            <div className='carousel'>
                <div className='carousel__slide'>
                    <div className='carousel__slide__text'>
                        <h3>Easy recipes</h3>
                        <img src={line} alt='decoration'/>
                        <p>Keep it easy with these simple but delicious recipes. From make-ahead lunches and midweek
                            meals to fuss-free sides and moreish cakes, we`ve got everything you need.</p>
                        <div className='carousel__slide__text__button'>
                            <button className='small-button'>Read more</button>
                        </div>
                    </div>
                    <div className='carousel__slide__image'>
                        <img src={slide3} alt='slide3'/>
                    </div>
                </div>
            </div>

            <div className='carousel'>
                <div className='carousel__slide'>
                    <div className='carousel__slide__text'>
                        <h3>10 Healthy Recipes For Breakfast, Lunch and Dinner</h3>
                        <img src={line} alt='decoration'/>
                        <p>From breakfast to dinner and even desserts, we have curated the best of healthy recipes to
                            try at home and relish with family and friends.</p>
                        <div className='carousel__slide__text__button'>
                            <button className='small-button'>Read more</button>
                        </div>
                    </div>
                    <div className='carousel__slide__image'>
                        <img src={slide2} alt='slide2'/>
                    </div>
                </div>
            </div>

            <div className='carousel'>
                <div className='carousel__slide'>
                    <div className='carousel__slide__text'>
                        <h3>30 Cake Recipes for every occasion</h3>
                        <img src={line} alt='decoration'/>
                        <p>Old favourites and traditional bakes – take your pick from our timeless collection.</p>
                        <div className='carousel__slide__text__button'>
                            <button className='small-button'>Read more</button>
                        </div>
                    </div>
                    <div className='carousel__slide__image'>
                        <img src={slide1} alt='slide1'/>
                    </div>
                </div>
            </div>

            <div className='carousel'>
                <div className='carousel__slide'>
                    <div className='carousel__slide__text'>
                        <h3>Recipes for the youngest ones!</h3>
                        <img src={line} alt='decoration'/>
                        <p>The secret to getting a fussy child to eat and recipes they`ll love.</p>
                        <div className='carousel__slide__text__button'>
                            <button className='small-button'>Read more</button>
                        </div>
                    </div>
                    <div className='carousel__slide__image'>
                        <img src={slide4} alt='slide4'/>
                    </div>
                </div>
            </div>
        </Slider>
        </div>
    );
}

export default Carousel;
