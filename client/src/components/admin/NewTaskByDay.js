import React, { useState } from "react";
import styles from "../../styles/admin/NewTaskByDay.module.css";
import useFetchUsers from "../customHooks/useFetchUsers";
import socketIOClient from "socket.io-client";

const NewTaskByDay = () => {
  const [team, setTeam] = useState("");
  const [byWhom, setByWhom] = useState(null);
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskArr, setTaskArr] = useState([]);

  const { user } = useFetchUsers("http://localhost:4000/api/v1/register");

  const socket = socketIOClient("http://localhost:4000");

  let id = "id" + Math.random().toString(16).slice(2); //random id

  // save title and description values to state on change event of input fields and textarea field respectively
  const saveTitle = (e) => {
    setTitle(e.target.value);
  };

  const saveDescription = (e) => {
    setDescription(e.target.value);
  };

  // delete task
  const deleteTask = (index) => {
    let newTaskArr = taskArr;
    newTaskArr.splice(index, 1);
    setTaskArr([...newTaskArr]);
  };

  // add task
  const handleAddTask = (e) => {
    e.preventDefault(); // prevent page refresh after submit form
    setTaskArr([...taskArr, { title, description, id, byWhom }]); // add new task to taskArr state array
    setTitle(""); // clear title input field
    setDescription(""); // clear description input field
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // prevent page refresh after submit form
    setTaskArr([]); // clear taskArr state array

    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/EntryDataByDay",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            date: date,
            todos: taskArr,
            team: team,
            id: team,
          }),
        }
      );
      socket.emit("new task", taskArr);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(team);
  return (
    <div className={styles.newtaskSection}>
      <form onSubmit={handleFormSubmit}>
        <h1>Add Taks</h1>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          placeholder="Task"
          value={title}
          type="text"
          onChange={saveTitle}
        />
        {/* <input value={description} type="text" onChange={saveDescription} /> */}
        <textarea
          placeholder="Description"
          value={description}
          type="text"
          onChange={saveDescription}
        ></textarea>
        <select onChange={(e) => setTeam(e.target.value)}>
          {user?.map((item) => {
            return (
              <option key={item._id} value={item._id}>
                {item.username}
              </option>
            );
          })}
        </select>
        <select onChange={(e) => setByWhom(e.target.value)}>
          <option value="Select Team">By Whom</option>
          <option value={"Person 1"}>Person 1</option>
          <option value={"Person 2"}>Person 2</option>
        </select>
        <div className={styles.btnSection}>
          <button onClick={handleAddTask}>Add Tasks</button>
          <button type="submit">Submit Taks</button>
        </div>
      </form>

      <div className={styles.tableSection}>
        <h2>Taks Added</h2>
        <table>
          <thead>
            <tr>
              {/* <th width="90px">Team</th> */}
              <th width="fit-content">Task</th>
              <th width="fit-content">Description</th>
              <th width="90px">ByWhom</th>
              <th width="90px">Actions</th>
            </tr>
          </thead>
          {taskArr.map((item, index) => {
            // map through taskArr state array and return table rows with task title and description and delete button for each task  and pass index of each task to deleteTask function  as argument to delete that task from taskArr state array  when delete button is clicked and also pass index as key to each table row for react to identify each row uniquely and avoid warning in console for testing purpose only
            // console.log(index);
            return (
              <tbody key={item.id}>
                <tr>
                  {/* <td>{team}</td> */}
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.byWhom}</td>
                  <td style={{ textAlign: "center" }}>
                    <button onClick={() => deleteTask(index)}>X</button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default NewTaskByDay;
