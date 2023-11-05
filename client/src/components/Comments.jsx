import React, { useState, useEffect } from "react";

const Comment = ({comment}) => {
    return (
    <div style={{marginTop: '10px'}}>
        <p>{comment.text}</p>
    </div>
    );
};

const CommentForm = ({addComment}) => {
    const [comment, setComment] = useState({ text: ''});

    const handleSubmit = (e) => {
        e.preventDefault(); // todo:: check this action
        addComment(comment)
        setComment({text: comment.text})
    }
    return (
        <form onSubmit={handleSubmit}>
          
           <div>
                <textarea
                    value={comment.text}
                    onChange={(e) => setComment({ ...comment, text: e.target.value })}
                    placeholder="Add a comment"
                ></textarea>
            </div>
            <div>
                <button type="submit">Add Comment</button>
            </div>   
        </form>
    )

    }
const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const addComment = (comment) => {
        setComments([...comments, comment])
    }

    return (
        <div>
            <CommentForm addComment={addComment}></CommentForm>
            {comments.map((c, i) => (
                <Comment key={i} comment={c}></Comment>
            ))}
        </div>
    )
}

export default CommentSection;