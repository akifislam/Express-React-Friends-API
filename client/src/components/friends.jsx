import { useEffect, useState } from "react";

function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friends")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="App">
      {friends.map((friend) => (
        <div key={friend}>{friend}</div>
      ))}
    </div>
  );
}

export default Friends;
