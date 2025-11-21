import { users } from '../../data/mockData';
import UserProfile from '../UserProfile/UserProfile';
import './Comment.css';

const Comment = ({ comment }) => {
  const user = users.find(u => u.id === comment.userId);

  if (!user) return null;

  return (
    <div className="comment">
      <UserProfile user={user} size="small" />
      <div className="comment-content">
        <p className="comment-text">{comment.content}</p>
        <span className="comment-time">
          {new Date(comment.timestamp).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default Comment;