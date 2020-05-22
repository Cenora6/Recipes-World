import React, {useState, useRef} from 'react';
import { Link } from 'react-scroll';
import cupcake from './../assets/cup-cake.png';

function Navigation() {
    const [details, setDetails] = useState<boolean>(false);
    const navigationRef = useRef<HTMLElement>(null);
    console.log(navigationRef)

    function showNavigation() {
        setDetails(!details);
    }

    return (
        <nav className={`navigation ${details ? 'show' : 'hide'}`}  onMouseEnter={showNavigation} onMouseLeave={showNavigation}>
            <div className='navigation__decorations'>
                <i className={`fas fa-long-arrow-alt-down ${details && 'rotate'}`}></i>
                <div className="circle"></div>
            </div>
            <ul>
                <li>
                    <Link activeClass="active" to="header_1" spy={true} smooth={true} duration={1000}>
                        Lorem Ipsum
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="header_2" spy={true} smooth={true} duration={1000}>
                        Lorem Ipsum
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="form" spy={true} smooth={true} duration={1000}>
                        Give it a try!
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
