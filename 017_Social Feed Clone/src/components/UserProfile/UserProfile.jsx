import './UserProfile.css';

const UserProfile = ({ user, size = "medium" }) => {
  return (
    <div className={`user-profile ${size}`}>
      <img 
        src={user.avatar} 
        alt={`${user.name}'s avatar`}
        className="user-avatar"
      />
      <div className="user-info">
        <h3 className="user-name">{user.name}</h3>
        <p className="user-username">@{user.username}</p>
        {size === "large" && (
          <p className="user-bio">{user.bio}</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;