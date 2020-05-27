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
            <div className='footer__links'>
                <div className='footer__links__list'>
                    <ul>
                        <li>
                            <a href='/'>
                                Lorem Ipsum
                            </a>
                        </li>

                        <li>
                            <a href='/'>
                                Lorem Ipsum
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                Lorem Ipsum
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='footer__links__list'>
                    <ul>
                        <li>
                            <a href='/'>
                                Lorem Ipsum
                            </a>
                        </li>

                        <li>
                            <a href='/'>
                                Lorem Ipsum
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                Lorem Ipsum
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='footer__links__list'>
                    <ul>
                        <li>
                            <a href='/'>
                                Lorem Ipsum
                            </a>
                        </li>

                        <li>
                            <a href='/'>
                                Lorem Ipsum
                            </a>
                        </li>
                        <li>
                            <a href='/'>
                                Lorem Ipsum
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}