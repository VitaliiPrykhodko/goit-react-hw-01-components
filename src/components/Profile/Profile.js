import PropTypes from "prop-types";

export const Profile = (props) => {
  const { avatar, name, location, tag, stats: {followers, views, likes} } = props;

  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt={name}
          className="avatar"
          width="150"
          height="150"
        />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className = "item">
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className = "item"> 
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className = "item">
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    likes: PropTypes.number,
    views: PropTypes.number
  })
};
