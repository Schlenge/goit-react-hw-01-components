import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendList(props) {
  return (
    <div className={styles.FriendList}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

FriendList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FriendList;
