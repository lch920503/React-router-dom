import React from "react";
import { useOutletContext } from "react-router-dom";

interface IFollowerUserContext {
  nameOfMyUsers: string;
}

const Follower = () => {
  const { nameOfMyUsers } = useOutletContext<IFollowerUserContext>();

  // console.log("nameOfMyUsers", nameOfMyUsers);

  return <h1>Follower {nameOfMyUsers}</h1>;
};

export default Follower;
