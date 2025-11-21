import { posts } from '../../data/mockData';
import Post from '../Post/Post';
import './Feed.css';

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed-header">
        <h1>Social Feed</h1>
        <p>Latest updates from your network</p>
      </div>
      
      <div className="posts-container">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;