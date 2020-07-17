import React, {useState, useEffect} from 'react';
import welcome1 from './../assets/welcome1.jpg';
import welcome2 from './../assets/welcome2.jpg';
import welcomeSquare1 from './../assets/welcome_square1.jpg';
import welcomeSquare2 from './../assets/welcome_square2.jpg';
import welcomeSquare3 from './../assets/welcome_square3.jpg';
import welcomeSquare4 from './../assets/welcome_square4.jpg';
import welcomeSquare5 from './../assets/welcome_square5.jpg';
import welcomeSquare6 from './../assets/welcome_square6.jpg';
import apple from './../assets/icons/fruit.svg';
import pear from './../assets/icons/pear.svg';
import orange from './../assets/icons/orange.svg';
import cherry from './../assets/icons/cherry.svg';
import watermelon from './../assets/icons/watermelon.svg';
import grapes from './../assets/icons/grapes.svg';
import banana from './../assets/icons/banana.svg';
import strawberry from './../assets/icons/strawberry.svg';
import pineapple from './../assets/icons/pineapple.svg';
import avocado from './../assets/icons/avocado.svg';
import raspberry from './../assets/icons/raspberry.svg';
import mango from './../assets/icons/mango.svg';
import { scroll, loop } from '../functions/scroll-animation';
import Form from "./Form";
import Carousel from "./Carousel";
import PhotoSection from "./PhotoSection";
import ScrollUp from "./ScrollUp";
import {Navigation} from "./Navigation";
import {Footer} from "./Footer";

interface homeProps {
    width: number
}

function Home( props: homeProps ) {

    const [navDetails, setNavDetails] = useState<boolean>(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    function showNavigation() {
        setNavDetails(!navDetails);
    }

    window.addEventListener('scroll', function () {
        scroll(loop);
    });

    scroll(loop);

    return (
        <div className='page-container'>
            <Navigation showNavigation={showNavigation} details={navDetails} width={props.width}/>
            <section className='home'>
                <div className='home__welcome' id='header_1'>
                    {props.width > 767 &&
                    <img src={welcome1} alt='recipe1' className="show-from-right scroll-animation"/>
                    }
                    <div className='home__welcome__header'>
                        <div className='home__welcome__header__text'>
                            <h2 className="scroll-animation">Recipes' <span className='title-decorate'>World</span> </h2>
                            <p>This website was created for those who spend their days trying out new recipes in
                                the kitchen, for those who always want to taste something new and original. Check our
                                food recipes based on the dish name, category, ingrediens or area!</p>
                        </div>
                        <div className="home__welcome__header__images show-from-left scroll-animation">
                            <img src={welcomeSquare1} alt='welcome_square1'/>
                            <img src={welcomeSquare2} alt='welcome_square2'/>
                            <img src={welcomeSquare3} alt='welcome_square3'/>
                        </div>

                    </div>
                </div>

                <div className='home__decoration'>
                    <img src={banana} alt='banana'/>
                    <img src={strawberry} alt='strawberry'/>
                    <img src={pineapple} alt='pineapple'/>
                </div>

                <Carousel/>

                <div className='home__decoration'>
                    <img src={apple} alt='apple'/>
                    <img src={pear} alt='pear'/>
                    <img src={orange} alt='orange'/>
                </div>
                <div className='home__welcome' id='header_2'>
                    <div className='home__welcome__header'>
                        <div className='home__welcome__header__text'>
                            <h2 className="scroll-animation">Recipes' <span className='title-decorate'>Statistics</span> </h2>
                            <div className='home__welcome__header__text__categories'>
                                <div className='diamond  show-from-left scroll-animation'>
                                    <span>563</span>
                                    <span className='rotated'>ingredients</span>
                                </div>
                                <div className='diamond  show-from-left scroll-animation'>
                                    <span>236</span>
                                    <span className='rotated'>recipes</span>
                                </div>
                                <div className='diamond  show-from-left scroll-animation'>
                                    <span>24</span>
                                    <span className='rotated'>areas</span>
                                </div>
                            </div>
                        </div>
                        <div className="home__welcome__header__images show-from-left scroll-animation">
                            <img src={welcomeSquare4} alt='welcome_square4'/>
                            <img src={welcomeSquare5} alt='welcome_square5'/>
                            <img src={welcomeSquare6} alt='welcome_square6'/>
                        </div>
                    </div>
                    {props.width > 767 &&
                    <img src={welcome2} alt='recipe2' className="show-from-right scroll-animation"/>
                    }
                </div>
                <div className='home__decoration'>
                    <img src={watermelon} alt='apple'/>
                    <img src={grapes} alt='pear'/>
                    <img src={cherry} alt='orange'/>
                </div>
                <Form/>
                <div className='home__decoration'>
                    <img src={raspberry} alt='raspberry'/>
                    <img src={mango} alt='mango'/>
                    <img src={avocado} alt='avocado'/>
                </div>
                <PhotoSection/>
            </section>
            <ScrollUp/>
            <Footer/>
        </div>
    );
}

export default Home;
