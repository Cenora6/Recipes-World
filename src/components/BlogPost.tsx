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
                                        {console.log(i)}
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
