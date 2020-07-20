import React from 'react';

interface ReplyFormProps {
    handleCloseReply: () => void;
    handleCommentForm: (event: React.FormEvent<Element>) => void;
    nameInputRef: any;
    textAreaRef: any;
}

function ReplyForm (props: ReplyFormProps) {

    return (
        <div className='reply'>
            <input type='text' placeholder='Name' ref={props.nameInputRef}/>
            <textarea placeholder='Your comment...' cols={30} rows={5} ref={props.textAreaRef}/>
            <div className='reply__buttons'>
                <button className='small-button' onClick={props.handleCommentForm}>Send</button>
                <button className='small-button' onClick={props.handleCloseReply}>X</button>
            </div>
        </div>

    )
}

export default ReplyForm;
