import { Profile } from "./components/Profile/Profile.js";
import { Statistics } from "./components/Statistics/Statistics.js";
import { FriendList } from "./components/FriendList/FriendList.js"
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory.js";
import user from "./components/user.json";
import statisticalData from "./components/statistical-data.json";
import friends from "./components/friends.json"
import transactions from "./components/transactions.json"

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
      <div className="transition">
        <TransactionHistory
        items = {transactions}
      />
      </div>
    </div>
  );
}

export default App;
