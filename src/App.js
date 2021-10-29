import { Profile } from "./components/Profile/Profile.js";
import { Statistics } from "./components/Statistics/Statistics.js";
import {FriendList} from "./components/FriendList/FriendList.js"
import user from "./components/user.json";
import statisticalData from "./components/statistical-data.json";
import friends from "./components/friends.json"

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={statisticalData} />
      <div className="friends">
              <FriendList
          friends={friends}
      />

      </div>
    </div>
  );
}

export default App;
