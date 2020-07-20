import React, {useEffect, useState, useRef} from 'react';
import {
    useParams
} from "react-router-dom";
import Back from "../Navigations/Back";
import axios from "axios";
import heartNot from "../../assets/heart_not.png";
import heartLiked from "../../assets/heart_liked.png";
import shareDone from "../../assets/share_done.png";
import shareNot from "../../assets/share_not.png";
import ReplyForm from "./ReplyForm";
import {Footer} from "../Navigations/Footer";
import db from '../../api/db.json';

type PhotosApiResponse = {
    results: {urls: {regular: string}}[];
}

function BlogPost () {

    const [photos, setPhotos] = useState<string[]>();
    const [liked, setLiked] = useState<boolean>(false);
    const [likesNumber, setLikesNumber] = useState<number>();
    const [share, setShare] = useState<boolean>(false);
    const [sharesNumber, setSharesNumber] = useState<number>();
    const [replyForm, setReplyForm] = useState<boolean>(false);
    const [replyClicked, setReplyClicked] = useState<number>();


    let { id } = useParams();
    const post = db.blog[id - 1];
    console.log(post.likes)

    useEffect( () => {
        window.scrollTo(0, 0);
        setLikesNumber(post.likes)
        setSharesNumber(post.shares)

        let photoArray: string[] = [];

        axios
            .get<PhotosApiResponse>
            (`https://api.unsplash.com/search/photos?client_id=1FavNGGDNEiol0lspKANnpqyyBWdzLYvV5rVAlGw-Zg&page=${id}&per_page=10&query=food`)
            .then(response => {
                response.data.results.map( (photo:any) => photoArray.push(photo.urls.regular))
                setPhotos(photoArray)
            })
            .catch(err => {
                console.log(err.message)
            })

    }, [id])

    const likePost = () => {
        (liked) ? setLikesNumber( likesNumber && likesNumber - 1) : setLikesNumber( likesNumber && likesNumber + 1);
        setLiked(!liked);
    }

    const sharePost = () => {
        (share) ? setSharesNumber( sharesNumber && sharesNumber - 1) : setSharesNumber( sharesNumber && sharesNumber + 1);
        setShare(!share);
    }

    const handleNewReply = (e: React.FormEvent, id: number) => {
        console.log(e.currentTarget!.parentElement);
        setReplyClicked(id);
        setReplyForm(true);
    }


    const handleCloseReply = () => {
        setReplyForm(false);
    }

    const nameInputRef = useRef<HTMLInputElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleCommentForm = (event: React.FormEvent) => {

        event.preventDefault();
        const enteredName = nameInputRef.current!.value;
        const enteredText = textAreaRef.current!.value;
        console.log(enteredName);
        console.log(enteredText);

        const target = event.currentTarget!.parentElement!.parentElement!.parentElement;
        const replyId = Math.floor(Math.random() * Math.floor(10000));

        const reply =
            `<div key={replyId}>
                <span className='line-between'></span>
                <div className='blog__description__comments__single__reply'>
                    <div className='blog__description__comments__single__reply__details'>
                        <h4>{enteredName}</h4>
                        <p>{enteredText}</p>
                        <button className='small-button' onClick={(e) => handleNewReply(e, replyId)}>Reply</button>
                        {replyForm && replyClicked === replyId &&
                        <ReplyForm handleCommentForm={handleCommentForm} handleCloseReply={handleCloseReply}
                                   nameInputRef={nameInputRef} textAreaRef={textAreaRef}/>}
                    </div>
                </div>
            </div>`

        console.log(reply);
    }

    return (
        <>
            <Back/>
            <div className='blog'>
                <div className='blog__description'>
                            <section key={post.id}>
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
                                            <div key={index}>
                                                <img src={photos && photos[index]} alt={`photograph${index}`}/>
                                                <p>{i}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='blog__description__icons'>
                                    <div className='blog__description__icons__like'>
                                        <img src={liked ? heartLiked : heartNot} alt='like' onClick={likePost}/>
                                        <span>~ {likesNumber} ~</span>
                                    </div>
                                    <div className='blog__description__icons__share'>
                                        <img src={share ? shareDone : shareNot} alt='share' onClick={sharePost}/>
                                        <span>~ {sharesNumber} ~</span>
                                    </div>
                                </div>
                                <div className='blog__description__comments'>
                                    <h3>Comments</h3>
                                    {post.comments && post.comments.map( (comment: any, index: number) => {
                                        return (
                                                <div className='blog__description__comments__single' key={index} onClick={() => console.log(comment.id)}>
                                                    <h4>{comment.name}</h4>
                                                    <p>{comment.text}</p>
                                                    <button className='small-button' onClick={(e) => handleNewReply(e, comment.id)}>Reply</button>
                                                    {replyForm && replyClicked === comment.id &&
                                                    <ReplyForm handleCommentForm={handleCommentForm} handleCloseReply={handleCloseReply}
                                                               nameInputRef={nameInputRef} textAreaRef={textAreaRef}/>}

                                                    {comment.reply.length > 0 &&
                                                    comment.reply.map ( (reply: any, i: number) => {
                                                        console.log(reply)
                                                        return (
                                                            <div key={i}>
                                                                <span className='line-between'></span>
                                                                <div className='blog__description__comments__single__reply'>
                                                                    <div className='blog__description__comments__single__reply__details'>
                                                                        <h4>{reply.name}</h4>
                                                                        <p>{reply.text}</p>
                                                                        <button className='small-button' onClick={(e) => handleNewReply(e, reply.id)}>Reply</button>
                                                                        {replyForm && replyClicked === reply.id &&
                                                                        <ReplyForm handleCommentForm={handleCommentForm} handleCloseReply={handleCloseReply}
                                                                                   nameInputRef={nameInputRef} textAreaRef={textAreaRef}/>}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })

                                                    }

                                                    <span className='line-between'></span>
                                                </div>
                                        )
                                    })}
                                </div>
                            </section>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default BlogPost;
