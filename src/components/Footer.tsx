import React from 'react';

interface footerProps {
    showFooter: () => void;
    details: boolean
}

export function Footer(props: footerProps) {

    return (
        <nav className={`footer ${props.details ? 'show' : 'hide'}`}
             onMouseEnter={props.showFooter} onMouseLeave={props.showFooter}>
            <div className='footer__decorations'>
                <i className={`fas fa-long-arrow-alt-up ${props.details && 'rotate'}`}></i>
                <div className="circle"></div>
            </div>
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        <Link activeClass="active" to="header_1" spy={true} smooth={true} duration={1000}>*/}
            {/*            Lorem Ipsum*/}
            {/*        </Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link activeClass="active" to="header_2" spy={true} smooth={true} duration={1000}>*/}
            {/*            Lorem Ipsum*/}
            {/*        </Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link activeClass="active" to="form" spy={true} smooth={true} duration={1000}>*/}
            {/*            Give it a try!*/}
            {/*        </Link>*/}
            {/*    </li>*/}
            {/*</ul>*/}
        </nav>
    );
}