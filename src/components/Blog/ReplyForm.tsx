import React from 'react';
import {ReplyFormProps} from './blog.model';

function ReplyForm (props: ReplyFormProps) {

    return (
        <div className='reply'>
            <input type='text' placeholder={`${props.nameError ? "Name field can't be empty!" : "Name"}`}
                   ref={props.nameInputRef} className={`${props.nameError && 'input-error'}`} onFocus={props.focusInput}/>
            <textarea placeholder={`${props.textError ? "Text field can't be empty!" : "Your comment..."}`}
                      cols={30} rows={5} ref={props.textAreaRef} className={`${props.textError && 'input-error'}`}
                      onFocus={props.focusInput}/>
            <div className='reply__buttons'>
                <button className='small-button' onClick={props.handleCommentForm}>Send</button>
                <button className='small-button' onClick={props.handleCloseReply}>X</button>
            </div>
        </div>

    )
}

export default ReplyForm;
