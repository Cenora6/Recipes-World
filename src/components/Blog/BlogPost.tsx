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
import ScrollUp from "../Navigations/ScrollUp";

type PhotosApiResponse = {
    results: {urls: {regular: string}}[];
}

interface PhotoResponse {
    urls: {regular: string}
}

interface ReplyObject {
    id: number,
    main_comment: number | null,
    parent_id: number | null,
    name: string,
    text: string,
    reply: any[],
}

interface CommentObject {
    id: number,
    parent_id: number | null,
    main_comment: number | null,
    name: string,
    text: string,
    reply: Array<ReplyObject>,
}

function BlogPost () {

    const [photos, setPhotos] = useState<string[]>();
    const [liked, setLiked] = useState<boolean>(false);
    const [likesNumber, setLikesNumber] = useState<number>();
    const [share, setShare] = useState<boolean>(false);
    const [sharesNumber, setSharesNumber] = useState<number>();
    const [replyForm, setReplyForm] = useState<boolean>(false);
    const [replyParent, setReplyParent] = useState<number | null>();
    const [mainComment, setMainComment] = useState<number | null>();
    const [comments, setComments] = useState<Array<CommentObject>>();
    const [nameError, setNameError] = useState<boolean>(false);
    const [textError, setTextError] = useState<boolean>(false);

    const replyId = Math.floor(Math.random() * Math.floor(10000));

    let { id } = useParams();
    const post = db.blog[id - 1];

    useEffect( () => {
        window.scrollTo(0, 0);
        setLikesNumber(post.likes)
        setSharesNumber(post.shares)
        setComments(post.comments)

        let photoArray: string[] = [];

        axios
            .get<PhotosApiResponse>
            (`https://api.unsplash.com/search/photos?client_id=1FavNGGDNEiol0lspKANnpqyyBWdzLYvV5rVAlGw-Zg&page=${id}&per_page=10&query=food`)
            .then(response => {
                response.data.results.map( (photo: PhotoResponse) => photoArray.push(photo.urls.regular))
                setPhotos(photoArray)
            })
            .catch(err => {
                console.log(err.message)
            })

    }, [id, post.likes, post.shares, post.comments])

    const likePost = () => {
        (liked) ? setLikesNumber( likesNumber && likesNumber - 1) : setLikesNumber( likesNumber && likesNumber + 1);
        setLiked(!liked);
    }

    const sharePost = () => {
        (share) ? setSharesNumber( sharesNumber && sharesNumber - 1) : setSharesNumber( sharesNumber && sharesNumber + 1);
        setShare(!share);
    }

    const handleNewReply = (e: React.FormEvent, id: number, parent_id: number | null, commentId: number | null) => {
        setMainComment(commentId)
        setReplyParent(parent_id);
        setReplyForm(true);
    }

    const handleCloseReply = () => {
        setReplyForm(false);
        setNameError(false);
        setTextError(false);
    }

    const focusInput = () => {
        setNameError(false);
        setTextError(false);
    }

    const nameInputRef = useRef<HTMLInputElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleCommentForm = (event: React.FormEvent) => {

        event.preventDefault();
        const enteredName = nameInputRef.current!.value;
        const enteredText = textAreaRef.current!.value;

        if(enteredName.length === 0 || enteredText.length === 0) {

            if(enteredName.length === 0) {
                setNameError(true);
            }

            if (enteredText.length === 0) {
                setTextError(true);
            }

        } else {

            if(mainComment !== undefined && replyParent !== undefined) {

                const newReplyObject: ReplyObject = {
                    id: replyId,
                    main_comment: mainComment,
                    parent_id: replyParent,
                    name: enteredName,
                    reply: [],
                    text: enteredText
                };

                if(mainComment === null) {
                    comments!.push(newReplyObject);
                    setComments(comments);
                } else {
                    if(replyParent === mainComment) {
                        const filteredComment = comments!.filter( (c:CommentObject) => c.id === newReplyObject.main_comment);
                        filteredComment[0].reply.push(newReplyObject);
                        setComments(comments);
                    } else {
                        const filteredComment = comments!.filter( (c:CommentObject) => c.id === newReplyObject.main_comment);
                        const filteredReply = filteredComment[0].reply.filter( (c:ReplyObject) => c.id === newReplyObject.parent_id);
                        filteredReply[0].reply.push(newReplyObject);
                    }
                }
                setReplyForm(false);
            }
        }
    }

    return (
        <>
            <Back/>
            <ScrollUp/>
            <div className='blog flex-box'>
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
                            {post.full.split('\n\n').map( (i: string, index: number) => {
                                return (
                                    <div key={index} className='flex-box'>
                                        <img src={photos && photos[index]} alt={`photograph${index}`}/>
                                        <p>{i}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='blog__description__icons'>
                            <div className='blog__description__icons__like flex-box'>
                                <img src={liked ? heartLiked : heartNot} alt='like' onClick={likePost}/>
                                <span>~ {likesNumber} ~</span>
                            </div>
                            <div className='blog__description__icons__share flex-box'>
                                <img src={share ? shareDone : shareNot} alt='share' onClick={sharePost}/>
                                <span>~ {sharesNumber} ~</span>
                            </div>
                        </div>
                        <div className='blog__description__comments flex-box'>
                            <h3>Comments</h3>

                            <div className='blog__description__comments__reply'>
                                <button className='small-button' onClick={(e) =>
                                    handleNewReply(e, replyId, null, null)}>Reply to this blog post</button>
                                {replyForm && replyParent === null &&
                                <ReplyForm handleCommentForm={handleCommentForm} handleCloseReply={handleCloseReply}
                                           nameInputRef={nameInputRef} textAreaRef={textAreaRef} nameError={nameError}
                                           focusInput={focusInput} textError={textError}/>
                                }
                            </div>

                            {comments && comments.map( (comment: CommentObject, index: number) => {
                                return (
                                    <div className='blog__description__comments__single' key={index}>
                                        <h4>{comment.name}</h4>
                                        <p>{comment.text}</p>
                                        <button className='small-button' onClick={(e) =>
                                            handleNewReply(e, replyId, comment.id, comment.id)}>Reply</button>

                                        {replyForm && replyParent === comment.id &&

                                        <ReplyForm handleCommentForm={handleCommentForm} handleCloseReply={handleCloseReply}
                                                   nameInputRef={nameInputRef} textAreaRef={textAreaRef} nameError={nameError}
                                                   focusInput={focusInput} textError={textError}/>}

                                        {comment.reply.length > 0 &&
                                        comment.reply.map ( (reply: ReplyObject, i: number) => {
                                            return (
                                                <div className='blog__description__comments__single__reply' key={i}>
                                                    <div className='blog__description__comments__single__reply__details'>
                                                        <h4>{reply.name}</h4>
                                                        <p>{reply.text}</p>
                                                        <button className='small-button' onClick={(e) =>
                                                            handleNewReply(e, replyId, reply.id, comment.id)}>Reply</button>
                                                        {replyForm && replyParent === reply.id &&
                                                        <ReplyForm handleCommentForm={handleCommentForm} handleCloseReply={handleCloseReply}
                                                                   nameInputRef={nameInputRef} textAreaRef={textAreaRef} nameError={nameError}
                                                                   focusInput={focusInput} textError={textError}/>}

                                                        {reply.reply.length > 0 &&
                                                        reply.reply.map ( (reply: ReplyObject, i: number) => {
                                                            return (
                                                                <div className='blog__description__comments__single__reply__another' key={i}>
                                                                    <h4>{reply.name}</h4>
                                                                    <p>{reply.text}</p>
                                                                </div>
                                                            )
                                                        })}

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
