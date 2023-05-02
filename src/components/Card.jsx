/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function Card({ data, toggler, id, del }) {
  return (
    <div className="">
      <div
        onDoubleClick={() => toggler(data.id)}
        className={
          data.reminder
            ? "w-5/6 mx-auto border-l-4 border-l-red-500 border my-5 rounded p-3 shadow-lg flex items-center justify-between"
            : "w-5/6 mx-auto border my-5 rounded p-3 shadow-lg flex items-center justify-between"
        }
      >
        <div>
          <h1 className="font-bold">{data.title}</h1>
          <p className="font-light">{data.time}</p>
        </div>

        <IoCloseSharp
          onClick={() => {
            del(data.id);
          }}
          className="text-red-500 text-xl "
        />
      </div>
    </div>
  );
}
