import React from "react";
import useFetchUsers from "../components/customHooks/useFetchUsers";
import styles from "../../styles/addTask.module.css";

const AddTask = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [sellected, setSellected] = React.useState("");

  const refreshPage = () => {
    window.location.reload(true);
  };

  const { user, loading, error } = useFetchUsers(
    "http://localhost:4000/api/v1/register"
  );
  //console.log(user);

  const handleSelect = (e) => {
    setSellected(e.target.value);
    //console.log(e.target.value);
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/v1/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        id: sellected,
      }),
    });
    const data = await response.json();
    //console.log(data);
    if (data) {
      console.log(`Task added successfully: ${(title, description)}`);
      setTitle("");
      setDescription("");
    } else {
      console.log("Error adding task");
    }
    refreshPage();
  };
  //console.log(sellected);
  return (
    <section className={styles.AddTaskPage}>
      <div className={styles.AddTaskSection}>
        <form onSubmit={handleAddTask}>
          <input
            placeholder="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            rows="8"
            cols="53"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select value={sellected} onChange={handleSelect}>
            <option>Selecionar</option>
            {user?.map((user) => {
              return (
                <option key={user?._id} value={user?._id}>
                  {user?.username}
                </option>
              );
            })}
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <div className={styles.tasksAddedSection}>
        <table>
          <tr>
            <th>Task</th>
            <th>User/Team</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>Task Done</td>
            <td>User</td>
            <td>Date Created</td>
          </tr>
          <tr>
            <td>Task Done</td>
            <td>User</td>
            <td>Date Created</td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default AddTask;
