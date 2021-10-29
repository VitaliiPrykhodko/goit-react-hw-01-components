import { FriendListItem } from "./FriendListItem.js";

export const FriendList = ({ friends}) => {
    return <ul className="friend-list">
        {
          friends.map((friend) => {
              return  <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    key={friend.id}
                />
            })
             }
      </ul>
};

