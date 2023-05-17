import React, { useState } from "react";
import "./users.css";
import UserCount from "../UserCount/UserCount";

const Users = (props) => {
  const users = props.usersSet.results;

  //? add friend event handler with useState
  const [addedList, addFriend] = useState([]);
  const handleAddFriend = (user) => {
    const newList = [...addedList, user];
    addFriend(newList);
  };


  try {
    return (
      <main>
        <section className="userSet-container">
          {users.map((user) => (
            <User
              userSet={user}
              key={user.dob.date}
              addFriend={handleAddFriend}
            />
          ))}
        </section>
        <UserCount friendList={addedList} />
      </main>
    );
  } catch (err) {
    console.log(err);
  }
};

const User = (props) => {
  const user = props.userSet;

  //? destructuring the user object
  const { name, email, location, phone, picture } = user;

  //* name object destructuring
  const { title, first, last } = name;
  //* location object destructuring
  const { country } = location;
  //* picture object destructuring
  const { large } = picture;

  return (
    <section className="user-container">
      <div className="img-container">
        <img src={large} alt={title + " " + first + " " + last} />
      </div>
      <div className="details-container">
        <h3>
          {title} {first} {last}
        </h3>
        <p>
          Email:<a href={email}> {email}</a>
        </p>
        <p>
          Phone: <a href={phone}>{phone}</a>
        </p>
        <p>Country: {country}</p>
        <button onClick={() => props.addFriend(user)}>+ Add Friend</button>
      </div>
    </section>
  );
};
export default Users;
