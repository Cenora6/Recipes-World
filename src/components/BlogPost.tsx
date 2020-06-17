import React, {useEffect, useState} from 'react';
import {
    useParams
} from "react-router-dom";
import Back from "./Back";
import axios from "axios";
import heartNot from "../assets/heart_not.png";
import heartLiked from "../assets/heart_liked.png";
import shareDone from "../assets/share_done.png";
import shareNot from "../assets/share_not.png";
import decoration from "../assets/decoration.png";

function BlogPost () {
    const [post, setPost] = useState<any>();
    const [photos, setPhotos] = useState<string[]>();
    const [liked, setLiked] = useState<boolean>(false);
    const [share, setShare] = useState<boolean>(false);

    let { id } = useParams();
    useEffect( () => {
        axios
            .get<any>
            (`http://localhost:3001/blog/${id}`)
            .then(response => {
                setPost([response.data]);
            })
            .catch(err => {
                console.log(err.message)
            })

        let photoArray: string[] = [];
        axios
            .get<any>
            (`https://api.unsplash.com/search/photos?client_id=1FavNGGDNEiol0lspKANnpqyyBWdzLYvV5rVAlGw-Zg&page=${id}&per_page=10&query=food`)
            .then(response => {
                response.data.results.map( (photo:any) => photoArray.push(photo.urls.regular)) //urls.full
                setPhotos(photoArray)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])

    const likePost = () => {
        setLiked(!liked);
    }

    const sharePost = () => {
        setShare(!share);
    }

    return (
        <>
            <Back/>
            <div className='blog'>
                <div className='blog__description'>
                    {post &&
                    post.map( (post: any) => {
                        return (
                            <>
                                <div className='blog__description__details'>
                                    <div className='blog__description__details__date'>
                                        <span>{post.date}</span>
                                    </div>
                                    <div className='blog__description__details__tags'>
                                        <span>lorem</span>
                                        <span>ipsum</span>
                                    </div>
                                </div>
                                <h3>{post.title}</h3>
                                <div className='blog__description__text'>
                                    {post.full.split('\n\n').map( (i: any, index: number) => {
                                        return (
                                            <>
                                                <img src={photos && photos[index]} alt={`photo${index}`}/>
                                                <p>{i}</p>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className='blog__description__icons'>
                                    <div className='blog__description__icons__like'>
                                        <img src={liked ? heartLiked : heartNot} alt='like' onClick={likePost}/>
                                        <span>Like!</span>
                                    </div>
                                    <div className='blog__description__icons__share'>
                                        <img src={share ? shareDone : shareNot} alt='share' onClick={sharePost}/>
                                        <span>Share!</span>
                                    </div>
                                </div>
                                <div className='blog__description__comments'>
                                    <h3>Comments</h3>
                                    <img src={decoration} alt='decoration' className='decoration'/>
                                    <div className='blog__description__comments__single'>
                                        <h4>Robert Ponell</h4>
                                        <p>Proin odio ex, molestie et accumsan finibus, imperdiet iaculis mi.
                                            Morbi at nulla euismod, porttitor arcu ut, cursus arcu. Praesent non
                                            sodales eros. Sed sit amet faucibus eros, sit amet cursus elit. Morbi
                                            commodo commodo dui, eget hendrerit sapien ornare quis. Morbi pretium et
                                            turpis ut iaculis. Praesent vitae dignissim orci. Duis ut neque et quam
                                            maximus luctus eu vitae velit. Suspendisse porta ut arcu eu fringilla.
                                        </p>
                                        <button className='small-button'>Reply</button>

                                        <span className='line-between'></span>

                                        <div className='blog__description__comments__single__reply'>
                                            <span className='line'></span>
                                            <div className='blog__description__comments__single__reply__details'>
                                                <h4>Patrick Wright</h4>
                                                <p>Sed sagittis et risus vestibulum semper. Nunc vel tristique dui. Integer
                                                    in purus eu quam auctor pretium gravida nec augue. Donec nisl ante,
                                                    mollis ut risus eget, vulputate aliquet est. Nunc sit amet tellus
                                                    sit amet nibh faucibus mattis.
                                                </p>
                                                <button className='small-button'>Reply</button>
                                            </div>
                                        </div>
                                    </div>
                                    <img src={decoration} alt='decoration' className='decoration'/>

                                    <div className='blog__description__comments_write'>

                                    </div>
                                </div>
                            </>
                        )
                    })
                    }
                </div>
            </div>
        </>
    );
}

export default BlogPost;
