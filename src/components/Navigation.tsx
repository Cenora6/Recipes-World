import React from 'react';
import { Link } from 'react-scroll';

interface navigationProps {
    showNavigation: () => void;
    details: boolean
}

export function Navigation(props: navigationProps) {

    return (
        <nav className={`navigation ${props.details ? 'show' : 'hide'}`}
             onMouseEnter={props.showNavigation} onMouseLeave={props.showNavigation}>
            <div className='navigation__decorations'>
                <i className={`fas fa-long-arrow-alt-down ${props.details && 'rotate'}`}></i>
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