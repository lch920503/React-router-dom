import React from "react";
import { users } from "../components/db";
import { Link, useSearchParams } from "react-router-dom";

const Home = () => {
  const [readSearchParams, setReadSearchParams] = useSearchParams();

  // console.log("readSearchParams", readSearchParams);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
