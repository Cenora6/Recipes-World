import React, {useEffect, useState} from 'react';
import slide1 from './../assets/carousel/Carousel_1.jpg';
import slide2 from './../assets/carousel/Carousel_2.jpg';
import slide3 from './../assets/carousel/Carousel_3.jpg';
import slide4 from './../assets/carousel/Carousel_4.jpg';
import line from './../assets/line.png';

let carouselDataArray: { id: number, title: string, photo: string, text: string }[] = [
    { "id": 0, "title": 'Easy recipes', "photo": slide1, "text": 'Keep it easy with these simple but delicious recipes. From make-ahead lunches and midweek meals to fuss-free sides and moreish cakes, we`ve got everything you need.' },
    { "id": 1, "title": '10 Healthy Recipes For Breakfast, Lunch and Dinner',  "photo": slide2, "text": 'From breakfast to dinner and even desserts, we have curated the best of healthy recipes to try at home and relish with family and friends.' },
    { "id": 2, "title": '30 Cake Recipes for every occasion', "photo": slide3, "text": 'Old favourites and traditional bakes – take your pick from our timeless collection.' },
    { "id": 3, "title": 'Recipes for the youngest ones!', "photo": slide4, "text": 'The secret to getting a fussy child to eat and recipes they`ll love.' }
];

function Carousel() {
    const [recentSlide, setRecentSlide] = useState<number>(0);
    const [carouselData, setCarouselData] = useState<object>(carouselDataArray[recentSlide]);

    // useEffect(() => {
    //     setInterval(function() {
    //         let randomSlide;
    //         if (recentSlide < 3) {
    //             randomSlide = recentSlide + 1;
    //         } else {
    //             randomSlide = 0;
    //         }
    //
    //         setRecentSlide(randomSlide)
    //     }, 5000);
    // }, )




    console.log(carouselData)

    return (
        <div className='home__carousel' id='carousel'>
            <div className='home__carousel__slide'>
                <div className='home__carousel__slide__text'>


                    {/*<h3>Easy recipes</h3>*/}
                    {/*<img src={line} alt='decoration'/>*/}
                    {/*<p>Keep it easy with these simple but delicious recipes. From make-ahead lunches and midweek meals*/}
                    {/*    to fuss-free sides and moreish cakes, we've got everything you need.</p>*/}
                    {/*<div className='home__carousel__slide__text__button'>*/}
                    {/*    <button className='small-button'>Read more</button>*/}
                    {/*</div>*/}

                </div>
                <div className='home__carousel__slide__image'>
                    <img src={slide1} alt={`slide${'1'}`}/>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
