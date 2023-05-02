/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function Button({ name, toggle, submit }) {
  return (
    <button
      onClick={
        name == "Add Task" ? toggle : name == "Save Task" ? submit : toggle
      }
      className={
        name == "close form"
          ? " bg-red-500 text-white px-10 py-1 rounded "
          : name == "Save Task"
          ? " w-full bg-blue-800  text-white px-10 py-1 rounded "
          : "bg-blue-800  text-white px-10 py-1 rounded "
      }
    >
      {name}
    </button>
  );
}
