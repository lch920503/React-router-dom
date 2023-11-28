import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../components/db";

const User = () => {
  const { userId } = useParams();
  console.log("userId", userId);
  return (
    <div>
      <h1>User With it {userId} is named</h1>
      <hr />
      <Link to="follower">팔로워입니다</Link>
      <Outlet context={{ nameOfMyUsers: users[Number(userId) - 1].name }} />
    </div>
  );
};

export default User;
