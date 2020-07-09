import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

interface navigationProps {
    showNavigation: () => void;
    details: boolean
}

export function Navigation(props: navigationProps) {

    const [width, setWidth] = useState<number>(window.innerWidth);
    const [clicked, setClicked] = useState<boolean>(false);

    useEffect(() => {
        const updateSize = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', updateSize);
        updateSize();

        return () => window.removeEventListener('resize', updateSize);

    }, []);

    const handleNavigation = () => {
        setClicked(!clicked)
    }

    return (

        (width < 767) ?
            <nav className={`navigation ${clicked ? 'show' : 'hide'}`}>

                <div className='navigation__lines' onClick={handleNavigation}>
                    <span className="navigation__line navigation__line__1"></span>
                    <span className="navigation__line navigation__line__2"></span>
                    <span className="navigation__line navigation__line__3"></span>
                </div>


                <ul>
                    <li>
                        <Link activeClass="active" to="header_1" spy={true} smooth={true} duration={1000} onClick={handleNavigation}>
                            Welcome
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="carousel" spy={true} smooth={true} duration={1000} onClick={handleNavigation}>
                            Blog Highlights
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="header_2" spy={true} smooth={true} duration={1000} onClick={handleNavigation}>
                            Statistics
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="form" spy={true} smooth={true} duration={1000} onClick={handleNavigation}>
                            Give it a try!
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="photo" spy={true} smooth={true} duration={1000} onClick={handleNavigation}>
                            Popular Dishes
                        </Link>
                    </li>
                </ul>
            </nav>
            :
            <nav className={`navigation ${props.details ? 'show' : 'hide'}`}
                 onMouseEnter={props.showNavigation} onMouseLeave={props.showNavigation}>
                <div className='navigation__decorations'>
                    <i className={`fas fa-long-arrow-alt-down ${props.details && 'rotate'}`}></i>
                    <div className="circle"></div>
                </div>
                <ul>
                    <li>
                        <Link activeClass="active" to="header_1" spy={true} smooth={true} duration={1000}>
                            Welcome
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="carousel" spy={true} smooth={true} duration={1000}>
                            Blog Highlights
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="header_2" spy={true} smooth={true} duration={1000}>
                            Statistics
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="form" spy={true} smooth={true} duration={1000}>
                            Give it a try!
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="photo" spy={true} smooth={true} duration={1000}>
                            Popular Dishes
                        </Link>
                    </li>
                </ul>
            </nav>
    );
}