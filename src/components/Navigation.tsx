import React from 'react';
import { Link } from 'react-scroll'

function Navigation() {
    return (
        <nav className='navigation'>
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
                    <Link to='/'>
                        Lorem Ipsum
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
