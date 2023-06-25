import css from "./FriendListItem.module.css"
import PropTypes from 'prop-types';

export const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <>
      <span className={`${css.status} ${isOnline ? css.online : ''}`}></span>
      <div className={css.avatar_bg}>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      </div>
      <p className={css.name}>{name}</p>
    </>
  );
};


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};