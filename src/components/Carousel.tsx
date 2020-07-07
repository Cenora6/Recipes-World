import React, {useEffect, useState} from 'react';
import {
    Link
} from "react-router-dom";
import Slider from "react-slick";
import line from './../assets/line.png';
import axios from "axios";
const BLOG_URL = "http://localhost:3001/blog"

const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <i className='fas fa-long-arrow-alt-right' onClick={onClick}></i>
    );
};

const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <i className='fas fa-long-arrow-alt-left' onClick={onClick}></i>
    );
};


function Carousel() {
    const [blog, setBlog] = useState<string[]>([]);

    useEffect(() => {
        axios
            .get<any>
            (BLOG_URL)
            .then(response => {
                setBlog(response.data);
            })
            .catch(err => {
                console.log(err.message)
            })
    }, []);

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>
    };

    return (
        <div id='carousel'>
            <Slider {...settings}>

                {
                    blog.map( (post: any) => {
                        return (
                            <div className='carousel' key={post.id}>
                                <div className='carousel__slide'>
                                    <div className='carousel__slide__text'>
                                        <h3>{post.title}</h3>
                                        <img src={line} alt='decoration'/>
                                        <p>{post.preview}</p>
                                        <Link to={`/blog/${post.id}`}>
                                            <div className='carousel__slide__text__button'>
                                                <button className='small-button'>Read more</button>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='carousel__slide__image'>
                                        <img src={post.image} alt='slide3'/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}

export default Carousel;
