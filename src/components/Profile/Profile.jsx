import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile({ user }) {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div className={styles.profile}>
      <img src={avatar} alt={username} />
      <h2>{username}</h2>
      <p>Tag: {tag}</p>
      <p>Location: {location}</p>
      <div>
        <p>Followers: {stats.followers}</p>
        <p>Views: {stats.views}</p>
        <p>Likes: {stats.likes}</p>
      </div>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }).isRequired,
};

export default Profile;
