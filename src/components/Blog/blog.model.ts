import React from "react";

export type PhotosApiResponse = {
    results: {urls: {regular: string}}[];
}

export interface PhotoResponse {
    urls: {regular: string}
}

export interface ReplyObject {
    id: number,
    main_comment: number | null,
    parent_id: number | null,
    name: string,
    text: string,
    reply: any[],
}

export interface CommentObject {
    id: number,
    parent_id: number | null,
    main_comment: number | null,
    name: string,
    text: string,
    reply: Array<ReplyObject>,
}

export interface ReplyFormProps {
    handleCloseReply: () => void;
    handleCommentForm: (event: React.FormEvent) => void;
    nameInputRef: React.RefObject<HTMLInputElement>;
    textAreaRef: React.RefObject<HTMLTextAreaElement>;
    nameError: boolean;
    focusInput: () => void;
    textError: boolean;
}