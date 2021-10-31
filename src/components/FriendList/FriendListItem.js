export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className="item-friends" key={id}>
      <span className={isOnline===true?"status online": "status offline"} ></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name-friends">{name}</p>
    </li>
  );
};
