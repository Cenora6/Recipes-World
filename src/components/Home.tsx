import React, {useEffect, useState} from 'react';
import welcome1 from './../assets/welcome1.jpg';
import welcome2 from './../assets/welcome2.jpg';
import welcomeSquare1 from './../assets/welcome_square1.jpg';
import welcomeSquare2 from './../assets/welcome_square2.jpg';
import welcomeSquare3 from './../assets/welcome_square3.jpg';
import welcomeSquare4 from './../assets/welcome_square4.jpg';
import welcomeSquare5 from './../assets/welcome_square5.jpg';
import welcomeSquare6 from './../assets/welcome_square6.jpg';
import { loop } from '../functions/show-on-scroll';

const scroll = window.requestAnimationFrame ||
    function(callback: any){ window.setTimeout(callback, 1000/60)};

function Home() {
    // const [scroller, setScroller] = useState(0);
    // const [loaded, setLoaded] = useState(false);


    window.addEventListener('scroll', function () {
        scroll(loop);
    });

    scroll(loop);

    return (
        <div className='home'>
            <div className='home__welcome'>
                <img src={welcome1} alt='recipe1' className="inline-element show-on-scroll"/>
                <div className='home__welcome__header'>
                    <div className='home__welcome__header__text'>
                        <h2>Lorem Ipsum</h2>
                        <p>Vivamus eget risus ultrices, vestibulum augue quis, placerat ligula. Proin et nibh ornare,
                            rhoncus enim in, ultrices metus. Sed ligula odio, suscipit vel diam sit amet, placerat
                            congue ex. Proin vel odio cursus, viverra tortor id, mollis est. Cras odio augue, vehicula
                            sit amet condimentum ac, tempus et sem. Morbi pulvinar dui enim, quis molestie nunc pharetra
                            vitae. Praesent a nisl tortor. In sed rhoncus arcu, at ultricies quam.</p>
                    </div>
                    <div className={`home__welcome__header__images inline-element show-on-scroll`}>
                        <img src={welcomeSquare1} alt='welcome_square1'/>
                        <img src={welcomeSquare2} alt='welcome_square2'/>
                        <img src={welcomeSquare3} alt='welcome_square3'/>
                    </div>
                </div>
            </div>
            <div className='home__welcome'>
                <div className='home__welcome__header'>
                    <div className='home__welcome__header__text'>
                        <h2>Lorem Ipsum</h2>
                        <p>In scelerisque felis ut nisl volutpat dictum. Orci varius natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec in accumsan lectus. In hac habitasse platea
                            dictumst. Proin congue risus ac porta fringilla. In placerat quis sem a ornare. Nullam sed
                            elementum erat. Etiam tempor suscipit augue eu condimentum. Fusce quis lorem dictum,
                            tincidunt magna rutrum, consectetur lacus. Vestibulum vel tincidunt nisl. </p>
                    </div>
                    <div className={`home__welcome__header__images inline-element show-on-scroll`}>
                        <img src={welcomeSquare4} alt='welcome_square4'/>
                        <img src={welcomeSquare5} alt='welcome_square5'/>
                        <img src={welcomeSquare6} alt='welcome_square6'/>
                    </div>
                </div>
                <img src={welcome2} alt='recipe2' className={`inline-element show-on-scroll`}/>
            </div>
        </div>
    );
}

export default Home;
