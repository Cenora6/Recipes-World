import React from 'react';
import {
    Link
} from 'react-router-dom';

function Navigation() {
    return (
        <nav className='navigation'>
            <ul>
                <li>
                    <Link to='/'>
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
