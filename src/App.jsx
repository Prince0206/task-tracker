/* eslint-disable no-unused-vars */
import Header from "./components/Header";
import Form from "./components/Form";
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
function App() {
  const [showForm, setShowForm] = useState(false);
  // const [tasks, setTasks] = useState([]);
  const [state, setState] = useState([]);
  const [taskData, setTaskData] = useState({
    title: "",
    time: "",
    reminder: false,
  });
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    setTaskData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setTaskData({
      title: "",
      time: "",
      reminder: false,
    });
    console.log(taskData);
    if (taskData.title && taskData.time) {
      const id = Math.floor(Math.random() * 1000) + 1;
      const newTaskData = { id, ...taskData };
      // setState((prev) => [...prev, newTaskData]);
      // console.log(state)
      console.log(newTaskData);
      addTask(newTaskData);
    } else {
      alert("fill in all empty fields");
    }
  }

  // function del(id) {
  //   setTasks((prev) => {
  //     return prev.filter((item, index) => {
  //       return index !== id;
  //     });
  //   });
  // }
  // function rem() {
  //   setTasks((prev) => {
  //     return {
  //       ...prev,
  //       reminder: !prev.reminder,
  //     };
  //   });
  // }

  function toggleReminder() {
    setTaskData((prev) => {
      return {
        ...prev,
        reminder: true,
      };
    });
  }

  function cardToggler(id) {
    setState(
      state.map((item) =>
        item.id === id
          ? {
              ...item,
              reminder: !item.reminder,
            }
          : item
      )
    );

    console.log(state);
  }

  useEffect(() => {
    fetch("https://flaxen-cut-dentist.glitch.me/tasks")
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  }, []);

  function addTask(item) {
    fetch("https://flaxen-cut-dentist.glitch.me/tasks", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState([data, ...state]);
      });
  }

  function deleteTask(id) {
    fetch(`https://flaxen-cut-dentist.glitch.me/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(state.filter((item) => item.id !== id));
      });
  }

 const getTask = (id) => {
    fetch(`https://flaxen-cut-dentist.glitch.me/tasks/${id}`)
    .then(res=> res.json())
    .then (data => data)

  }

  // function remToggle(id) {
  //   const singleTask = getTask(id)
  //   console.log(singleTask);
  //   // fetch(`http://localhost:3000/tasks/${id}`, {
  //   //   method: "PUT",
  //   //   headers: {
  //   //     Accept: "application/json",
  //   //     "Content-Type": "application/json",
  //   //   },
  //   //   // body: JSON.stringify(state),
  //   // })
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     //   setState(state.map((item) =>

  //   //     // ));
  //   //     console.log(data);
  //   //     const updatedTask = { ...data, reminder: !data.reminder };
  //   //     console.log(updatedTask);

  //   //     setState((prev) => {
  //   //       console.log(prev);
  //   //     });
  //   //   });
  // }

  return (
    <div className="">
      <div className="sm:w-5/12 mx-auto bg-white h-screen">
        <Header />
        <Form
          handleChange={handleChange}
          showform={showForm}
          taskData={taskData}
          toggleForm={toggleForm}
          toggleReminder={toggleReminder}
          handleSubmit={handleSubmit}
          length={state.length}
        />
        {state.map((item, index) => {
          // eslint-disable-next-line react/jsx-key
          return (
            <Card
              key={item.id}
              id={item.id}
              data={item}
              toggler={cardToggler}
              // tasks={tasks}
              del={deleteTask}
              // reminder={rem}
            />
          );
        })}
      </div>
    </div>
  )
}

export default App;
