import React, {useState, MouseEvent} from 'react';

export function Footer() {

    const [contact, setContact] = useState<string>();
    const [showIcons, setShowIcons] = useState<boolean>(false);

    function handleContactSet(event: MouseEvent) {
        let target = event.target as Element;
        setContact(target.id);
        setShowIcons(true);
    }

    function cleanContact() {
        setShowIcons(false);
    }

    return (
        <footer className='footer'>
            <div className='footer__copyright'>
                <i className="fas fa-copyright"></i>
                <div className='footer__copyright__names'>
                    <span>Aleksandra Gasidło </span>
                    <p><span>Cenora</span> 06</p>
                </div>
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
                <span className='line'></span>
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
                <span className='line'></span>
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
            <div className='footer__icons'>
                <div className='footer__icons__single'>
                    <span className={`${contact === 'facebook' && showIcons && 'show-contact'}`}>Facebook</span>
                    <i className="fab fa-facebook" id='facebook' onMouseEnter={handleContactSet} onMouseLeave={cleanContact}></i>
                </div>
                <div className='footer__icons__single'>
                    <span className={`${contact === 'google' && showIcons && 'show-contact'}`}>Google+</span>
                    <i className="fab fa-google-plus" id='google' onMouseEnter={handleContactSet} onMouseLeave={cleanContact}></i>
                </div>
                <div className='footer__icons__single'>
                    <span className={`${contact === 'twitter' && showIcons && 'show-contact'}`}>Twitter</span>
                    <i className="fab fa-twitter" id='twitter' onMouseEnter={handleContactSet} onMouseLeave={cleanContact}></i>
                </div>
                <div className='footer__icons__single'>
                    <span className={`${contact === 'instagram' && showIcons && 'show-contact'}`}>Instagram</span>
                    <i className="fab fa-instagram" id='instagram' onMouseEnter={handleContactSet} onMouseLeave={cleanContact}></i>
                </div>
            </div>
        </footer>
    );
}