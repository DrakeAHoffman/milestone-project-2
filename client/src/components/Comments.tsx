import { useState, useEffect, FormEvent } from "react";
import "./Comments.css";
const Comment = ({ comment }: { comment: string }) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <p>{comment}</p>
    </div>
  );
};

const CommentForm = ({
  addComment,
}: {
  addComment: (comment: string) => void;
}) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // todo:: check this action
    addComment(comment);
    setComment(comment);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <textarea
          className="textarea"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
        ></textarea>
      </div>
      <div>
        <button type="submit" className="comment-button">
          Add Comment
        </button>
      </div>
    </form>
  );
};
const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const addComment = (comment: string) => {
    setComments([...comments, comment]);
  };

  return (
    <div>
      <CommentForm addComment={addComment}></CommentForm>
      {comments.map((c, i) => (
        <Comment key={i} comment={c}></Comment>
      ))}
    </div>
  );
};

export default CommentSection;
