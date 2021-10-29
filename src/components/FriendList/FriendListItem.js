export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className="item-friends" key={id}>
      {isOnline === true ? (
        <span className="status online"></span>
      ) : (
        <span className="status offline"></span>
      )}

      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name-friends">{name}</p>
    </li>
  );
};
