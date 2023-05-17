import React from "react";
import "./user-count.css";

const UserCount = (props) => {
  const friendList = props.friendList;
  const length = friendList.length;
  const incomeList = friendList.map((friend) => friend.location.street.number);
  const combinedIncome = incomeList.reduce((prev, cur) => prev + cur, 0);
  const friend = friendList.map((friend) => friend.name);

  return (
    <aside>
      {friend.map((name) => (
        <h2 key={name.first}>
          Friend : {name.title} {name.first} {name.last}
        </h2>
      ))}
      <h4>
        Total Friends: <small>{length}</small>
      </h4>
      <p>
        Their combined income (in month): <small>${combinedIncome}</small>
      </p>
    </aside>
  );
};

export default UserCount;
