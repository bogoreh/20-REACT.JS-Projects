import { useState } from 'react';
import { Heart, MessageCircle, Share } from 'lucide-react';
import { users } from '../../data/mockData';
import UserProfile from '../UserProfile/UserProfile';
import Comment from '../Comment/Comment';
import './Post.css';

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');

  const user = users.find(u => u.id === post.userId);

  if (!user) return null;

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      // In a real app, you would add the comment to the backend
      console.log('New comment:', newComment);
      setNewComment('');
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <UserProfile user={user} size="medium" />
        <span className="post-time">
          {new Date(post.timestamp).toLocaleDateString()}
        </span>
      </div>

      <div className="post-content">
        <p className="post-text">{post.content}</p>
        {post.image && (
          <img 
            src={post.image} 
            alt="Post visual content"
            className="post-image"
          />
        )}
      </div>

      <div className="post-stats">
        <span>{likeCount} likes</span>
        <span>{post.comments.length} comments</span>
      </div>

      <div className="post-actions">
        <button 
          className={`action-btn ${isLiked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          <Heart size={20} />
          Like
        </button>
        
        <button 
          className="action-btn"
          onClick={() => setShowComments(!showComments)}
        >
          <MessageCircle size={20} />
          Comment
        </button>
        
        <button className="action-btn">
          <Share size={20} />
          Share
        </button>
      </div>

      {showComments && (
        <div className="comments-section">
          <div className="comments-list">
            {post.comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
          
          <form onSubmit={handleAddComment} className="comment-form">
            <input
              type="text"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="comment-input"
            />
            <button type="submit" className="comment-submit">
              Post
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Post;