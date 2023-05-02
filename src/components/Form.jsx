/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Button from "./Button";

export default function Form({
  showform,
  length,
  taskData,
  handleSubmit,
  toggleReminder,
  handleChange,
  toggleForm,
}) 



{
  return (
    <div className="w-5/6  mx-auto">
      <div className="flex justify-between text-sm items-center mb-3">
        <p>
          Total task:{" "}
          <span className="bg-blue-800 text-white px-2">{length}</span>
        </p>
        <Button
          name={showform ? "close form" : "Add Task"}
          toggle={toggleForm}
        />
      </div>

      {showform && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="" className="text-sm">
            Task
          </label>
          <br />
          <input
            type="text"
            className="border w-full rounded my-2"
            onChange={handleChange}
            value={taskData.title}
            name="title"
          />
          <br />
          <label htmlFor="" className="text-sm">
            Day & Time
          </label>
          <br />
          <input
            type="date"
            className="border w-full rounded my-2"
            onChange={handleChange}
            value={taskData.time}
            name="time"
          />
          <br />

          <div className="flex items-center mb-3">
            <label htmlFor="" className="text-sm">
              Set reminder
            </label>
            <input
              checked={taskData.reminder}
              type="checkbox"
              className="ml-3"
              // defaultChecked={taskData.reminder}
              onChange={toggleReminder}
            />
          </div>

          <input
            type="submit"
            value="Save Task"
            className="w-full bg-blue-800  text-white px-10 py-1 rounded "
          />
        </form>
      )}
    </div>
  );
}
