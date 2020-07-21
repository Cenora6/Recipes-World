import React, {useEffect, useState} from 'react';
import scroll from '../../assets/vertical-scroll.png'

function ScrollUp() {
    const [showScroll, setShowScroll] = useState<boolean>(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)

        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, );


    function scrollTop () {
        window.scrollTo({
            top: 0, behavior: 'smooth'
        });
    }

    return (
        <div className='scroll flex-box' id='scroll' style={{opacity: showScroll ? '.8' : '0'}} onClick={scrollTop}>
            <img src={scroll} alt='scroll_up'/>
        </div>
    );
}

export default ScrollUp;
