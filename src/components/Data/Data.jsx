import React, { useEffect, useState } from "react";
import Users from "../Users/Users";

const Data = () => {
  //? load data from https://randomuser.me/api/?results=15
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=16")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return <Users usersSet={user} />;
};

export default Data;
