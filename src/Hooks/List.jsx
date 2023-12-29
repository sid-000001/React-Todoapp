import React from "react";
import { useContext } from "react";
import { ListContext } from "../context/ListContextProvider";

export default function List() {
  const msg = useContext(ListContext);
  return <h1>Message : {msg}</h1>;
}
